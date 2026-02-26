import Link from 'next/link'
import { Mail, Twitter, Linkedin, Instagram } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
]

const socialLinks = [
  { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
  { href: 'mailto:jane@janedesigner.com', label: 'Email', icon: Mail },
]

export function Footer() {
  return (
    <footer
      className="py-16 border-t"
      style={{
        background: 'var(--brand-surface)',
        borderColor: 'var(--brand-border)',
      }}
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Link
              href="#home"
              className="font-serif text-2xl font-bold text-gradient-primary"
              aria-label="Jane Designer — home"
            >
              Jane Designer
            </Link>
            <p className="text-sm max-w-xs" style={{ color: 'var(--brand-text-muted)' }}>
              Creative designer specializing in brand identity and web design for startups.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium transition-colors hover:opacity-70"
                    style={{ color: 'var(--brand-text-muted)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: 'var(--brand-border)' }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: 'var(--brand-text-muted)' }}>
            © {new Date().getFullYear()} Jane Designer. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3" role="list" aria-label="Social media links">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                role="listitem"
                className="w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                style={{
                  borderColor: 'var(--brand-border)',
                  color: 'var(--brand-text-muted)',
                }}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
