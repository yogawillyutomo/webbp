const rawBaseUrl = process.argv[2] || "http://localhost:3000";
const baseUrl = new URL(rawBaseUrl.endsWith("/") ? rawBaseUrl : `${rawBaseUrl}/`);

const routeChecks = [
  { path: "/", status: 200, contentType: "text/html" },
  { path: "/privacy", status: 200, contentType: "text/html" },
  { path: "/terms", status: 200, contentType: "text/html" },
  { path: "/robots.txt", status: 200, contentType: "text/plain" },
  { path: "/sitemap.xml", status: 200, contentType: "application/xml" },
  {
    path: "/manifest.webmanifest",
    status: 200,
    contentType: "application/manifest+json",
  },
  { path: "/opengraph-image", status: 200, contentType: "image/" },
  { path: "/twitter-image", status: 200, contentType: "image/" },
  {
    path: "/__webbp_release_smoke_missing__",
    status: 404,
    contentType: "text/html",
  },
];

const failures = [];
const responses = new Map();

function fail(message) {
  failures.push(message);
  console.error(`✗ ${message}`);
}

function pass(message) {
  console.log(`✓ ${message}`);
}

for (const check of routeChecks) {
  const url = new URL(check.path.replace(/^\//, ""), baseUrl);

  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: {
        "user-agent": "WEBBP-release-smoke/1.0",
      },
    });
    const body = await response.text();
    const contentType = response.headers.get("content-type") || "";

    responses.set(check.path, { response, body, contentType });

    if (response.status !== check.status) {
      fail(`${check.path} expected HTTP ${check.status}, got ${response.status}`);
    } else {
      pass(`${check.path} HTTP ${check.status}`);
    }

    if (!contentType.toLowerCase().includes(check.contentType.toLowerCase())) {
      fail(
        `${check.path} expected content-type containing ${check.contentType}, got ${contentType || "<missing>"}`
      );
    } else {
      pass(`${check.path} content-type ${contentType}`);
    }
  } catch (error) {
    fail(`${check.path} request failed: ${error.message}`);
  }
}

const home = responses.get("/");

if (home) {
  const requiredHeaders = [
    ["content-security-policy", "default-src 'self'"],
    ["referrer-policy", "strict-origin-when-cross-origin"],
    ["x-content-type-options", "nosniff"],
    ["x-frame-options", "DENY"],
    ["permissions-policy", "camera=()"],
    ["strict-transport-security", "max-age=31536000"],
  ];

  for (const [name, expectedFragment] of requiredHeaders) {
    const actual = home.response.headers.get(name) || "";

    if (!actual.includes(expectedFragment)) {
      fail(
        `header ${name} expected to contain ${expectedFragment}, got ${actual || "<missing>"}`
      );
    } else {
      pass(`header ${name}`);
    }
  }

  const homeExpectations = [
    ['rel="canonical"', "home canonical tag"],
    ["https://bakaranproject.com/", "home canonical URL"],
    ['property="og:title"', "Open Graph title"],
    ['name="twitter:card"', "Twitter card metadata"],
    ['type="application/ld+json"', "Organization JSON-LD"],
  ];

  for (const [needle, label] of homeExpectations) {
    if (!home.body.includes(needle)) {
      fail(`${label} missing from homepage HTML`);
    } else {
      pass(label);
    }
  }
}

for (const [path, canonical] of [
  ["/privacy", "https://bakaranproject.com/privacy"],
  ["/terms", "https://bakaranproject.com/terms"],
]) {
  const entry = responses.get(path);
  if (!entry) continue;

  if (!entry.body.includes(canonical)) {
    fail(`${path} canonical URL missing`);
  } else {
    pass(`${path} canonical URL`);
  }

  if (!entry.body.includes('id="main-content"')) {
    fail(`${path} is missing #main-content skip-link target`);
  } else {
    pass(`${path} skip-link target`);
  }
}

const missing = responses.get("/__webbp_release_smoke_missing__");
if (missing) {
  if (!missing.body.includes("Halaman tidak ditemukan")) {
    fail("custom 404 copy missing");
  } else {
    pass("custom 404 copy");
  }
}

if (failures.length > 0) {
  console.error(`\nWEBBP smoke gate FAILED with ${failures.length} issue(s).`);
  process.exitCode = 1;
} else {
  console.log(`\nWEBBP smoke gate PASSED for ${baseUrl.origin}.`);
}
