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
    <main className="min-h-screen bg-black text-gray-100 overflow-x-hidden">
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px] -z-10" />

      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <p className="font-mono-custom text-cyan-400 text-sm tracking-widest mb-4 glow-pulse">
          {"// MECHATRONICS ENGINEER"}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 bg-clip-text text-transparent">
          Wildan Ibransyah
        </h1>
        <p className="text-gray-400 max-w-xl text-lg mb-8">
          Fresh graduate D-IV Teknologi Rekayasa Mekatronika, fokus pada Industrial Automation, IoT Engineering, dan Computer Vision.
        </p>

        <a
          href="#contact"
          className="px-8 py-3 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          Hubungi Saya
        </a>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 border-t border-white/10">
        <h2 className="font-mono-custom text-fuchsia-400 text-sm tracking-widest mb-6">
          {"01 / TENTANG"}
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Lulusan Politeknik Negeri Jember dengan GPA 3.72, terbiasa kerja di persimpangan hardware dan software, mulai dari panel wiring, sensor, HMI, sampai model computer vision yang jalan real-time di embedded device.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 border-t border-white/10">
        <h2 className="font-mono-custom text-fuchsia-400 text-sm tracking-widest mb-10">
          {"02 / PROJECT"}
        </h2>
        <div className="space-y-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 bg-white/5"
            >
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stats.map((s) => (
                  <span
                    key={s}
                    className="font-mono-custom text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs text-gray-500">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 border-t border-white/10">
        <h2 className="font-mono-custom text-fuchsia-400 text-sm tracking-widest mb-10">
          {"03 / SKILLS"}
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-fuchsia-400/50 hover:text-fuchsia-300 transition-all duration-300 cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-3xl mx-auto px-6 py-24 border-t border-white/10 text-center">
        <h2 className="font-mono-custom text-fuchsia-400 text-sm tracking-widest mb-6">
          {"04 / KONTAK"}
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Mari terhubung
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:wildanibrans@gmail.com"
            className="px-6 py-3 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/wildanibransyah/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/wilskuyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="text-center py-10 text-gray-600 text-sm font-mono-custom">
        © 2026 Wildan Ibransyah
      </footer>
    </main>
  );
}