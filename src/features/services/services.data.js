import {
  LearningIcon,
  CloudIcon,
  ChipIcon,
} from "@/shared/icons/TechIcons";

export const servicesData = [
  {
    title: "Education Systems",
    subtitle: "Attendance • PKL • Laboratory • Shared Data",
    shortDesc: "Ekosistem sistem digital untuk operasional sekolah.",
    fullDesc:
      "Solusi pendidikan yang dibangun dari kebutuhan operasional sekolah, mencakup presensi, kolaborasi PKL, pengelolaan laboratorium, serta fondasi identitas, tenant, akses, dan integrasi data bersama melalui produk Bakaran Platform, HADIRA, KARSA, dan SmartLab.",
    icon: <LearningIcon />,
  },
  {
    title: "Operational Platforms & Integration",
    subtitle: "Platform • API • Mapping • Reconciliation",
    shortDesc: "Fondasi platform dan integrasi untuk workflow lintas sistem.",
    fullDesc:
      "Perancangan platform operasional dengan domain ownership yang jelas, authorization terkontrol, entity mapping, reconciliation, audit trail, dan adopsi integrasi bertahap. Area ini menjadi fondasi bersama yang mendukung pertumbuhan produk tanpa menghilangkan ownership domain lokal.",
    icon: <CloudIcon />,
  },
  {
    title: "Smart Mobility & Edge",
    subtitle: "Parking • Edge Runtime • ANPR R&D",
    shortDesc: "Sistem mobility dengan boundary software, edge, dan computer vision.",
    fullDesc:
      "Pengembangan sistem mobility dan edge melalui SINGGAH, mencakup parking session, tariff, entitlement, payment boundary, edge operation, serta ANPR sebagai R&D terukur. Klaim performa dunia nyata tetap menunggu evidence dataset, model artifact, benchmark, dan pilot fisik yang memadai.",
    icon: <ChipIcon />,
  },
];
