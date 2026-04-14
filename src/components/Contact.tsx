'use client'

import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'

const contactLinks = [
  {
    label: 'Email',
    value: 'ramiali3728@gmail.com',
    href: 'mailto:ramiali3728@gmail.com',
    icon: <MdEmail size={16} />,
  },
  {
    label: 'LinkedIn',
    value: 'rami-ali-977438221',
    href: 'https://www.linkedin.com/in/rami-ali-977438221/',
    icon: <FaLinkedin size={16} />,
  }
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 px-8 md:px-20 relative">

      <div style={{ fontFamily: "var(--font-dm-mono)" }}
        className="flex items-center gap-4 mb-16">
        <span className="text-[#38bdf8] text-xs tracking-[0.3em] uppercase">04 — Contact</span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* LEFT */}
        <div className="flex-1">
          <h2 style={{ fontFamily: "var(--font-space-grotesk)" }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's build<br />
            <span className="text-white/20">something real.</span>
          </h2>

          <p className="text-white/40 text-base max-w-md leading-relaxed mb-12">
            Whether you need a website for your business, want to collaborate on an IoT or AI project, or just want to talk tech — my inbox is open.
          </p>

          <div className="space-y-3">
            {contactLinks.map((item) => (
              item.href ? (
                <a key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center justify-between border border-white/10 px-6 py-4 group hover:border-[#38bdf8]/40 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span className="text-[#38bdf8]">{item.icon}</span>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono)" }}
                        className="text-white/20 text-[10px] tracking-widest uppercase mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-white/70 text-sm group-hover:text-white transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <span className="text-white/20 group-hover:text-[#38bdf8] transition-colors text-lg">→</span>
                </a>
              ) : (
                <div key={item.label}
                  className="flex items-center gap-4 border border-white/10 px-6 py-4">
                  <span className="text-[#38bdf8]">{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono)" }}
                      className="text-white/20 text-[10px] tracking-widest uppercase mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white/50 text-sm">{item.value}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="lg:w-[480px]">
          <div className="border border-white/10 p-8">

            <p style={{ fontFamily: "var(--font-dm-mono)" }}
              className="text-white/20 text-[10px] tracking-widest uppercase mb-8">
              Send a message
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label style={{ fontFamily: "var(--font-dm-mono)" }}
                    className="text-white/20 text-[10px] tracking-widest uppercase block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#38bdf8]/40 transition-colors"
                  />
                </div>
                <div>
                  <label style={{ fontFamily: "var(--font-dm-mono)" }}
                    className="text-white/20 text-[10px] tracking-widest uppercase block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#38bdf8]/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: "var(--font-dm-mono)" }}
                  className="text-white/20 text-[10px] tracking-widest uppercase block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#38bdf8]/40 transition-colors"
                />
              </div>

              <div>
                <label style={{ fontFamily: "var(--font-dm-mono)" }}
                  className="text-white/20 text-[10px] tracking-widest uppercase block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#38bdf8]/40 transition-colors resize-none"
                />
              </div>

              {/* status messages */}
              {status === 'success' && (
                <p style={{ fontFamily: "var(--font-dm-mono)" }}
                  className="text-[#38bdf8] text-xs tracking-widest">
                  ✓ Message sent — I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p style={{ fontFamily: "var(--font-dm-mono)" }}
                  className="text-red-400 text-xs tracking-widest">
                  ✗ Something went wrong. Try emailing me directly.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                className="w-full bg-[#38bdf8] text-black font-bold text-sm py-4 hover:bg-white transition-colors duration-300 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
        <p style={{ fontFamily: "var(--font-dm-mono)" }}
          className="text-white/20 text-[10px] tracking-widest uppercase">
          © 2025 Rami Ali — All rights reserved
        </p>
        <p style={{ fontFamily: "var(--font-dm-mono)" }}
          className="text-white/20 text-[10px] tracking-widest uppercase">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>

    </section>
  )
}