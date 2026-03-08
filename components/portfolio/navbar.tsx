'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Jane Designer — Home"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
            aria-hidden="true"
          >
            JD
          </div>
          <span
            className={`font-semibold text-lg transition-colors duration-300 ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Jane Designer
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary relative group ${
                  scrolled ? 'text-foreground/70' : 'text-white/80'
                }`}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="mailto:jane@janedesigner.com"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
            style={{ background: '#F59E0B', boxShadow: '0 2px 12px rgba(245,158,11,0.35)' }}
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-6 pt-2 shadow-xl">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center py-3 px-2 text-base font-medium text-foreground/80 hover:text-primary rounded-lg hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="mailto:jane@janedesigner.com"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center py-3 px-4 rounded-full text-sm font-semibold text-white w-full transition-all hover:opacity-90"
                style={{ background: '#F59E0B' }}
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
