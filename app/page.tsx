"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import CVModal from "@/components/CVModal";
import ProjectModal, { ProjectData } from "@/components/ProjectModal";

const PORTFOLIO_DATA = {
  hero: {
    name: "Wildan Ibransyah",
    role: "Mechatronics Engineer • Industrial Automation • IoT • Computer Vision",
    location: "Jember, Indonesia",
    image: "/profile.jpg",
    availability: "Open to work",
  },
  summary: [
    "Fresh Graduate D-IV Teknologi Rekayasa Mekatronika  dengan fokus pada Industrial Automation, Internet of Things (IoT), dan Computer Vision. Berpengalaman dalam pengembangan sistem monitoring dan kontrol berbasis IoT, integrasi perangkat keras, serta penerapan computer vision untuk object detection.",
    "Beberapa proyek yang telah saya kerjakan antara lain sistem deteksi kondisi fisik buah kakao berbasis computer vision untuk klasifikasi otomatis, serta prototype inkubator IoT dengan monitoring suhu dan kelembaban secara real-time melalui smartphone.",
    "Selain itu, saya memiliki pengalaman dalam wiring panel, instalasi sistem kontrol, fabrikasi komponen mekanik, serta observasi sistem industri secara langsung. Saat ini, saya terbuka untuk peluang magang maupun kerja di bidang Industrial Automation, IoT Engineer, dan Computer Vision.",
  ],
  highlights: [],
  education: [
    {
      institution: "Politeknik Negeri Jember",
      degree: "D-IV Teknologi Rekayasa Mekatronika",
      period: "2022 - 2026",
      label: "IPK",
      value: "3.72",
    },
    {
      institution: "SMK Negeri 5 Jember",
      degree: "Teknik Komputer dan Jaringan",
      period: "2017 - 2020",
      label: "Nilai",
      value: "81.21",
    },
  ],
  certifications: [
    "Sertifikat Kompetensi Engineer Mekatronika — BNSP",
    "Sertifikat Kompetensi Teknik Komputer Jaringan — BNSP",
  ],
  experience: [
    {
      role: "Automation Engineering Intern",
      company: "PT Mokko Otomasi Indonesia",
      duration: "3 Bulan 20 Hari",
      desc: "Terlibat dalam proyek magang IoT dan industrial automation meliputi survei lapangan, instalasi perangkat, inspeksi sistem, serta pengembangan antarmuka HMI untuk implementasi solusi otomasi industri.",
    },
    {
      role: "Technician Intern",
      company: "CV LAB PERSADA",
      duration: "3 Bulan",
      desc: "Menjalani program magang dengan menangani instalasi, perbaikan, dan pemeliharaan perangkat keras/perangkat lunak laptop serta implementasi layanan lapangan seperti pemasangan sistem CCTV sesuai kebutuhan klien.",
    },
  ],
  projects: [
    {
      title: "Cacao Fruit Sorting System",
      desc: "YOLOv11n di Raspberry Pi 5 untuk deteksi dan sortasi buah kakao berdasarkan kondisi fisik.",
      fullDesc:
        "Tugas akhir ini berfokus pada pembangunan sistem sortasi buah kakao otomatis berbasis computer vision.\n\nDataset diproses dan dilatih menggunakan Roboflow dan model YOLOv11n, kemudian dideploy ke Raspberry Pi 5 untuk inferensi real-time. Kamera menangkap kondisi fisik buah di atas konveyor, model mengklasifikasikan kualitas, lalu sistem aktuasi memisahkan hasil sortasi secara otomatis.\n\nKontribusi saya mencakup pelatihan model, deployment embedded, integrasi GUI, komunikasi sistem, dan pengujian performa.",
      role: "AI & Embedded Systems Engineer",
      year: "2026",
      images: [
        "/projects/democ1.jpg",
        "/projects/democ2.jpg",
        "/projects/democ3.jpg",
        "/projects/democ4.jpg",
        "/projects/democ5.jpg",
      ],
      githubUrl: "https://github.com/wilskuyyy",
      stats: [
        "Precision 0.9869",
        "Recall 0.9907",
        "mAP50 0.9941",
        "mAP50-95 0.9501",
      ],
      tags: [
        "YOLOv11n",
        "Python",
        "Raspberry Pi",
        "Computer Vision",
        "Object Detection",
        "Embedded System",
        "Roboflow",
      ],
    },
    {
      title: "Regional Dam Telemetry & Control",
      desc: "Sistem kontrol dan monitoring pintu air bendungan daerah untuk mengatasi kendala geografis.",
      fullDesc:
        "Proyek ini berfokus pada instrumentasi dan otomasi untuk infrastruktur vital daerah. Tantangan utamanya adalah jarak geografis antara bendungan fisik dan pos kendali.\n\nSolusi yang dibangun menggunakan sistem telemetri untuk kontrol pintu air dan pemantauan sensor elevasi air secara lebih efisien, terukur, dan responsif. Saya berkontribusi pada wiring, integrasi perangkat, observasi lapangan, dan validasi sistem.",
      role: "Automation Engineer",
      year: "2025",
      images: [
        "/projects/democ6.jpg",
        "/projects/democ7.jpg",
        "/projects/democ8.jpg",
        "/projects/democ9.jpg",
        "/projects/democ10.jpg",
        "/projects/democ11.jpg",
      ],
      stats: ["Remote Monitoring", "Sensor Integration"],
      tags: [
        "Industrial Automation",
        "Telemetry System",
        "Water Level Sensor",
        "Instrumentation",
        "Panel Wiring",
      ],
    },
    {
      title: "Industrial HMI Interface Redesign",
      desc: "Redesain antarmuka HMI mesin filling thinner agar lebih terbaca, efisien, dan aman bagi operator.",
      fullDesc:
        "Proyek ini dilakukan bersama industri thinner di Gresik untuk memperbaiki usability HMI pada sistem filling. Fokus utama adalah meningkatkan keterbacaan, menyederhanakan navigasi parameter, dan meminimalkan potensi error operator.\n\nPendekatan saya berfokus pada struktur informasi, pemetaan prioritas indikator, dan layout kontrol yang lebih jelas.",
      role: "HMI Designer",
      year: "2025",
      images: ["/projects/democ12.jpg", "/projects/democ13.jpg"],
      stats: ["Interface Redesign", "Usability Improvement"],
      tags: [
        "HMI",
        "Industrial Control",
        "Interface Design",
        "Industrial Automation",
      ],
    },
    {
      title: "IoT-Based Smart Egg Incubator Prototype",
      desc: "Prototype inkubator pintar berbasis IoT dengan monitoring suhu dan kelembaban real-time.",
      fullDesc:
        "Purwarupa ini dikembangkan untuk menjaga kondisi inkubasi tetap optimal melalui integrasi sensor dan kontrol berbasis smartphone.\n\nSistem memungkinkan monitoring suhu dan kelembaban secara real-time, serta override parameter ketika diperlukan. Saya berkontribusi pada integrasi sensor, embedded logic, dan alur monitoring jarak jauh.",
      role: "IoT Engineer",
      year: "2024",
      images: [
        "/projects/democ16.jpg",
        "/projects/democ15.jpg",
        "/projects/democ14.jpg",
      ],
      githubUrl: "https://github.com/wilskuyyy",
      stats: ["Real-Time Monitoring", "Sensor Integration"],
      tags: [
        "IoT",
        "Embedded Systems",
        "Sensor Integration",
        "Smartphone Control",
        "Monitoring",
      ],
    },
  ] as ProjectData[],
  skills: [
    "Python",
    "Computer Vision (YOLO)",
    "Raspberry Pi 5",
    "ESP32",
    "Industrial Automation",
    "IoT Systems",
    "HMI Design",
    "Panel Wiring",
    "Embedded System",
    "Sensor Integration",
    "Basic PLC Programming",
    "Microsoft Office",
  ],
  socials: {
    email: "wildanibrans@gmail.com",
    linkedin: "https://www.linkedin.com/in/wildanibransyah/",
    github: "https://github.com/wilskuyyy",
  },
};

