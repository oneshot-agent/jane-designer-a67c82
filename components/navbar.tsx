'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FEFEFE]/90 backdrop-blur-md border-b border-[#6366F1]/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-xl tracking-tight text-[#1E293B] hover:text-[#6366F1] transition-colors"
        >
          Jane<span className="text-[#6366F1]">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[#1E293B]/70 hover:text-[#6366F1] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="mailto:hello@janedesigner.com"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[#EC4899] text-white hover:bg-[#db2777] transition-colors shadow-sm shadow-[#EC4899]/30"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[#1E293B] hover:bg-[#F1F5F9] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FEFEFE] border-b border-[#6366F1]/10 px-4 pb-5">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-[#1E293B]/70 hover:text-[#6366F1] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="mailto:hello@janedesigner.com"
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[#EC4899] text-white hover:bg-[#db2777] transition-colors"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
