import { Dribbble, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = [
  { label: 'Services', href: '#features' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
]

const socialLinks = [
  { icon: Dribbble, label: 'Dribbble', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:jane@janedesigner.com' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white text-sm font-bold">
              JD
            </span>
            <span className="font-serif font-bold text-foreground">Jane Designer</span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
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

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-white flex items-center justify-center text-muted-foreground transition-all duration-200"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Jane Designer. All rights reserved.{' '}
            <span className="mx-2 text-border">|</span>
            Crafted with care for startup founders.
          </p>
        </div>
      </div>
    </footer>
  )
}
