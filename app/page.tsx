import React from 'react';

// --- DATA SCULPTING (Pemisahan data agar komponen lebih compact) ---
const PORTFOLIO_DATA = {
  hero: {
    role: "// MECHATRONICS & AI ENGINEER",
    name: "Wildan Ibransyah",
    tagline: "Fresh graduate D-IV Teknologi Rekayasa Mekatronika — persimpangan antara Industrial Automation, IoT Engineering, dan Computer Vision.",
  },
  experience: [
    {
      role: "Automation Engineering Intern",
      company: "PT Mokko Otomasi Indonesia",
      duration: "3 Bulan 20 Hari",
      desc: "Pengembangan dan integrasi sistem kendali otomasi industri menggunakan PLC Mitsubishi FX5U. Terlibat langsung dalam perancangan sistem dan penyusunan laporan magang teknis.",
    }
  ],
  projects: [
    {
      title: "Cacao Fruit Sorting System (Tugas Akhir)",
      desc: "Mengumpulkan Data, Melatih Data Menggunakan Platform Roboflow dan Mengimplementasikan Algoritma YOLOv11n pada Raspberry Pi 5 untuk Deteksi dan Sortasi Buah Kakao Berdasarkan Kondisi Fisiknya yaitu Baik dan Buruk.",
      stats: ["Precision 0.9869", "Recall 0.9907", "mAP50 0.9941", "mAP50-95 0.9501"],
      tags: ["YOLOv11n", "Python", "Raspberry Pi", "Object Detection", "Computer Vision", "Embedded System", "Roboflow"],
    },
    {
      title: "Regional Dam Telemetry & Control",
      desc: "Berkontribusi dalam Perancangan Sistem Kontrol dan Monitoring Pintu Air Bendungan Daerah guna Mengatasi Kendala Geografis antara Lokasi Bendungan dan Pos Kendali Utama.",
      stats: [],
      tags: ["Panel Wiring", "Telemetry System", "Water Level Sensor Instalation", "Industrial Automation", "Instrumentation"],
    },
    {
      title: "Industrial HMI Interface Redesign",
      desc: "Berkontribusi dalam Redesain Human Machine Interface (HMI) pada Sistem Kontrol dan Monitoring Mesin Filling Thinner guna Meningkatkan Kemudahan Monitoring, Keterbacaan Informasi, dan Efisiensi Pengoperasian oleh Operator di Salah Satu Pabrik Thinner di Kabupaten Gresik, Jawa Timur.",
      stats: [],
      tags: ["Human Machine Interface (HMI)", "Industrial Automation", "Industrial Control System"],
    },
    {
      title: "IoT-Based Smart Egg Incubator Prototype",
      desc: "Berkontribusi dalam Perancangan dan Pengembangan Prototype Inkubator Penetas Telur Ayam Berbasis Internet of Things (IoT) dengan Fitur Monitoring dan Kontrol Suhu serta Kelembaban Secara Real-Time melalui Aplikasi Smartphone guna Menjaga Kondisi Inkubasi Tetap Optimal Selama Proses Penetasan.",
      stats: [],
      tags: ["Internet of Things (IoT)", "Embedded Systems", "Real-Time Monitoring", "Smartphone Control", "Sensor Integration"],
    }
  ],
  skills: [
    "Computer Vision (YOLO)", "Python", "PLC Mitsubishi FX5U", 
    "Raspberry Pi 5", "ESP32", "Industrial Automation", 
    "IoT Systems", "HMI Design", "Panel Wiring"
  ],
  links: [
    { label: "Email", url: "mailto:wildanibrans@gmail.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/wildanibransyah/" },
    { label: "GitHub", url: "https://github.com/wilskuyyy" },
  ]
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-gray-200 selection:bg-cyan-500/30 font-sans overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-fuchsia-600/10 rounded-full blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#050505]/60 border-b border-white/5 transition-all">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 font-semibold tracking-wider">
            WIL.DEV
          </span>
          <div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-400">
            {['Tentang', 'Pengalaman', 'Project', 'Kontak'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-start justify-center min-h-[60vh]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-cyan-400 text-xs tracking-widest">
              {PORTFOLIO_DATA.hero.role}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
            {PORTFOLIO_DATA.hero.name}
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
            {PORTFOLIO_DATA.hero.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#kontak" className="px-8 py-3 bg-cyan-500/10 border border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm font-semibold shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
              Hubungi Saya
            </a>
            <a href="#project" className="px-8 py-3 border border-white/10 text-gray-300 rounded-lg hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-sm font-semibold">
              Eksplorasi Project
            </a>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="pengalaman" className="scroll-mt-24">
          <SectionHeader number="01" title="PENGALAMAN MAGANG & KERJA" />
          <div className="grid gap-6">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="font-mono text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-fuchsia-300 text-sm font-mono mb-4">{exp.company}</p>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="project" className="scroll-mt-24">
          <SectionHeader number="02" title="PROJECT PILIHAN" />
          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.title} className="group flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>
                <div>
                  {/* Conditional Rendering untuk Stats agar layout tetap rapat jika stats kosong */}
                  {p.stats && p.stats.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.stats.map((s) => (
                        <span key={s} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs text-gray-500 font-mono">#{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="tentang" className="scroll-mt-24">
          <SectionHeader number="03" title="TEKNOLOGI & KEAHLIAN" />
          <div className="flex flex-wrap gap-3">
            {PORTFOLIO_DATA.skills.map((s) => (
              <span key={s} className="px-4 py-2 text-sm rounded-lg bg-white/[0.03] border border-white/10 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 cursor-default">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="kontak" className="scroll-mt-24 text-center pb-12">
          <SectionHeader number="04" title="KONTAK" className="justify-center" />
          <h3 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Mari Kolaborasi
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {PORTFOLIO_DATA.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" 
                 className="px-6 py-3 text-sm font-semibold rounded-lg bg-white/[0.03] border border-white/10 hover:border-cyan-400 hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300">
                {link.label}
              </a>
            ))}
          </div>
        </section>

      </div>

      <footer className="relative z-10 text-center py-8 text-gray-600 text-xs font-mono border-t border-white/5 bg-black/50">
        © 2026 {PORTFOLIO_DATA.hero.name}. All rights reserved.
      </footer>
    </main>
  );
}

function SectionHeader({ number, title, className = "" }: { number: string, title: string, className?: string }) {
  return (
    <div className={`flex items-center gap-4 mb-8 ${className}`}>
      <span className="font-mono text-cyan-500 text-sm">{number}</span>
      <div className="h-px w-12 bg-white/10" />
      <h2 className="font-mono text-gray-300 text-xs tracking-[0.2em] uppercase">
        {title}
      </h2>
      <div className="h-px flex-grow max-w-[200px] bg-gradient-to-r from-white/10 to-transparent" />
    </div>
  );
}