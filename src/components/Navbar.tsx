'use client'


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center border-b border-white/5 backdrop-blur-sm bg-[#080808]/80">
      <span style={{ fontFamily: "var(--font-dm-mono)" }} className="text-xs text-white/40 tracking-widest uppercase">
        rami.ali
      </span>
      <ul className="flex gap-8">
        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/40 hover:text-white transition-colors duration-300 tracking-wide"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}