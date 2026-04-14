'use client'

const skillGroups = [
  {
    category: 'IoT & Embedded',
    color: '#38bdf8',
    skills: [
      { name: 'ThingWorx', level: 90 },
      { name: 'C / C++', level: 80 },
      { name: 'Embedded Systems', level: 75 },
      { name: 'VHDL', level: 65 },
      { name: 'Siemens TIA Portal', level: 70 },
    ],
  },
  {
    category: 'AI & Backend',
    color: '#818cf8',
    skills: [
      { name: 'Java / Spring Boot', level: 85 },
      { name: 'RAG AI Systems', level: 75 },
      { name: 'Object Detection', level: 70 },
      { name: 'REST APIs', level: 90 },
      { name: 'JDBC / Databases', level: 75 },
    ],
  },
  {
    category: 'Web & Frontend',
    color: '#22d3ee',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'Node.js', level: 70 },
      { name: 'C# / .NET MVC', level: 70 },
      { name: 'Python', level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8 md:px-20 relative">

      {/* section label */}
      <div style={{ fontFamily: "var(--font-dm-mono)" }}
        className="flex items-center gap-4 mb-16">
        <span className="text-[#38bdf8] text-xs tracking-[0.3em] uppercase">02 — Skills</span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="max-w-6xl mx-auto">

        <h2 style={{ fontFamily: "var(--font-space-grotesk)" }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          What I work with.
          <span className="block text-white/20">Every layer of the stack.</span>
        </h2>

        <p className="text-white/40 text-base max-w-xl leading-relaxed mb-16">
          From bare metal firmware to cloud IoT platforms to polished web interfaces — here's where I spend my time.
        </p>

        {/* skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}
              className="border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors duration-300">

              {/* category header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                <p style={{ fontFamily: "'DM Mono', monospace", color: group.color }}
                  className="text-[10px] tracking-widest uppercase">
                  {group.category}
                </p>
              </div>

              {/* skill bars */}
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ fontFamily: "var(--font-space-grotesk)" }}
                        className="text-white/70 text-sm">
                        {skill.name}
                      </span>
                      <span style={{ fontFamily: "var(--font-dm-mono)" }}
                        className="text-white/20 text-[10px]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-px bg-white/10 w-full relative">
                      <div
                        className="h-px absolute left-0 top-0 transition-all duration-1000"
                        style={{ width: `${skill.level}%`, background: group.color, opacity: 0.6 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* bottom tools strip */}
        <div className="mt-12 border border-white/10 p-6">
          <p style={{ fontFamily: "var(--font-dm-mono)" }}
            className="text-white/20 text-[10px] tracking-widest uppercase mb-5">
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-3">
            {['Git', 'Linux', 'Docker', 'Postman', 'VS Code', 'IntelliJ', 'Tailwind CSS', 'ARM Assembly', 'MQTT', 'OPC-UA'].map((tool) => (
              <span key={tool}
                style={{ fontFamily: "var(--font-dm-mono)" }}
                className="text-xs text-white/30 border border-white/10 px-3 py-1.5 hover:text-[#38bdf8] hover:border-[#38bdf8]/30 transition-colors duration-300">
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}