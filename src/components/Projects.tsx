'use client'

const projects = [
  {
    number: '01',
    title: 'Version Control System for ThingWorx',
    category: 'IoT · Java · JDBC',
    description:
      'Designed and built a full version control system with merge request approval workflows directly inside the ThingWorx platform. Integrated Java ThingWorx Client and JDBC for efficient database interactions.',
    tags: ['ThingWorx', 'Java', 'JDBC', 'IoT'],
    color: '#38bdf8',
    type: 'Professional',
  },
  {
    number: '02',
    title: 'REST API Platform with Spring Boot',
    category: 'Backend · Java · API',
    description:
      'Developed and integrated RESTful APIs using Spring Boot to enable efficient communication between distributed industrial systems. Focused on reliability, scalability and clean architecture.',
    tags: ['Spring Boot', 'Java', 'REST API', 'Distributed Systems'],
    color: '#818cf8',
    type: 'Professional',
  },
  {
    number: '03',
    title: 'Email & Notification System for ThingWorx',
    category: 'IoT · Full Stack · Real-time',
    description:
      'Built from scratch to facilitate seamless communication and real-time alerts within the ThingWorx platform. Handles event-driven notifications across industrial IoT environments.',
    tags: ['ThingWorx', 'Java', 'Real-time', 'IoT'],
    color: '#22d3ee',
    type: 'Professional',
  },
  {
    number: '04',
    title: 'RAG AI System',
    category: 'AI · LLM · Backend',
    description:
      'Built a Retrieval-Augmented Generation system for intelligent document querying and knowledge extraction. Integrated with industrial workflows to surface relevant data faster.',
    tags: ['RAG', 'AI', 'LLM', 'Python'],
    color: '#818cf8',
    type: 'Professional',
  },
  {
    number: '05',
    title: 'Object Detection Solution',
    category: 'AI · Computer Vision',
    description:
      'Developed an object detection pipeline for industrial use cases at atio GmbH. Applied computer vision techniques to automate visual inspection and monitoring tasks.',
    tags: ['Object Detection', 'Computer Vision', 'AI', 'Python'],
    color: '#38bdf8',
    type: 'Professional',
  },
  {
    number: '06',
    title: 'Local Business Websites',
    category: 'Web · Freelance · React',
    description:
      'Designing and building modern, fast websites for local businesses in the Karlsruhe area. Each site is custom built — no templates — with a focus on mobile performance and clean design.',
    tags: ['React', 'Tailwind', 'Vite', 'Freelance'],
    color: '#22d3ee',
    type: 'Freelance',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 md:px-20 relative">

      {/* section label */}
      <div style={{ fontFamily: "var(--font-dm-mono)" }}
        className="flex items-center gap-4 mb-16">
        <span className="text-[#38bdf8] text-xs tracking-[0.3em] uppercase">03 — Projects</span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="max-w-6xl mx-auto">

        <h2 style={{ fontFamily: "var(--font-space-grotesk)" }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Things I've built.
          <span className="block text-white/20">Across every layer.</span>
        </h2>

        <p className="text-white/40 text-base max-w-xl leading-relaxed mb-16">
          A mix of professional engineering work at atio GmbH and freelance web projects — from industrial IoT systems to local business websites.
        </p>

        {/* project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {projects.map((project) => (
            <div
              key={project.number}
              className="bg-[#080808] p-8 group hover:bg-white/[0.03] transition-all duration-300 flex flex-col"
            >
              {/* top row */}
              <div className="flex justify-between items-start mb-6">
                <span style={{ fontFamily: "'DM Mono', monospace", color: project.color }}
                  className="text-[10px] tracking-widest opacity-60">
                  {project.number}
                </span>
                <span style={{ fontFamily: "var(--font-dm-mono)" }}
                  className="text-[10px] tracking-wider text-white/20 border border-white/10 px-2 py-1">
                  {project.type}
                </span>
              </div>

              {/* category */}
              <p style={{ fontFamily: "'DM Mono', monospace", color: project.color }}
                className="text-[10px] tracking-widest uppercase mb-3 opacity-80">
                {project.category}
              </p>

              {/* title */}
              <h3 style={{ fontFamily: "var(--font-space-grotesk)" }}
                className="text-white text-lg font-bold mb-4 leading-snug group-hover:text-white transition-colors">
                {project.title}
              </h3>

              {/* description */}
              <p className="text-white/40 text-sm leading-relaxed flex-1 mb-6">
                {project.description}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag}
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                    className="text-[10px] text-white/20 border border-white/10 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              {/* hover accent line */}
              <div className="h-px w-0 group-hover:w-full transition-all duration-500 mt-6"
                style={{ background: project.color }} />
            </div>
          ))}
        </div>

        {/* bottom note */}
        <div className="mt-8 flex items-center gap-4">
          <div className="h-px bg-white/10 flex-1" />
          <p style={{ fontFamily: "var(--font-dm-mono)" }}
            className="text-white/20 text-[10px] tracking-widest uppercase">
            More projects coming soon
          </p>
          <div className="h-px bg-white/10 flex-1" />
        </div>

      </div>
    </section>
  )
}