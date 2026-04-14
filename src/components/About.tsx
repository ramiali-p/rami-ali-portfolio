'use client'

import { useState, useEffect } from 'react'

export default function About() {

  const [age, setAge] = useState(22)

  useEffect(() => {
    const birthDate = new Date('2003-07-28')
    const today = new Date()
    // exact age calculation accounting for leap years and month/day
    const ageInYears = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)) 
    setAge(ageInYears)
  }, [])

  return (
    <section id="about" className="py-32 px-8 md:px-20 relative">

      {/* section label */}
      <div style={{ fontFamily: "var(--font-dm-mono)" }}
        className="flex items-center gap-4 mb-16">
        <span className="text-[#38bdf8] text-xs tracking-[0.3em] uppercase">01 — About</span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-6xl mx-auto">

        {/* LEFT — text */}
        <div className="flex-1">
          <h2 style={{ fontFamily: "var(--font-space-grotesk)" }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Engineer by passion,<br />
            <span className="text-white/30">builder by nature.</span>
          </h2>

          <div className="space-y-5 text-white/50 text-base leading-relaxed">
            <p>
              I'm Rami — a {age}-year-old IIoT & AI engineer based in Karlsruhe, Germany.
              I study Electrical Engineering and Information Technology at <span className="text-white/80">HKA Karlsruhe</span>.
              On the side I work at <span className="text-white/80">atio GmbH</span> building
              industrial IoT solutions on ThingWorx, developing object detection systems,
              and building RAG-based AI tools.
            </p>
            <p>
              I've always been drawn to the full spectrum of technology — from writing
              firmware for microcontrollers and designing digital circuits, to building
              full-stack web applications and integrating AI into real-world systems.
              If it involves technology, I want to understand it deeply.
            </p>
            <p>
              Outside of my engineering work, I help local businesses build a real digital
              presence. Most small businesses in Germany are underserved when it comes to
              web — and that's an opportunity I enjoy tackling.
            </p>
          </div>

          {/* language badges */}
          <div className="mt-10">
            <p style={{ fontFamily: "var(--font-dm-mono)" }}
              className="text-white/20 text-[10px] tracking-widest uppercase mb-4">
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { lang: 'Arabic', level: 'Native' },
                { lang: 'Hungarian', level: 'Native' },
                { lang: 'English', level: 'Full Professional' },
                { lang: 'German', level: 'Working' },
              ].map(({ lang, level }) => (
                <div key={lang}
                  className="border border-white/10 px-4 py-2 hover:border-[#38bdf8]/30 transition-colors duration-300">
                  <p style={{ fontFamily: "var(--font-space-grotesk)" }}
                    className="text-white text-sm font-semibold">{lang}</p>
                  <p style={{ fontFamily: "var(--font-dm-mono)" }}
                    className="text-white/30 text-[10px] tracking-wider">{level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — timeline */}
        <div className="lg:w-80">
          <p style={{ fontFamily: "var(--font-dm-mono)" }}
            className="text-white/20 text-[10px] tracking-widest uppercase mb-8">
            Timeline
          </p>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

            {[
              {
                year: '2024 — Now',
                title: 'IIoT & AI Engineer',
                sub: 'atio GmbH · Ulm',
                active: true,
              },
              {
                year: '2023 — Now',
                title: 'B.Eng. Electrical Engineering',
                sub: 'HKA Karlsruhe',
                active: true,
              },
              {
                year: '2024',
                title: 'Version Control System',
                sub: 'ThingWorx + Java + JDBC',
                active: false,
              },
              {
                year: '2024',
                title: 'REST API Development',
                sub: 'Spring Boot',
                active: false,
              },
              {
                year: '2024',
                title: 'Email & Notification System',
                sub: 'ThingWorx Platform',
                active: false,
              },
            ].map((item, i) => (
              <div key={i} className="relative pl-6 pb-8">
                {/* dot */}
                <div className={`absolute left-0 top-1 w-2 h-2 rounded-full -translate-x-[3.5px] border
                  ${item.active
                    ? 'bg-[#38bdf8] border-[#38bdf8]'
                    : 'bg-transparent border-white/20'
                  }`}
                />
                <p style={{ fontFamily: "var(--font-dm-mono)" }}
                  className="text-[#38bdf8] text-[10px] tracking-widest mb-1">
                  {item.year}
                </p>
                <p style={{ fontFamily: "var(--font-space-grotesk)" }}
                  className="text-white text-sm font-semibold mb-0.5">
                  {item.title}
                </p>
                <p className="text-white/30 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}