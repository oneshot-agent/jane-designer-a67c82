'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#features' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#cta' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-bold text-xl text-foreground tracking-tight flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          aria-label="Jane Designer - Home"
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: 'var(--brand-primary)' }}
            aria-hidden="true"
          >
            J
          </span>
          <span>Jane Designer</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="mailto:jane@janedesigner.com"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            style={{ backgroundColor: 'var(--brand-accent)' }}
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white/95 backdrop-blur-md border-b border-border px-4 pb-6 pt-2"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-border">
            <Link
              href="mailto:jane@janedesigner.com"
              className="block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: 'var(--brand-accent)' }}
              onClick={() => setIsMobileOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
