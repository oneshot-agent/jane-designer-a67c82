import Link from 'next/link'
import { Pen, Twitter, Linkedin, Dribbble, Instagram } from 'lucide-react'

const navColumns = [
  {
    title: 'Work',
    links: [
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Case Studies', href: '#portfolio' },
      { label: 'Results', href: '#about' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Brand Identity', href: '#services' },
      { label: 'Web Design', href: '#services' },
      { label: 'Product Design', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Process', href: '#process' },
      { label: 'Contact', href: 'mailto:jane@janedesigner.com' },
    ],
  },
]

const socials = [
  { label: 'Twitter', href: '#', Icon: Twitter },
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
  { label: 'Dribbble', href: '#', Icon: Dribbble },
  { label: 'Instagram', href: '#', Icon: Instagram },
]

export default function Footer() {
  return (
    <footer
      className="bg-[var(--brand-text)] text-white"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5" aria-label="Jane Designer home">
              <span className="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center">
                <Pen className="w-4 h-4 text-white" aria-hidden="true" />
              </span>
              <span className="font-heading font-bold text-xl tracking-tight">
                Jane<span className="text-[var(--brand-primary-light)]">.</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Creative designer specializing in brand identity and web design for startups that want to grow.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--brand-primary)] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Jane Designer. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/70 transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/70 transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
