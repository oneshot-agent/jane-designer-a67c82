import Link from 'next/link'
import { Linkedin, Twitter, Instagram, Dribbble } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#features' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
]

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Dribbble, href: '#', label: 'Dribbble' },
]

export default function Footer() {
  return (
    <footer
      className="bg-white border-t border-border"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-heading font-bold text-xl text-foreground mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              aria-label="Jane Designer - Home"
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: 'var(--brand-primary)' }}
                aria-hidden="true"
              >
                J
              </span>
              Jane Designer
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Creative designer specializing in brand identity and web design for ambitious
              startups ready to scale.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <a
              href="mailto:jane@janedesigner.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm block mb-2"
            >
              jane@janedesigner.com
            </a>
            <p className="text-sm text-muted-foreground">
              Available for new projects
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground order-2 sm:order-1">
            &copy; {new Date().getFullYear()} Jane Designer. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3 order-1 sm:order-2" aria-label="Social media links">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
