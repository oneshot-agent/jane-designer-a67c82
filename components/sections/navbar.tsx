import Link from 'next/link'
import { Pen } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[var(--brand-border)]">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Jane Designer home">
          <span className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-brand">
            <Pen className="w-4 h-4 text-white" aria-hidden="true" />
          </span>
          <span className="font-heading font-bold text-lg text-[var(--brand-text)] tracking-tight">
            Jane<span className="text-[var(--brand-primary)]">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="mailto:jane@janedesigner.com"
          className="hidden md:inline-flex items-center gap-2 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-light)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-accent hover:shadow-lg hover:-translate-y-0.5"
        >
          Let's Talk
        </Link>

        {/* Mobile menu button */}
        <Link
          href="mailto:jane@janedesigner.com"
          className="md:hidden text-sm font-semibold text-[var(--brand-accent)] border border-[var(--brand-accent)] px-4 py-2 rounded-full"
          aria-label="Contact Jane"
        >
          Let's Talk
        </Link>
      </nav>
    </header>
  )
}
