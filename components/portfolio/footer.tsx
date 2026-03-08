import Link from 'next/link'
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
]

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:jane@janedesigner.com' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
]

export function Footer() {
  return (
    <footer
      className="bg-foreground text-white py-16"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                aria-hidden="true"
              >
                JD
              </div>
              <span className="font-semibold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                Jane Designer
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Creative designer specializing in brand identity and web design for ambitious startups.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Get in Touch
            </h3>
            <p className="text-sm text-white/60 mb-4">Ready to start your project?</p>
            <Link
              href="mailto:jane@janedesigner.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: '#F59E0B' }}
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              jane@janedesigner.com
            </Link>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>{`© ${new Date().getFullYear()} Jane Designer. All rights reserved.`}</p>
          <p>Designed with care for ambitious startups.</p>
        </div>
      </div>
    </footer>
  )
}
