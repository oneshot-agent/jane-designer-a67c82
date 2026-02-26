import Link from 'next/link'
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react'

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
]

const socialLinks = [
  { href: 'https://twitter.com', label: 'Twitter', Icon: Twitter },
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://instagram.com', label: 'Instagram', Icon: Instagram },
]

export function Footer() {
  return (
    <footer
      className="bg-[#1E293B] text-white py-16"
      role="contentinfo"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="#hero"
              className="font-serif font-bold text-2xl text-white hover:text-[#A5B4FC] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded"
            >
              Jane<span className="text-[#6366F1]">.</span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              Creative designer helping startups build memorable brands and
              convert-focused websites.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Follow on ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 hover:bg-[#6366F1] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif font-semibold text-sm uppercase tracking-wider text-slate-400 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-sm uppercase tracking-wider text-slate-400 mb-6">
              Get in Touch
            </h3>
            <a
              href="mailto:jane@janedesigner.com"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              jane@janedesigner.com
            </a>
            <a
              href="mailto:jane@janedesigner.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F59E0B] text-white font-semibold text-sm hover:bg-[#D97706] transition-all duration-200 shadow-lg shadow-[#F59E0B]/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E293B]"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Jane Designer. All rights reserved.
          </p>
          <p>Crafted with care for startups everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
