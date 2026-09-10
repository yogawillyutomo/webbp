import {
    CodeIcon,
    BrainIcon,
    CloudIcon,
    ChipIcon,
    LayoutIcon,
    LearningIcon,
} from "@/shared/icons/TechIcons";

export const servicesData = [
    {
        title: "Digital Platforms",
        subtitle: "Web Apps • Operational Systems",
        shortDesc: "Platform web untuk proses operasional nyata.",
        fullDesc:
            "Perancangan dan pengembangan aplikasi web dengan boundary domain yang jelas, source of truth terkontrol, serta fondasi yang dapat berkembang mengikuti kebutuhan produk.",
        icon: <CodeIcon />,
    },
    {
        title: "Digitalisasi Sekolah",
        subtitle: "Attendance • PKL • Laboratory",
        shortDesc: "Sistem digital untuk workflow sekolah.",
        fullDesc:
            "Pengembangan sistem pendidikan yang berangkat dari kebutuhan operasional sekolah, termasuk presensi, kolaborasi PKL, pengelolaan laboratorium, dan fondasi master data bersama.",
        icon: <LearningIcon />,
    },
    {
        title: "System Integration",
        subtitle: "API • Mapping • Reconciliation",
        shortDesc: "Integrasi data dan layanan antar sistem.",
        fullDesc:
            "Membangun integration boundary untuk pertukaran data antaraplikasi dengan authorization, entity mapping, reconciliation, audit trail, dan adopsi bertahap.",
        icon: <CloudIcon />,
    },
    {
        title: "IoT & Edge Systems",
        subtitle: "Edge Runtime • Device Workflow",
        shortDesc: "Integrasi software dengan perangkat dan edge.",
        fullDesc:
            "Eksperimen dan pengembangan workflow edge untuk kebutuhan seperti mobility access, perangkat laboratorium, local resilience, durable delivery, dan komunikasi perangkat.",
        icon: <ChipIcon />,
    },
    {
        title: "AI & Computer Vision R&D",
        subtitle: "ANPR • Benchmark • Evidence",
        shortDesc: "Riset terukur untuk computer vision dan automasi.",
        fullDesc:
            "Pengembangan prototype computer vision dengan benchmark, dataset governance, dan claim gate yang eksplisit. Hasil R&D tidak dipromosikan sebagai akurasi dunia nyata sebelum evidence memenuhi gate.",
        icon: <BrainIcon />,
    },
    {
        title: "Operational UI",
        subtitle: "Admin • Dashboard • Workflow",
        shortDesc: "Antarmuka untuk operator dan pengelola sistem.",
        fullDesc:
            "Perancangan dashboard, admin workspace, dan operational interface yang mengikuti ownership domain dan workflow pengguna, bukan sekadar kumpulan halaman CRUD.",
        icon: <LayoutIcon />,
    },
];
