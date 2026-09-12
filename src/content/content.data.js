export const PRODUCT_STATUSES = [
  "In Development",
  "Pre-production",
  "Prototype",
];

export const PRODUCT_FILTER_TAGS = [
  "Platform",
  "Education",
  "Integration",
  "Shared Data",
  "Attendance",
  "PKL",
  "Laboratory",
  "Operations",
  "Mobility",
  "Edge",
  "AI / CV",
];

export const repositoryContent = {
  siteSettings: {
    siteName: "Bakaran Project",
    siteUrl: "https://bakaranproject.com",
    defaultTitle: "Bakaran Project — Sistem Digital untuk Operasional Nyata",
    defaultDescription:
      "Bakaran Project membangun sistem digital untuk kebutuhan operasional nyata, mulai dari digitalisasi sekolah, integrasi data, hingga mobility systems.",
    locale: "id_ID",
    language: "id",
    publicEmail: "bakaranproject@gmail.com",
    brandAssets: {
      logo: "/ico.png",
      vectorLogo: "/ico.svg",
      browserIcon: "/ico.png",
    },
    socialLinks: [
      {
        key: "github",
        label: "Bakaran Project di GitHub",
        href: "https://github.com/Bakaran-Project",
        display: "github.com/Bakaran-Project",
      },
    ],
  },

  navigation: [
    { id: "home", label: "Home", href: "#home", order: 1, visibility: "public" },
    {
      id: "solutions",
      label: "Solutions",
      href: "#solutions",
      order: 2,
      visibility: "public",
    },
    {
      id: "portfolio",
      label: "Products",
      href: "#portfolio",
      order: 3,
      visibility: "public",
    },
    { id: "about", label: "About", href: "#about", order: 4, visibility: "public" },
    {
      id: "contact",
      label: "Contact",
      href: "#contact",
      order: 5,
      visibility: "public",
    },
  ],

  hero: {
    eyebrow: "Digital Product & Systems Engineering",
    title: "Bakaran Project",
    subtitle: "Sistem Digital untuk Operasional Nyata",
    description:
      "Bakaran Project mengembangkan produk dan sistem digital untuk kebutuhan operasional nyata—dari ekosistem pendidikan dan integrasi platform hingga smart mobility dan edge systems. Setiap produk dikembangkan bertahap dengan ownership, source of truth, security boundary, dan evidence engineering yang jelas.",
    primaryCta: { label: "Jelajahi Solutions", href: "#solutions" },
    secondaryCta: { label: "Lihat Produk", href: "#portfolio" },
  },

  solutionsSection: {
    eyebrow: "Solution Domains",
    title: "Sistem Digital untuk Operasional Nyata",
    description:
      "Bakaran Project mengembangkan produk dan sistem digital pada domain pendidikan, platform operasional dan integrasi, serta smart mobility. Setiap solusi dibangun bertahap dengan ownership, boundary, dan evidence engineering yang jelas.",
    badges: [
      "Domain Ownership",
      "Controlled Source of Truth",
      "Evidence-Based Delivery",
    ],
  },

  solutionDomains: [
    {
      slug: "education-systems",
      title: "Education Systems",
      subtitle: "Attendance • PKL • Laboratory • Shared Data",
      summary: "Ekosistem sistem digital untuk operasional sekolah.",
      detail:
        "Solusi pendidikan yang dibangun dari kebutuhan operasional sekolah, mencakup presensi, kolaborasi PKL, pengelolaan laboratorium, serta fondasi identitas, tenant, akses, dan integrasi data bersama melalui produk Bakaran Platform, HADIRA, KARSA, dan SmartLab.",
      iconKey: "learning",
      relatedProductCodes: ["BP", "HADIRA", "KARSA", "SMARTLAB"],
      order: 1,
      published: true,
    },
    {
      slug: "operational-platforms-integration",
      title: "Operational Platforms & Integration",
      subtitle: "Platform • API • Mapping • Reconciliation",
      summary: "Fondasi platform dan integrasi untuk workflow lintas sistem.",
      detail:
        "Perancangan platform operasional dengan domain ownership yang jelas, authorization terkontrol, entity mapping, reconciliation, audit trail, dan adopsi integrasi bertahap. Area ini menjadi fondasi bersama yang mendukung pertumbuhan produk tanpa menghilangkan ownership domain lokal.",
      iconKey: "cloud",
      relatedProductCodes: ["BP", "HADIRA", "KARSA"],
      order: 2,
      published: true,
    },
    {
      slug: "smart-mobility-edge",
      title: "Smart Mobility & Edge",
      subtitle: "Parking • Edge Runtime • ANPR R&D",
      summary: "Sistem mobility dengan boundary software, edge, dan computer vision.",
      detail:
        "Pengembangan sistem mobility dan edge melalui SINGGAH, mencakup parking session, tariff, entitlement, payment boundary, edge operation, serta ANPR sebagai R&D terukur. Klaim performa dunia nyata tetap menunggu evidence dataset, model artifact, benchmark, dan pilot fisik yang memadai.",
      iconKey: "chip",
      relatedProductCodes: ["SINGGAH"],
      order: 3,
      published: true,
    },
  ],

  portfolioSection: {
    eyebrow: "Product Portfolio",
    title: "Produk yang Sedang Dibangun Bakaran Project",
    description:
      "Portofolio ini menampilkan produk dengan status engineering yang dapat dibuktikan. Kematangan setiap sistem ditulis apa adanya—termasuk ketika masih dalam development, pre-production, atau prototype.",
  },

  products: [
    {
      code: "BP",
      slug: "bakaran-platform",
      title: "Bakaran Platform",
      primaryCategory: "Platform",
      filterTags: ["Platform", "Education", "Integration", "Shared Data"],
      status: "In Development",
      statusDetail:
        "Shared platform foundation with product-integration adoption in progress.",
      technology: ["Laravel", "PostgreSQL", "Livewire", "Redis"],
      description:
        "Fondasi bersama untuk identitas sekolah, tenant, akses produk, integrasi, dan data inti yang dipakai ekosistem produk Bakaran Project.",
      proof: [
        "Control plane, identity & access, School Core, integration, commercial/finance, dan audit berada dalam boundary platform yang eksplisit.",
        "Integration Foundation sudah menjadi jalur adopsi bertahap untuk produk seperti HADIRA dan KARSA.",
        "Produk lokal tetap mempertahankan ownership domain dan RBAC masing-masing.",
      ],
      relatedSolutionSlugs: [
        "education-systems",
        "operational-platforms-integration",
      ],
      publicLinks: [],
      order: 1,
      published: true,
    },
    {
      code: "HADIRA",
      slug: "hadira",
      title: "HADIRA",
      primaryCategory: "Education",
      filterTags: ["Education", "Attendance", "Integration"],
      status: "In Development",
      statusDetail:
        "Attendance platform; current roadmap is not yet production-closed.",
      technology: ["Go", "React", "PostgreSQL", "Docker"],
      description:
        "Smart School Attendance untuk pengelolaan presensi sekolah dengan workflow admin dan guru serta arah integrasi master data yang terkontrol.",
      proof: [
        "Attendance V2 dan fondasi historical consistency sudah ditutup pada roadmap canonical.",
        "Admin information architecture telah diimplementasikan; closure evidence dan UAT masih menjadi gate.",
        "Pilot/data nyata dipisahkan dari demo seed dengan guardrail operasional.",
      ],
      relatedSolutionSlugs: [
        "education-systems",
        "operational-platforms-integration",
      ],
      publicLinks: [],
      order: 2,
      published: true,
    },
    {
      code: "KARSA",
      slug: "karsa",
      title: "KARSA",
      primaryCategory: "Education",
      filterTags: ["Education", "PKL", "Integration"],
      status: "Pre-production",
      statusDetail:
        "Staged refactor; production hardening and cut-over gates are not complete.",
      technology: ["Laravel", "PHP", "PostgreSQL", "Spatie RBAC"],
      description:
        "Platform kolaborasi sekolah dan dunia kerja untuk mengelola siklus PKL secara end-to-end, dari partnership dan placement sampai monitoring, assessment, dan completion.",
      proof: [
        "School tenancy, workspace-scoped RBAC, partnership, placement, attendance, journal, monitoring, dan assessment sudah menjadi baseline domain.",
        "Status canonical tetap pre-production sampai integration, hardening, dan production cut-over selesai.",
        "Arsitektur bergerak bertahap dari fondasi PKL-MON menuju kontrak KARSA V2 tanpa rewrite total.",
      ],
      relatedSolutionSlugs: [
        "education-systems",
        "operational-platforms-integration",
      ],
      publicLinks: [],
      order: 3,
      published: true,
    },
    {
      code: "SMARTLAB",
      slug: "smartlab",
      title: "SmartLab",
      primaryCategory: "Education",
      filterTags: ["Education", "Laboratory", "Operations"],
      status: "In Development",
      statusDetail:
        "Staged source-of-truth migration with multiple server-authoritative domains.",
      technology: ["React", "TypeScript", "Laravel", "PostgreSQL"],
      description:
        "Platform manajemen laboratorium sekolah untuk perencanaan penggunaan lab, pelaksanaan sesi, aset, inventori, peminjaman, insiden, dan maintenance.",
      proof: [
        "Laboratorium, perangkat, jadwal, kalender operasional, reservasi, sesi, dan activity report sudah memiliki server-authoritative flows.",
        "Asset, inventory, loan custody, dan preventive maintenance telah dipindahkan ke source of truth backend.",
        "Telemetry, corrective work orders, notifications, dan beberapa domain lain masih berada pada tahap lanjutan.",
      ],
      relatedSolutionSlugs: ["education-systems"],
      publicLinks: [],
      order: 4,
      published: true,
    },
    {
      code: "SINGGAH",
      slug: "singgah",
      title: "SINGGAH",
      primaryCategory: "Mobility",
      filterTags: ["Mobility", "Edge", "AI / CV", "Operations"],
      status: "Prototype",
      statusDetail:
        "Software/ANPR prototype; physical lane pilot and real-world accuracy claims are not complete.",
      technology: ["Next.js", "Laravel", "Go", "Python"],
      description:
        "Intelligent Parking & Mobility Access untuk parking session, tariff, entitlement, payment boundary, edge operation, dan ANPR dengan pendekatan hybrid edge-cloud.",
      proof: [
        "Core parking domain, web admin, edge simulator, dan deterministic software E2E lab sudah memiliki implementasi.",
        "ANPR service dan benchmark toolkit tersedia sebagai prototype engineering.",
        "Tidak ada klaim akurasi OCR/ANPR dunia nyata sebelum dataset, model artifact, dan benchmark evidence memenuhi claim gate.",
      ],
      relatedSolutionSlugs: ["smart-mobility-edge"],
      publicLinks: [],
      order: 5,
      published: true,
    },
  ],

  about: {
    eyebrow: "About Bakaran Project",
    title: "Product Engineering yang Berangkat dari Masalah Operasional",
    paragraphs: [
      "Bakaran Project adalah tim product engineering yang mengembangkan sistem digital dari kebutuhan operasional nyata. Fokus saat ini mencakup ekosistem pendidikan, platform dan integrasi data, serta smart mobility dan edge systems.",
      "Website ini hanya menampilkan produk dan kapabilitas yang memiliki evidence engineering yang dapat ditelusuri. Kematangan setiap produk dapat berbeda, sehingga status development, pre-production, maupun prototype ditampilkan secara eksplisit.",
    ],
    principles: [
      {
        title: "Product-led",
        description:
          "Bakaran Project membangun produk yang dapat berkembang bertahap, bukan sekadar menyelesaikan satu halaman atau satu deployment.",
      },
      {
        title: "Domain ownership",
        description:
          "Setiap sistem mempertahankan ownership domain, authorization, dan source of truth yang jelas agar integrasi tidak mengaburkan tanggung jawab data.",
      },
      {
        title: "Evidence before claims",
        description:
          "Status produk, performa, dan kesiapan operasional ditulis berdasarkan evidence engineering yang tersedia—bukan klaim pemasaran yang belum terbukti.",
      },
    ],
  },

  contact: {
    eyebrow: "DISCUSS A REAL OPERATIONAL NEED",
    title: "Mari Bahas Kebutuhan Sistem Anda",
    description:
      "Diskusikan kebutuhan operasional, pilot, integrasi, atau pengembangan produk bersama Bakaran Project. Pembahasan dimulai dari masalah, boundary, pengguna, dan source of truth sebelum menentukan solusi.",
    emailSubject: "Diskusi Kebutuhan Sistem",
    primaryCtaLabel: "Diskusi via Email",
    secondaryCta: { label: "Lihat Produk", href: "#portfolio" },
  },

  footer: {
    description:
      "Digital product & systems engineering untuk kebutuhan operasional nyata—dengan fokus pada pendidikan, platform dan integrasi, serta smart mobility dan edge systems.",
    navigationTitle: "Navigate",
    solutionsTitle: "Solution Domains",
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    copyrightSuffix: "All rights reserved.",
  },
};
