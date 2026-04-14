'use client'


export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 pt-24 relative overflow-hidden">

      {/* background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* animated background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div style={{
          position: 'absolute', top: '50%', right: '-100px',
          width: '500px', height: '500px',
          background: 'conic-gradient(from 0deg, transparent 55%, rgba(56,189,248,0.15) 65%, rgba(34,211,238,0.12) 75%, transparent 85%)',
          borderRadius: '50%',
          animation: 'spin 10s linear infinite',
          filter: 'blur(25px)',
          transform: 'translateY(-50%)',
        }} />
        <div style={{
          position: 'absolute', top: '20%', right: '10%',
          width: '300px', height: '300px',
          background: 'rgba(56,189,248,0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'floatA 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '50%', right: '25%',
          width: '200px', height: '200px',
          background: 'rgba(99,102,241,0.1)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'floatB 6s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '30%', right: '30%',
          width: '120px', height: '120px',
          background: 'rgba(34,211,238,0.15)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          animation: 'floatA 5s ease-in-out infinite 1s',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '5%',
          width: '250px', height: '250px',
          background: 'rgba(56,189,248,0.07)',
          borderRadius: '50%',
          filter: 'blur(70px)',
          animation: 'floatB 9s ease-in-out infinite 2s',
        }} />
      </div>

      <style>{`
        @keyframes spin {
          from { transform: translateY(-50%) rotate(0deg); }
          to   { transform: translateY(-50%) rotate(360deg); }
        }
        @keyframes floatA {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50%       { transform: translate(-30px, -25px) scale(1.08); }
        }
        @keyframes floatB {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50%       { transform: translate(25px, 30px) scale(0.92); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* two column layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 w-full max-w-6xl">

        {/* LEFT — main content */}
        <div className="max-w-2xl">

          <div style={{ fontFamily: "var(--font-dm-mono)" }} className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span className="text-[#38bdf8] text-xs tracking-[0.3em] uppercase">
              IIoT & AI Engineer · Working Student · Karlsruhe, DE
            </span>
          </div>

          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1 }}>
            <span className="block text-[80px] md:text-[120px] text-white" style={{ letterSpacing: '-4px' }}>
              RAMI
            </span>
            <span className="block text-[80px] md:text-[120px]" style={{
              letterSpacing: '-4px',
              WebkitTextStroke: '1px rgba(255,255,255,0.3)',
              color: 'transparent'
            }}>
              ALI
            </span>
          </div>

          <p style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.08em' }}
            className="text-white/40 text-sm md:text-base uppercase mt-4 mb-10">
            Web · IoT · AI · Embedded Systems
          </p>

          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-4">
            Industrial IoT & AI Engineer at{' '}
            <span className="text-white/80">atio GmbH</span> and EE student at{' '}
            <span className="text-white/80">HKA Karlsruhe</span>.
          </p>
          <p className="text-white/40 text-base max-w-xl leading-relaxed mb-10">
            I explore everything tech — from microcontrollers and embedded systems to full-stack web and AI. I also build modern websites for local businesses that deserve a real digital presence.
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['ThingWorx', 'Spring Boot', 'React.js', 'Java', 'C++', 'Python', 'IoT', 'AI'].map((tech) => (
              <span
                key={tech}
                style={{ fontFamily: "var(--font-dm-mono)" }}
                className="text-xs text-white/40 border border-white/10 px-3 py-1 hover:border-[#38bdf8]/40 hover:text-[#38bdf8] transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#projects"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              className="px-6 py-3 bg-[#38bdf8] text-black font-bold text-sm tracking-wide hover:bg-white transition-colors duration-300">
              See My Work
            </a>
            <a href="#contact"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              className="px-6 py-3 border border-white/20 text-white text-sm tracking-wide hover:border-white/60 transition-colors duration-300">
              Get In Touch
            </a>
          </div>
        </div>

        {/* RIGHT — floating info card */}
        <div className="hidden lg:flex flex-col gap-4 min-w-[280px]" style={{ animation: 'fadeInUp 1s ease forwards' }}>

          {/* current role card */}
          <div className="border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 hover:border-[#38bdf8]/30 transition-colors duration-300">
            <p style={{ fontFamily: "var(--font-dm-mono)" }} className="text-[#38bdf8] text-[10px] tracking-widest uppercase mb-3">
              Current Role
            </p>
            <p className="text-white text-sm font-semibold mb-1">Industrial IIoT & AI Engineer</p>
            <p className="text-white/40 text-xs">atio GmbH · Ulm, DE</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              <span style={{ fontFamily: "var(--font-dm-mono)" }} className="text-white/30 text-[10px]">Since Jan 2024</span>
            </div>
          </div>

          {/* education card */}
          <div className="border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 hover:border-[#38bdf8]/30 transition-colors duration-300">
            <p style={{ fontFamily: "var(--font-dm-mono)" }} className="text-[#38bdf8] text-[10px] tracking-widest uppercase mb-3">
              Education
            </p>
            <p className="text-white text-sm font-semibold mb-1">B.Eng. Electrical Engineering</p>
            <p className="text-white/40 text-xs">HKA Karlsruhe · 2023 – 2027</p>
          </div>

          {/* stats row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-white/10 bg-white/[0.03] p-4 text-center hover:border-[#38bdf8]/30 transition-colors duration-300">
              <p className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>4+</p>
              <p style={{ fontFamily: "var(--font-dm-mono)" }} className="text-white/30 text-[9px] tracking-wider uppercase mt-1">Languages</p>
            </div>
            <div className="border border-white/10 bg-white/[0.03] p-4 text-center hover:border-[#38bdf8]/30 transition-colors duration-300">
              <p className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>2+</p>
              <p style={{ fontFamily: "var(--font-dm-mono)" }} className="text-white/30 text-[9px] tracking-wider uppercase mt-1">Yr Experience</p>
            </div>
          </div>

          {/* available for work badge */}
          <div className="border border-[#38bdf8]/20 bg-[#38bdf8]/5 p-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse flex-shrink-0" />
            <p style={{ fontFamily: "var(--font-dm-mono)" }} className="text-[#38bdf8] text-[10px] tracking-wider uppercase">
              Open to freelance projects
            </p>
          </div>

        </div>
      </div>

      {/* bottom corner label */}
      <div style={{ fontFamily: "var(--font-dm-mono)" }} className="absolute bottom-8 right-8 text-white/20 text-xs tracking-widest">
        EE · IoT · AI · Web
      </div>

    </section>
  )
}