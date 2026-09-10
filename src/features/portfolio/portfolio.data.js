/** @type {import('./portfolio.types').PortfolioProject[]} */

export const projects = [
    {
        code: "BP",
        title: "Bakaran Platform",
        category: "Platform",
        status: "In Development",
        statusDetail: "Shared platform foundation with product-integration adoption in progress.",
        tech: ["Laravel", "PostgreSQL", "Livewire", "Redis"],
        description:
            "Fondasi bersama untuk identitas sekolah, tenant, akses produk, integrasi, dan data inti yang dipakai ekosistem produk Bakaran Project.",
        proof: [
            "Control plane, identity & access, School Core, integration, commercial/finance, dan audit berada dalam boundary platform yang eksplisit.",
            "Integration Foundation sudah menjadi jalur adopsi bertahap untuk produk seperti HADIRA dan KARSA.",
            "Produk lokal tetap mempertahankan ownership domain dan RBAC masing-masing.",
        ],
    },
    {
        code: "HADIRA",
        title: "HADIRA",
        category: "Education",
        status: "In Development",
        statusDetail: "Attendance platform; current roadmap is not yet production-closed.",
        tech: ["Go", "React", "PostgreSQL", "Docker"],
        description:
            "Smart School Attendance untuk pengelolaan presensi sekolah dengan workflow admin dan guru serta arah integrasi master data yang terkontrol.",
        proof: [
            "Attendance V2 dan fondasi historical consistency sudah ditutup pada roadmap canonical.",
            "Admin information architecture telah diimplementasikan; closure evidence dan UAT masih menjadi gate.",
            "Pilot/data nyata dipisahkan dari demo seed dengan guardrail operasional.",
        ],
    },
    {
        code: "KARSA",
        title: "KARSA",
        category: "Education",
        status: "Pre-production",
        statusDetail: "Staged refactor; production hardening and cut-over gates are not complete.",
        tech: ["Laravel", "PostgreSQL", "Redis", "REST API"],
        description:
            "Platform kolaborasi sekolah dan dunia kerja untuk mengelola siklus PKL secara end-to-end, dari partnership dan placement sampai monitoring, assessment, dan completion.",
        proof: [
            "School tenancy, workspace-scoped RBAC, partnership, placement, attendance, journal, monitoring, dan assessment sudah menjadi baseline domain.",
            "Status canonical tetap pre-production sampai integration, hardening, dan production cut-over selesai.",
            "Arsitektur bergerak bertahap dari fondasi PKL-MON menuju kontrak KARSA V2 tanpa rewrite total.",
        ],
    },
    {
        code: "SMARTLAB",
        title: "SmartLab",
        category: "Education",
        status: "In Development",
        statusDetail: "Staged source-of-truth migration with multiple server-authoritative domains.",
        tech: ["React", "TypeScript", "Laravel", "PostgreSQL"],
        description:
            "Platform manajemen laboratorium sekolah untuk perencanaan penggunaan lab, pelaksanaan sesi, aset, inventori, peminjaman, insiden, dan maintenance.",
        proof: [
            "Laboratorium, perangkat, jadwal, kalender operasional, reservasi, sesi, dan activity report sudah memiliki server-authoritative flows.",
            "Asset, inventory, loan custody, dan preventive maintenance telah dipindahkan ke source of truth backend.",
            "Telemetry, corrective work orders, notifications, dan beberapa domain lain masih berada pada tahap lanjutan.",
        ],
    },
    {
        code: "SINGGAH",
        title: "SINGGAH",
        category: "Mobility",
        status: "Prototype",
        statusDetail: "Software/ANPR prototype; physical lane pilot and real-world accuracy claims are not complete.",
        tech: ["Next.js", "Laravel", "Go", "Python"],
        description:
            "Intelligent Parking & Mobility Access untuk parking session, tariff, entitlement, payment boundary, edge operation, dan ANPR dengan pendekatan hybrid edge-cloud.",
        proof: [
            "Core parking domain, web admin, edge simulator, dan deterministic software E2E lab sudah memiliki implementasi.",
            "ANPR service dan benchmark toolkit tersedia sebagai prototype engineering.",
            "Tidak ada klaim akurasi OCR/ANPR dunia nyata sebelum dataset, model artifact, dan benchmark evidence memenuhi claim gate.",
        ],
    },
];
