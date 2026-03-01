import Link from 'next/link'
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react'

const footerLinks = {
  Work: [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  Services: [
    { label: 'Brand Identity', href: '#services' },
    { label: 'Web Design', href: '#services' },
    { label: 'Brand Packages', href: '#services' },
  ],
  Contact: [
    { label: 'jane@janedesigner.com', href: 'mailto:jane@janedesigner.com' },
    { label: 'Book a Call', href: 'mailto:jane@janedesigner.com' },
  ],
}

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:jane@janedesigner.com' },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl tracking-tight">
              <span className="gradient-text-primary">Jane</span> Designer
            </Link>
            <p className="mt-4 text-white/50 leading-relaxed max-w-xs">
              Creative designer specializing in brand identity and web design for startups.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-200"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Nav links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">
                {group}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200 animated-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Jane Designer. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Designed with{' '}
            <span className="text-secondary" aria-label="love">
              ♥
            </span>{' '}
            for ambitious startups
          </p>
        </div>
      </div>
    </footer>
  )
}
