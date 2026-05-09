"use client";

import { useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  type: "Professional" | "Freelance" | "Personal";
  problem?: string;
  solution?: string;
  challenges?: string[];
  learnings?: string;
  liveUrl?: string;
  githubUrl?: string;
  proprietary?: boolean;
};

function typeColor(type: Project["type"]) {
  switch (type) {
    case "Professional":
      return { text: "#38bdf8", border: "#38bdf840", bg: "#38bdf810" };
    case "Freelance":
      return { text: "#22d3ee", border: "#22d3ee40", bg: "#22d3ee10" };
    case "Personal":
      return { text: "#f472b6", border: "#f472b640", bg: "#f472b610" };
  }
}

const projects: Project[] = [
  {
    number: "01",
    title: "Version Control System for ThingWorx",
    category: "IoT · Java · JDBC",
    description:
      "Designed and built a full version control system with merge request approval workflows directly inside the ThingWorx platform.",
    tags: ["ThingWorx", "Java", "JDBC", "IoT"],
    color: "#38bdf8",
    type: "Professional",
    problem:
      "The ThingWorx platform lacked native version control — multiple developers working on the same IoT entities caused conflicts, lost work, and no audit trail of changes. There was no way of updating the production server directly from the development environment without manually copying files and risking errors.",
    solution:
      "Designed and built a custom version control system integrated directly into ThingWorx, complete with branching, merge requests, approval workflows, and full change history. Built the backend in Java using the Java ThingWorx Client and connected to a relational database via JDBC.",
    challenges: [
      "Designing a merge conflict resolution system for ThingWorx entities",
      "Handling concurrent edits across multiple developers in real-time",
      "Building an approval workflow that integrated with existing permissions",
      "Optimizing JDBC queries for performance across large project histories",
    ],
    learnings:
      "Gained deep understanding of enterprise IoT platform architecture, Java backend development at scale, and designing complex workflow systems from the ground up.",
    proprietary: true,
  },
  {
    number: "02",
    title: "REST API Platform with Spring Boot",
    category: "Backend · Java · API",
    description:
      "Developed and integrated RESTful APIs using Spring Boot to enable efficient communication between distributed industrial systems.",
    tags: ["Spring Boot", "Java", "REST API", "Distributed Systems"],
    color: "#818cf8",
    type: "Professional",
    problem:
      "Industrial IoT deployments often involve multiple systems that need to exchange data reliably — custom integrations were slow to build and hard to maintain.",
    solution:
      "Built a robust REST API platform using Spring Boot that acts as the communication layer between distributed IoT systems, with a clean and consistent architecture that makes adding new endpoints fast.",
    challenges: [
      "Designing a clean, reusable API architecture that scales",
      "Implementing robust error handling for network-unreliable IoT environments",
      "Ensuring low-latency communication between distributed systems",
      "Building authentication and rate limiting for production use",
    ],
    learnings:
      "Deepened my backend engineering skills with Spring Boot, learned clean architecture patterns, and gained experience building production-grade APIs.",
    proprietary: true,
  },
  {
    number: "03",
    title: "Email & Notification System for ThingWorx",
    category: "IoT · Full Stack · Real-time",
    description:
      "Built from scratch to facilitate seamless communication and real-time alerts within the ThingWorx platform.",
    tags: ["ThingWorx", "Java", "Real-time", "IoT"],
    color: "#22d3ee",
    type: "Professional",
    problem:
      "Industrial IoT users needed to be alerted in real time when specific events occurred across their connected devices — but no good notification system existed within ThingWorx.",
    solution:
      "Designed and built a full email client and notification system integrated into ThingWorx. Supports event-driven triggers, customizable templates, and real-time delivery across industrial environments.",
    challenges: [
      "Designing a flexible event-trigger system that scales to thousands of devices",
      "Building reliable email delivery with retry logic and failure handling",
      "Creating an intuitive UI for configuring notification rules",
      "Ensuring real-time performance under heavy load",
    ],
    learnings:
      "Gained full-stack experience on the ThingWorx platform, learned how to design event-driven systems, and understood the challenges of industrial real-time communication.",
    proprietary: true,
  },
  {
    number: "04",
    title: "RAG AI System",
    category: "AI · LLM · Backend",
    description:
      "Built a Retrieval-Augmented Generation system for intelligent document querying and knowledge extraction.",
    tags: ["RAG", "AI", "LLM", "Python"],
    color: "#818cf8",
    type: "Professional",
    problem:
      "Industrial engineers spend enormous time searching through documentation, manuals, and reports — traditional search fails when answers require context or synthesis.",
    solution:
      "Built a Retrieval-Augmented Generation (RAG) system that lets users ask natural language questions and get accurate, context-aware answers from internal documentation. Integrated with industrial workflows to surface relevant data faster.",
    challenges: [
      "Designing an efficient embedding and retrieval pipeline",
      "Tuning the LLM prompt for domain-specific accuracy",
      "Handling large document sets with fast query times",
      "Ensuring the system only answers from verified internal sources",
    ],
    learnings:
      "Got hands-on experience with modern LLM tooling, vector databases, and designing AI systems that are reliable in production rather than just demo-worthy.",
    proprietary: true,
  },
  {
    number: "05",
    title: "Object Detection Solution",
    category: "AI · Computer Vision",
    description:
      "Developed an object detection pipeline for industrial use cases at atio GmbH.",
    tags: ["Object Detection", "Computer Vision", "AI", "Python"],
    color: "#38bdf8",
    type: "Professional",
    problem:
      "Industrial visual inspection was being done manually — slow, inconsistent, and expensive. An automated vision system could dramatically reduce costs and improve quality.",
    solution:
      "Developed an object detection pipeline using modern computer vision techniques. Applied the solution to automate visual inspection and real-time monitoring tasks in industrial environments.",
    challenges: [
      "Training models on limited industrial datasets",
      "Handling variable lighting, angles, and environmental conditions",
      "Optimizing model inference for real-time edge deployment",
      "Integrating the vision pipeline with existing industrial systems",
    ],
    learnings:
      "Deepened my knowledge of computer vision, model training workflows, and the engineering challenges of deploying AI in real industrial environments.",
    proprietary: true,
  },
  {
    number: "06",
    title: "This Portfolio Website",
    category: "Web · Next.js · Design",
    description:
      "The site you're currently looking at — built from scratch as a showcase of my engineering and design approach.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    color: "#22d3ee",
    type: "Personal",
    problem:
      "I needed a portfolio that accurately represents my dual identity — engineer and web builder — while also functioning as a sales tool for local business clients.",
    solution:
      "Built a custom Next.js application with a strong dark aesthetic, animated backgrounds, and a fully functional contact form connected to a custom API route using Resend for email delivery.",
    challenges: [
      "Designing a layout that serves both recruiters and local business owners",
      "Building animated backgrounds that enhance rather than distract",
      "Writing the contact form email backend from scratch",
      "Balancing visual density with readability",
    ],
    learnings:
      "Reinforced the value of clear design intent, and reminded me that even a small side project is worth doing properly.",
    liveUrl: "https://rami-ali-portfolio.vercel.app",
    githubUrl: "https://github.com/PotatoMan3728/rami-ali-portfolio",
  },
  {
    number: "07",
    title: "Restaurant Website for an italian restaurant",
    category: "Web · Front-End · Design",
    description:
      "Designed and developed a modern, responsive website for a local Italian restaurant to attract new customers and showcase their menu.",
    tags: ["React", "Tailwind", "Responsive Design"],
    color: "#f472b6",
    type: "Freelance",
    problem:
      "The restaurant needed a modern, responsive website to attract new customers and showcase their menu effectively.",
    solution:
      "Designed and developed a custom React application with Tailwind CSS for a responsive, visually appealing website that highlights the restaurant's offerings.",
    challenges: [
      "Creating a layout that effectively showcases the menu while maintaining a modern aesthetic",
      "Ensuring the website is fully responsive across all device sizes",
      "Integrating a user-friendly contact form for customer inquiries",
    ],
    learnings:
      "Enhanced my skills in frontend development and responsive design, while gaining experience in managing freelance projects from concept to completion.",
    liveUrl: "https://restaurant-site-renexis.vercel.app/",
    githubUrl: "https://github.com/PotatoMan3728/restaurant-site-renexis"
  }
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-8 md:px-20 relative">
      <div
        style={{ fontFamily: "var(--font-dm-mono)" }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-[#38bdf8] text-xs tracking-[0.3em] uppercase">
          03 — Projects
        </span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2
          style={{ fontFamily: "var(--font-space-grotesk)" }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
        >
          Things I've built.
          <span className="block text-white/20">Across every layer.</span>
        </h2>

        <p className="text-white/40 text-base max-w-xl leading-relaxed mb-16">
          A mix of professional engineering work at atio GmbH and personal
          projects — from industrial IoT systems to freelance websites.
        </p>

        {/* project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {projects.map((project) => (
            <button
              key={project.number}
              onClick={() => setSelected(project)}
              className="bg-[#080808] p-8 group hover:bg-white/[0.03] transition-all duration-300 flex flex-col text-left cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: project.color,
                  }}
                  className="text-[10px] tracking-widest opacity-60"
                >
                  {project.number}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: typeColor(project.type).text,
                    borderColor: typeColor(project.type).border,
                    background: typeColor(project.type).bg,
                  }}
                  className="text-[10px] tracking-wider border px-2 py-1"
                >
                  {project.type}
                </span>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: project.color,
                }}
                className="text-[10px] tracking-widest uppercase mb-3 opacity-80"
              >
                {project.category}
              </p>

              <h3
                style={{ fontFamily: "var(--font-space-grotesk)" }}
                className="text-white text-lg font-bold mb-4 leading-snug"
              >
                {project.title}
              </h3>

              <p className="text-white/40 text-sm leading-relaxed flex-1 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                    className="text-[10px] text-white/20 border border-white/10 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* view details hint */}
              <div className="flex items-center gap-2 mt-6 opacity-40 group-hover:opacity-100 transition-opacity">
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: project.color,
                  }}
                  className="text-[10px] tracking-widest uppercase"
                >
                  View Details
                </span>
                <span style={{ color: project.color }} className="text-xs">
                  →
                </span>
              </div>

              <div
                className="h-px w-0 group-hover:w-full transition-all duration-500 mt-6"
                style={{ background: project.color }}
              />
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-px bg-white/10 flex-1" />
          <p
            style={{ fontFamily: "var(--font-dm-mono)" }}
            className="text-white/20 text-[10px] tracking-widest uppercase"
          >
            More projects coming soon
          </p>
          <div className="h-px bg-white/10 flex-1" />
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#0a0a0a] border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto custom-scroll"
            onClick={(e) => e.stopPropagation()}
          >
            {/* header */}
            <div className="sticky top-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex justify-between items-start">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: selected.color,
                  }}
                  className="text-[10px] tracking-widest uppercase mb-2 opacity-80"
                >
                  {selected.category}
                </p>
                <h3
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                  className="text-white text-2xl md:text-3xl font-bold leading-tight"
                >
                  {selected.title}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-white/40 hover:text-white text-2xl leading-none pl-4"
              >
                ×
              </button>
            </div>

            {/* body */}
            <div className="p-6 md:p-8 space-y-8">
              {selected.problem && (
                <div>
                  <p
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                    className="text-white/30 text-[10px] tracking-widest uppercase mb-3"
                  >
                    The Problem
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {selected.problem}
                  </p>
                </div>
              )}

              {selected.solution && (
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      color: selected.color,
                    }}
                    className="text-[10px] tracking-widest uppercase mb-3 opacity-80"
                  >
                    My Solution
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {selected.solution}
                  </p>
                </div>
              )}

              {selected.challenges && selected.challenges.length > 0 && (
                <div>
                  <p
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                    className="text-white/30 text-[10px] tracking-widest uppercase mb-3"
                  >
                    Technical Challenges
                  </p>
                  <ul className="space-y-2">
                    {selected.challenges.map((c, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-white/70 text-sm leading-relaxed"
                      >
                        <span
                          style={{ color: selected.color }}
                          className="mt-1"
                        >
                          ▸
                        </span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selected.learnings && (
                <div>
                  <p
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                    className="text-white/30 text-[10px] tracking-widest uppercase mb-3"
                  >
                    What I Learned
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {selected.learnings}
                  </p>
                </div>
              )}

              {/* tech stack */}
              <div>
                <p
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                  className="text-white/30 text-[10px] tracking-widest uppercase mb-3"
                >
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                      className="text-[10px] text-white/50 border border-white/10 px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* action buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                {selected.liveUrl && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      background: selected.color,
                    }}
                    className="px-6 py-3 text-black font-bold text-sm hover:bg-white transition-colors duration-300"
                  >
                    Visit Site →
                  </a>
                )}
                {selected.githubUrl && (
                  <a
                    href={selected.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                    className="px-6 py-3 border border-white/20 text-white text-sm hover:border-white/60 transition-colors duration-300"
                  >
                    View Code ↗
                  </a>
                )}
                {selected.proprietary && (
                  <p
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                    className="text-white/30 text-[10px] tracking-widest uppercase self-center"
                  >
                    · Proprietary · Reach out for more details
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
