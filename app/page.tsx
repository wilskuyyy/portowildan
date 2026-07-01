"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ProjectModal, { ProjectData } from '@/components/ProjectModal';

const PORTFOLIO_DATA = {
  hero: {
    role: "MECHATRONICS & INDUSTRIAL AUTOMATION",
    name: "Wildan Ibransyah",
    tagline: "Fresh graduate D-IV Teknologi Rekayasa Mekatronika — bergerak di persimpangan antara Industrial Automation, IoT Engineering, dan Computer Vision.",
    location: "Jember, Indonesia",
    image: "/profile.jpg" // Pastikan file ini ada di folder public
  },
  about: [
    "Fresh Graduate Teknik Mekatronika dengan fokus pada Industrial Automation, Internet of Things (IoT), dan Computer Vision. Berpengalaman dalam pengembangan sistem monitoring dan kontrol berbasis IoT, integrasi perangkat keras, serta penerapan computer vision untuk object detection.",
    "Beberapa proyek yang telah saya kerjakan antara lain sistem deteksi kondisi fisik buah kakao berbasis computer vision untuk klasifikasi otomatis, serta prototype inkubator IoT dengan monitoring suhu dan kelembaban secara real-time melalui smartphone.",
    "Selain itu, saya memiliki pengalaman dalam wiring panel, instalasi sistem kontrol, fabrikasi komponen mekanik, serta observasi sistem industri secara langsung. Saat ini, saya terbuka untuk peluang magang maupun kerja di bidang Industrial Automation, IoT Engineer, dan Computer Vision."
  ],
  education: [
    {
      institution: "Politeknik Negeri Jember",
      degree: "D-IV Teknologi Rekayasa Mekatronika",
      period: "2022 - 2026",
      label:"IPK",
      value: "3.72"
    }
    ,
    {
      institution: "SMK NEGERI 5 JEMBER",
      degree: "Teknik Komputer dan Jaringan",
      period: "2017 - 2020",
      label:"Nilai",
      value: "81.21"
    }
  ],
  certifications: [
    "Sertifikat Kompetensi Engineer Mekatronika - Badan Nasional Sertifikasi Profesi",
    "Sertifikat Kompetensi Teknik Komputer Jaringan - Badan Nasional Sertifikasi Profesi"
  ],
  experience: [
    {
      role: "Automation Engineering Intern",
      company: "PT Mokko Otomasi Indonesia",
      duration: "3 Bulan 20 Hari",
      desc: "Berpartisipasi dalam berbagai proyek IoT dan Industrial Automation meliputi survei lapangan, instalasi perangkat, inspeksi sistem, serta pengembangan antarmuka HMI untuk mendukung implementasi solusi otomasi industri.",
    },
    {
      role: "Technician Intern",
      company: "CV LAB PERSADA",
      duration: "3 Bulan",
      desc: "Bertanggung jawab atas perbaikan, pemeliharaan, dan instalasi perangkat keras serta perangkat lunak pada laptop, sekaligus menangani layanan lapangan seperti instalasi sistem CCTV sesuai kebutuhan klien.",
    }
  ],
  projects: [
    {
      title: "Cacao Fruit Sorting System (Tugas Akhir)",
      desc: "Mengimplementasikan Algoritma YOLOv11n pada Raspberry Pi 5 untuk Deteksi dan Sortasi Buah Kakao Berdasarkan Kondisi Fisiknya.",
      fullDesc: "Sistem cerdas ini dirancang sebagai Tugas Akhir untuk mengotomatisasi proses sortasi buah kakao. \n\nMenggunakan dataset yang dilatih melalui platform Roboflow, model YOLOv11n di-deploy ke dalam Raspberry Pi 5. Kamera secara real-time menangkap kondisi fisik kakao di atas konveyor, mengklasifikasikannya menjadi 'Baik' atau 'Buruk', dan memberikan sinyal aktuasi ke sistem mekanik untuk memisahkan hasil sortasi.",
      role: "AI & Embedded Systems Engineer",
      year: "2026",
      images: ["/projects/democ1.jpg", "/projects/democ2.jpg", "/projects/democ3.jpg", "/projects/democ4.jpg", "/projects/democ5.jpg"], 
      githubUrl: "https://github.com/wilskuyyy", 
      stats: ["Precision 0.9869", "Recall 0.9907", "mAP50 0.9941", "mAP50-95 0.9501"],
      tags: ["YOLOv11n", "Python", "Raspberry Pi", "Object Detection", "Computer Vision", "Embedded System", "Roboflow"],
    },
    {
      title: "Regional Dam Telemetry & Control",
      desc: "Perancangan Sistem Kontrol dan Monitoring Pintu Air Bendungan Daerah guna Mengatasi Kendala Geografis.",
      fullDesc: "Berkontribusi dalam pengembangan sistem instrumentasi dan otomasi untuk infrastruktur vital daerah. Proyek ini menyelesaikan masalah jarak geografis antara bendungan fisik dan pos kendali operasi dengan menerapkan sistem telemetri berlatensi rendah untuk kontrol pintu air dan pemantauan sensor elevasi air secara presisi.",
      role: "Automation Engineer",
      year: "2025",
      images: ["/projects/democ6.jpg", "/projects/democ7.jpg", "/projects/democ8.jpg", "/projects/democ9.jpg", "/projects/democ10.jpg", "/projects/democ11.jpg"],
      stats: ["Remote Monitoring", "Sensor Integration"],
      tags: ["Panel Wiring", "Telemetry System", "Water Level Sensor Instalation", "Industrial Automation", "Instrumentation"],
    },
    {
      title: "Industrial HMI Interface Redesign",
      desc: "Redesain HMI pada Sistem Kontrol Mesin Filling Thinner untuk Meningkatkan Keterbacaan dan Efisiensi Operator.",
      fullDesc: "Bekerja sama dengan salah satu pabrik thinner di Kabupaten Gresik, Jawa Timur, untuk merevitalisasi antarmuka Human Machine Interface (HMI) mereka. Fokus utama adalah pada prinsip UX/UI industri: meningkatkan kemudahan monitoring metrik krusial mesin filling, meminimalkan error operator, dan menyederhanakan alur navigasi parameter sistem kontrol.",
      role: "HMI Designer",
      year: "2025",
      images: ["/projects/democ12.jpg", "/projects/democ13.jpg"],
      stats: ["Interface Design", "Usability Improvement"],
      tags: ["Human Machine Interface (HMI)", "Industrial Automation", "Industrial Control System"],
    },
    {
      title: "IoT-Based Smart Egg Incubator Prototype",
      desc: "Prototype Inkubator Penetas Telur Ayam IoT dengan Fitur Monitoring Suhu dan Kelembaban Secara Real-Time.",
      fullDesc: "Mengembangkan purwarupa sistem penetas telur mandiri berbasis Internet of Things. Sistem dilengkapi dengan integrasi sensor presisi tinggi untuk menjaga ekosistem ruang inkubasi tetap optimal. Parameter suhu dan kelembaban dapat dipantau dan di-override secara real-time dari mana saja menggunakan aplikasi smartphone.",
      role: "IoT Engineer",
      year: "2024",
      images: ["/demo7.jpg", "/demo8.jpg"],
      githubUrl: "https://github.com/wilskuyyy",
      stats: ["Real Time Monitoring", "Sensor Integration"],
      tags: ["Internet of Things (IoT)", "Embedded Systems", "Real-Time Monitoring", "Smartphone Control", "Sensor Integration"],
    }
  ] as ProjectData[],
  skills: [
    "Microsoft Office", "Computer Vision (YOLO)", "Python", "Basic PLC Programming", 
    "Raspberry Pi 5", "ESP32", "Industrial Automation", 
    "IoT Systems", "HMI Design", "Panel Wiring",
    "Embedded System", "Sensor Integration"
  ],
  socials: {
    email: "wildanibrans@gmail.com",
    linkedin: "https://www.linkedin.com/in/wildanibransyah/",
    github: "https://github.com/wilskuyyy"
  }
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PORTFOLIO_DATA.socials.email);
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Pengalaman', href: '#pengalaman' },
    { label: 'Project', href: '#project' },
    { label: 'Keahlian', href: '#keahlian' },
    { label: 'Kontak', href: '#kontak' }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-3' : 'bg-white/0 py-5'}`}>
        
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-extrabold text-xl text-gray-900 tracking-tighter hover:text-primary transition-colors">
            wil.dev
          </a>
          
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
            {navLinks.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-700 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32 md:space-y-40">
        
        {/* HERO SECTION DENGAN FOTO */}
        <section id="home" className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12 min-h-[60vh]">
          
          {/* Teks Hero */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200 mb-6 group cursor-default mt-4 md:mt-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-green-700 tracking-wide">OPEN TO WORK</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-gray-900 leading-[1.1]">
              {PORTFOLIO_DATA.hero.name}
            </h1>
            
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 font-mono text-sm mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>{PORTFOLIO_DATA.hero.location}</span>
              <span className="mx-2">•</span>
              <span className="text-primary font-semibold">{PORTFOLIO_DATA.hero.role}</span>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full md:w-auto">
              <a href="#kontak" className="flex-1 md:flex-none justify-center inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full hover:bg-blue-700 transition-all duration-300 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                Hubungi Saya
              </a>
              
              <a href="#project" className="flex-1 min-w-35 md:flex-none justify-center inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-primary text-gray-700 rounded-full hover:border-blue-700 hover:bg-blue-50 transition-all duration-300 text-sm font-semibold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                Project Saya
              </a>
              
              <a href="/cv-wildan.pdf" target="_blank" className="flex-1 md:flex-none justify-center inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-primary text-gray-700 rounded-full hover:border-blue-700 hover:bg-blue-50 transition-all duration-300 text-sm font-semibold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Frame Foto Portrait Modern */}
          <div className="relative w-64 h-80 md:w-72 md:h-96 shrink-0 group">
            {/* Offset Border Effect */}
            <div className="absolute inset-0 border-2 border-gray-200 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500"></div>
            {/* Image Container */}
            <div className="absolute inset-0 bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-100 z-10">
              {/* Fallback color saat gambar belum load */}
              <div className="w-full h-full relative bg-gray-100">
                <Image 
                  src={PORTFOLIO_DATA.hero.image} 
                  alt={PORTFOLIO_DATA.hero.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & EDUCATION SECTION */}
        <section id="tentang" className="scroll-mt-28">
          <SectionHeader title="Tentang Saya" />
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Kolom Kiri: Teks Tentang */}
            <div className="md:col-span-2 space-y-5 text-gray-600 leading-relaxed text-lg">
              {PORTFOLIO_DATA.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Kolom Kanan: Pendidikan & Sertifikasi */}
            <div className="space-y-10">
              {/* Pendidikan */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider font-mono flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                  Pendidikan
                </h3>
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-gray-200 mb-6">
                    <div className="absolute w-2.5 h-2.5 bg-primary rounded-full left-[-5.5px] top-1.5 ring-4 ring-white"></div>
                    <h4 className="font-bold text-gray-900">{edu.institution}</h4>
                    <p className="text-sm font-medium text-primary mt-1">{edu.degree}</p>
                    <div className="flex items-center gap-3 mt-2 text-sm text-gray-500 font-mono">
                      <span>{edu.period}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{edu.label}: {edu.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sertifikasi */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider font-mono flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15l-2 5l9-9l-9-9l2 5l-9 9z" transform="rotate(-45 12 12)"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  Sertifikasi
                </h3>
                <ul className="space-y-3">
                  {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="leading-snug">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="pengalaman" className="scroll-mt-28">
          <SectionHeader title="Pengalaman Magang & Kerja" />
          <div className="grid gap-6">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <span className="text-xs font-semibold font-mono text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4 font-medium">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                  {exp.company}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="project" className="scroll-mt-28">
          <SectionHeader title="Project Pilihan" />
          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.projects.map((p: ProjectData) => (
              <button 
                key={p.title} 
                onClick={() => setSelectedProject(p)}
                className="group flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-left relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`Lihat detail proyek ${p.title}`}
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {p.desc}
                  </p>
                </div>
                
                <div className="w-full">
                  {p.stats && p.stats.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.stats.map((s: string) => (
                        <span key={s} className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded bg-blue-50 text-primary border border-blue-100">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-gray-100 mb-6">
                    {p.tags.slice(0, 3).map((t: string) => (
                      <span key={t} className="text-xs font-semibold text-gray-500">
                        #{t}
                      </span>
                    ))}
                    {p.tags.length > 3 && (
                      <span className="text-xs font-medium text-gray-400">+{p.tags.length - 3}</span>
                    )}
                  </div>

                  <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-primary transition-colors mt-auto">
                    <span>Lihat detail proyek</span>
                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="keahlian" className="scroll-mt-28">
          <SectionHeader title="Teknologi & Keahlian" />
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100">
            <div className="flex flex-wrap gap-3">
              {PORTFOLIO_DATA.skills.map((s: string) => (
                <span key={s} className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary transition-colors duration-300 shadow-sm cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="kontak" className="scroll-mt-28 text-center pb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Mari Berkoneksi dan Berkolaborasi
          </h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto text-base md:text-lg">
            Hubungi Saya Jika ada Peluang Kerja di Bidang Otomasi Industri maupun Computer Vision melalui Platform dibawah.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <button 
              onClick={handleCopyEmail}
              className="group relative inline-flex justify-center items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              {isEmailCopied ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              )}
              {isEmailCopied ? "Email Tersalin!" : "Email"}
            </button>

            <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>

            <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
          </div>
        </section>

      </div>

      <footer className="text-center py-10 text-gray-400 text-sm font-medium border-t border-gray-100 flex flex-col sm:flex-row justify-center items-center gap-2">
        <span>© 2026 {PORTFOLIO_DATA.hero.name}.</span>
        <span className="hidden sm:inline">•</span>
        <span>Built with Next.js & Tailwind</span>
      </footer>
    </main>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-6 mb-10">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
        {title}
      </h2>
      <div className="h-px grow bg-gray-200" />
    </div>
  );
}