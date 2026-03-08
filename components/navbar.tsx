'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#features' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#stats' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-xl text-foreground tracking-tight"
        >
          Jane<span className="gradient-text">Designer</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="mailto:jane@janedesigner.com"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground hover:bg-amber-400 transition-colors shadow-md"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-border px-6 pb-5 pt-2 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-foreground py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="mailto:jane@janedesigner.com"
            className="inline-flex items-center justify-center w-full px-5 py-2.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground"
            onClick={() => setOpen(false)}
          >
            Let's Talk
          </Link>
        </div>
      )}
    </header>
  )
}
