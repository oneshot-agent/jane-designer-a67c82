import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react'

const footerLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#stats' },
  { label: 'Contact', href: 'mailto:jane@janedesigner.com' },
]

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Mail, label: 'Email', href: 'mailto:jane@janedesigner.com' },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-border py-12"
      role="contentinfo"
      style={{ backgroundColor: 'var(--brand-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <a
              href="/"
              className="font-heading font-bold text-2xl text-foreground"
              aria-label="Jane Designer — Home"
            >
              Jane<span style={{ color: 'var(--brand-primary)' }}>.</span>
            </a>
            <p className="text-muted-foreground text-sm">
              Bold brands for bold startups.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6" role="list">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-200"
                aria-label={label}
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Jane Designer. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Available for freelance &amp; contract work.
          </p>
        </div>
      </div>
    </footer>
  )
}
