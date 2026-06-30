export default function Home() {
  const projects = [
    {
      title: "Cacao Fruit Sorting System",
      desc: "Real-time detection & sorting kondisi fisik buah kakao (baik/buruk) pakai YOLOv11n di Raspberry Pi 5.",
      stats: ["Precision 98.7%", "Recall 99%", "mAP50 99.4%"],
      tags: ["YOLOv11n", "Raspberry Pi 5", "Computer Vision", "Python"],
    },
  ];

  const skills = [
    "Computer Vision (YOLO)",
    "Raspberry Pi",
    "ESP32",
    "PLC Programming",
    "IoT Systems",
    "HMI",
    "Industrial Automation",
    "Python",
  ];

  return (
    <main className="min-h-screen bg-black text-gray-100">
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px] -z-10" />

      {/* Sticky nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono-custom text-sm text-cyan-300">wildan.dev</span>
          <div className="flex gap-6 text-sm text-gray-400 font-mono-custom">
            <a href="#about" className="hover:text-cyan-300 transition-colors">Tentang  |</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Project |</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Kontak</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="font-mono-custom text-cyan-400 text-sm tracking-widest mb-3 glow-pulse">
          {"// MECHATRONICS ENGINEER"}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 bg-clip-text text-transparent">
          Wildan Ibransyah
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-base mb-6">
          Fresh graduate D-IV Teknologi Rekayasa Mekatronika — fokus pada Industrial Automation, IoT Engineering, dan Computer Vision.
        </p>
        <div className="flex justify-center gap-3">
          <a
            href="#contact"
            className="px-6 py-2.5 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            Hubungi Saya
          </a>
          <a
            href="#projects"
            className="px-6 py-2.5 border border-white/15 text-gray-300 rounded-full hover:border-white/40 transition-all duration-300 text-sm"
          >
            Lihat Project
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">
        <h2 className="font-mono-custom text-fuchsia-400 text-xs tracking-widest mb-3">
          {"01 / TENTANG"}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Lulusan Politeknik Negeri Jember dengan GPA 3.72, terbiasa kerja di persimpangan hardware dan software — mulai dari panel wiring, sensor, HMI, sampai model computer vision yang jalan real-time di embedded device.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">
        <h2 className="font-mono-custom text-fuchsia-400 text-xs tracking-widest mb-5">
          {"02 / PROJECT"}
        </h2>
        <div className="space-y-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group p-5 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 bg-white/5"
            >
              <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                {p.stats.map((s) => (
                  <span
                    key={s}
                    className="font-mono-custom text-xs px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs text-gray-500">#{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">
        <h2 className="font-mono-custom text-fuchsia-400 text-xs tracking-widest mb-5">
          {"03 / SKILLS"}
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 text-sm rounded-full border border-white/10 text-gray-300 hover:border-fuchsia-400/50 hover:text-fuchsia-300 transition-all duration-300 cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-white/10 text-center">
        <h2 className="font-mono-custom text-fuchsia-400 text-xs tracking-widest mb-3">
          {"04 / KONTAK"}
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Mari terhubung
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="mailto:wildanibrans@gmail.com"
            className="px-5 py-2.5 text-sm rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/wildanibransyah/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/wilskuyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-600 text-xs font-mono-custom border-t border-white/10">
        © 2026 Wildan Ibransyah
      </footer>
    </main>
  );
}