type ThemeMode = "light" | "dark";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  const navLinks = useMemo(
    () => [
      { label: "Home", href: "#home", id: "home" },
      { label: "Tentang", href: "#tentang", id: "tentang" },
      { label: "Pengalaman", href: "#pengalaman", id: "pengalaman" },
      { label: "Project", href: "#project", id: "project" },
      { label: "Keahlian", href: "#keahlian", id: "keahlian" },
      { label: "Kontak", href: "#kontak", id: "kontak" },
    ],
    []
  );

  useEffect(() => {
    setMounted(true);
    const currentTheme = document.documentElement.getAttribute(
      "data-theme"
    ) as ThemeMode | null;
    if (currentTheme) setTheme(currentTheme);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemTheme = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const nextTheme: ThemeMode = e.matches ? "dark" : "light";
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
      }
    };

    media.addEventListener("change", handleSystemTheme);
    return () => media.removeEventListener("change", handleSystemTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navLinks.map((item) => item.id);
      let current = "home";

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.socials.email);
      setIsEmailCopied(true);
      setTimeout(() => setIsEmailCopied(false), 2000);
    } catch {
      setIsEmailCopied(false);
    }
  };

  return (
    <>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CVModal open={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />

      <main id="main-content" className="min-h-screen">
        {/* Navigation */}
        <nav
          className={`fixed top-0 z-40 w-full transition-all duration-200 ${
            scrolled
              ? "glass-nav border-ui border-b py-2.5 shadow-sm"
              : "bg-transparent py-4"
          }`}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
            <a
              href="#home"
              className="group flex items-center gap-2.5 font-bold tracking-tight outline-none"
              aria-label="Pergi ke bagian home"
            >
              <div className="bg-text text-bg group-focus-visible:ring-primary flex h-9 w-9 items-center justify-center rounded-xl transition-transform group-hover:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-offset-2">
                <span className="text-sm font-black tracking-wider">WI</span>
              </div>
              <span className="group-hover:text-primary hidden text-base transition-colors sm:block"></span>
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((item) => {
                const active = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-primary-soft text-primary"
                        : "text-muted hover:bg-surface-2 hover:text-text"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2.5">
              {mounted && (
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="border-ui bg-surface text-muted hover:border-primary hover:text-primary flex h-9 w-9 items-center justify-center rounded-xl border transition-colors"
                  aria-label={
                    theme === "dark"
                      ? "Ganti ke light mode"
                      : "Ganti ke dark mode"
                  }
                >
                  <span className="theme-toggle-icon-moon">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  </span>
                  <span className="theme-toggle-icon-sun">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2" />
                      <path d="M12 21v2" />
                      <path d="M4.22 4.22l1.42 1.42" />
                      <path d="M18.36 18.36l1.42 1.42" />
                      <path d="M1 12h2" />
                      <path d="M21 12h2" />
                      <path d="M4.22 19.78l1.42-1.42" />
                      <path d="M18.36 5.64l1.42-1.42" />
                    </svg>
                  </span>
                </button>
              )}

              <button
                type="button"
                className="border-ui bg-surface flex h-9 w-9 items-center justify-center rounded-xl border md:hidden"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Menu navigasi"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isMobileMenuOpen ? (
                    <>
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </>
                  ) : (
                    <>
                      <path d="M3 6h18" />
                      <path d="M3 12h18" />
                      <path d="M3 18h18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute top-full left-0 w-full origin-top transform transition-all duration-300 md:hidden ${
              isMobileMenuOpen
                ? "scale-y-100 opacity-100"
                : "scale-y-0 opacity-0"
            }`}
          >
            <div className="border-ui bg-surface mx-4 mt-2 flex flex-col gap-1 rounded-2xl border p-2 shadow-lg">
              {navLinks.map((item) => {
                const active = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-primary-soft text-primary"
                        : "text-muted hover:bg-surface-2"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="mx-auto max-w-6xl px-5 pt-28 pb-20 md:px-8 md:pt-36">
          {/* Hero Section */}
          <section
            id="home"
            className="section-anchor hero-gradient border-ui flex flex-col-reverse items-center gap-10 rounded-3xl border p-6 sm:p-8 md:flex-row md:items-start md:justify-between"
          >
            <div className="flex-1 text-center md:text-left">
              <div className="border-success/30 bg-success-soft mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="bg-success absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                  <span className="bg-success relative inline-flex h-1.5 w-1.5 rounded-full"></span>
                </span>
                <span className="text-success text-xs font-bold tracking-wider uppercase">
                  {PORTFOLIO_DATA.hero.availability}
                </span>
              </div>

              <h1 className="text-3xl leading-tight font-black tracking-tight sm:text-4xl lg:text-6xl">
                {PORTFOLIO_DATA.hero.name}
              </h1>

              <p className="text-primary mt-3 text-sm font-bold sm:text-base lg:text-lg">
                {PORTFOLIO_DATA.hero.role}
              </p>

              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href="#project"
                  className="bg-primary-ui inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  Lihat Project
                </a>
                <button
                  type="button"
                  onClick={() => setIsCVModalOpen(true)}
                  className="border-ui bg-surface hover:border-primary inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 px-6 py-2.5 text-sm font-bold transition-all sm:w-auto"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  Lihat CV
                </button>
              </div>

              <div className="text-faint mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-medium md:justify-start">
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {PORTFOLIO_DATA.hero.location}
                </span>
                <span className="bg-border hidden h-1 w-1 rounded-full sm:block" />
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M12 20h9" />
                    <path d="M12 4h9" />
                    <path d="M4 9h16" />
                    <path d="M4 15h16" />
                  </svg>
                  Software-facing Mechatronics
                </span>
              </div>
            </div>

            <div className="w-full max-w-60 shrink-0 md:max-w-70">
              <div className="group relative">
                <div className="border-ui bg-surface-2 absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                <div className="border-ui bg-surface relative overflow-hidden rounded-2xl border shadow-(--shadow-strong)">
                  <div className="relative aspect-9/16 w-full">
                    <Image
                      src={PORTFOLIO_DATA.hero.image}
                      alt={`Foto profil ${PORTFOLIO_DATA.hero.name}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 240px, 280px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tentang & Pendidikan */}
          <section
            id="tentang"
            className="section-anchor mt-16 grid gap-8 lg:grid-cols-[1fr_0.75fr]"
          >
            <div>
              <SectionHeading
                eyebrow="About Me"
                title="Fresh Graduate Mekatronika."
              />
              <div className="text-muted mt-6 space-y-4 text-sm leading-snug md:text-base">
                {PORTFOLIO_DATA.summary.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 grid gap-3">
                {PORTFOLIO_DATA.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="surface-card text-text flex items-start gap-3 rounded-xl p-4 text-sm leading-snug font-medium"
                  >
                    <span className="bg-primary-soft text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid h-fit gap-4">
              <div className="surface-card rounded-2xl p-6">
                <h3 className="text-faint mb-4 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  Pendidikan
                </h3>
                <div className="border-border relative space-y-6 border-l-2 pl-5">
                  {PORTFOLIO_DATA.education.map((edu, idx) => (
                    <div key={idx} className="relative">
                      <span className="border-surface bg-primary absolute top-1.5 -left-6.75 h-2.5 w-2.5 rounded-full border-2" />
                      <h4 className="text-base leading-tight font-bold">
                        {edu.institution}
                      </h4>
                      <p className="text-primary mt-0.5 text-sm font-semibold">
                        {edu.degree}
                      </p>
                      <p className="text-muted mt-1 text-xs">
                        {edu.period} <span className="mx-1">•</span> {edu.label}
                        :{" "}
                        <span className="text-text font-bold">{edu.value}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card rounded-2xl p-6">
                <h3 className="text-faint mb-4 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M12 15l8.3-8.3" />
                    <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2c1.3 0 2.6.3 3.8.8" />
                  </svg>
                  Sertifikasi
                </h3>
                <div className="grid gap-2">
                  {PORTFOLIO_DATA.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="border-ui bg-surface-2 text-muted rounded-lg border p-3 text-xs leading-snug font-medium"
                    >
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pengalaman */}
          <section id="pengalaman" className="section-anchor mt-20">
            <SectionHeading
              eyebrow="Experience"
              title="Pengalaman Kerja & Magang."
            />
            <div className="mt-6 grid gap-4">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <article
                  key={idx}
                  className="surface-card group relative overflow-hidden rounded-2xl p-5 md:p-6"
                >
                  <div className="bg-primary/5 absolute top-0 right-0 h-24 w-24 translate-x-12 -translate-y-12 rounded-full blur-3xl transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-lg font-bold">{exp.role}</h3>
                        <p className="text-primary text-sm font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <span className="border-border bg-surface-2 text-faint inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider uppercase">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-muted max-w-4xl text-sm leading-snug">
                      {exp.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Project */}
          <section id="project" className="section-anchor mt-20">
            <SectionHeading eyebrow="Selected Work" title="Project Unggulan." />
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {PORTFOLIO_DATA.projects.map((project) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="surface-card group focus-visible:ring-primary flex min-h-80 flex-col justify-between rounded-2xl p-5 text-left outline-none hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 md:p-6"
                  aria-label={`Lihat detail project ${project.title}`}
                >
                  <div>
                    <div className="bg-primary-soft text-primary mb-4 inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase">
                      {project.year}
                    </div>
                    <h3 className="group-hover:text-primary text-xl leading-tight font-bold">
                      {project.title}
                    </h3>
                    <p className="text-muted mt-3 line-clamp-3 text-sm leading-snug">
                      {project.desc}
                    </p>
                  </div>
                  <div className="border-border mt-6 border-t pt-4">
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="border-ui bg-surface-2 text-muted rounded-md border px-2 py-1 text-[10px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="border-ui bg-surface-2 text-faint rounded-md border px-2 py-1 text-[10px] font-semibold">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                    <div className="text-primary inline-flex items-center gap-1.5 text-xs font-bold transition-transform group-hover:translate-x-1.5">
                      <span>Lihat detail proyek</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Keahlian */}
          <section id="keahlian" className="section-anchor mt-20">
            <SectionHeading
              eyebrow="Capabilities"
              title="Tech stack & keahlian teknis utama."
            />
            <div className="border-ui bg-surface mt-6 rounded-2xl border p-5 md:p-8">
              <div className="grid-auto-fit gap-3">
                {PORTFOLIO_DATA.skills.map((skill) => (
                  <div
                    key={skill}
                    className="border-border bg-surface-2 hover:border-primary hover:bg-surface flex items-center gap-2.5 rounded-xl border p-3 transition-colors"
                  >
                    <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                    <span className="text-text text-xs font-semibold">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Kontak */}
          <section id="kontak" className="section-anchor mt-20">
            <div className="border-ui bg-surface relative overflow-hidden rounded-2xl border p-6 text-center sm:p-10 md:p-12">
              <div className="bg-primary/5 absolute inset-0" />
              <div className="relative z-10">
                <p className="text-primary mb-3 text-xs font-bold tracking-widest uppercase">
                  Let's Connect
                </p>
                <h2 className="mx-auto max-w-3xl text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                  Siap berkolaborasi dan berkoneksi
                </h2>
                <p className="text-muted mx-auto mt-4 max-w-2xl text-sm leading-snug md:text-base">
                  Terbuka untuk peluang kerja full-time, proyek independen, atau
                  diskusi teknis seputar integrasi sistem end-to-end.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="bg-primary-ui inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 sm:w-auto"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 4l10 8 10-8" />
                    </svg>
                    {isEmailCopied ? "Email Tersalin!" : "Salin Email"}
                  </button>
                  <a
                    href={PORTFOLIO_DATA.socials.linkedin}
                    target="_blank"
                    className="border-border bg-surface hover:border-primary inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 px-6 py-2.5 text-sm font-bold sm:w-auto"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={PORTFOLIO_DATA.socials.github}
                    target="_blank"
                    className="border-border bg-surface hover:border-text inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 px-6 py-2.5 text-sm font-bold sm:w-auto"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="border-ui bg-surface-2 text-faint border-t px-5 py-8 text-center text-xs font-medium">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.hero.name}. All rights
            reserved.
          </p>
          <p className="mt-1">
            Built thoughtfully with Next.js & Tailwind CSS.
          </p>
        </footer>
      </main>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="text-primary mb-3 text-xs font-bold tracking-widest uppercase">
        {eyebrow}
      </p>
      <h2 className="text-2xl leading-tight font-black tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>
    </header>
  );
}
