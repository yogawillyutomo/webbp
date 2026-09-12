# Security Policy

## Reporting a vulnerability

Please do not disclose suspected vulnerabilities in public issues, pull requests, or discussions.

Send a private report to **bakaranproject@gmail.com** with:

- the affected page, route, dependency, or component;
- steps to reproduce;
- observed and expected behavior;
- impact you believe may be possible;
- any supporting screenshots, logs, or proof-of-concept details that are safe to share.

Do not include real credentials, personal data, or destructive payloads in the report.

Bakaran Project will review the report, validate the affected scope, and coordinate remediation before public disclosure when appropriate.

## Supported code

Security fixes are applied to the current `main` branch and the production deployment derived from it. Historical branches and unmerged feature branches are not supported release lines.

## Dependency security

Repository changes must keep `npm audit` and `npm audit --omit=dev` free of known vulnerabilities before merge unless an explicitly documented exception is approved with a concrete mitigation plan.
