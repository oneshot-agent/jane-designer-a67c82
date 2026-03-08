import Link from 'next/link'
import { Twitter, Linkedin, Instagram, Dribbble } from 'lucide-react'

const footerLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#features' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: 'mailto:jane@janedesigner.com' },
]

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Dribbble, label: 'Dribbble', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <Link
            href="/"
            className="font-display font-bold text-xl text-white tracking-tight"
          >
            Jane<span className="gradient-text">Designer</span>
          </Link>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6" role="list">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Jane Designer. All rights reserved. · Crafted with bold intent.
        </div>
      </div>
    </footer>
  )
}
