import Link from 'next/link'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: 'mailto:hello@janedesigner.com' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="font-display font-bold text-xl text-white hover:text-[#6366F1] transition-colors"
          >
            Jane<span className="text-[#6366F1]">.</span>
          </Link>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Jane Designer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
