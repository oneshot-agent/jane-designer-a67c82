import Link from 'next/link'

const footerLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: 'mailto:jane@janedesigner.com' },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="font-heading text-xl font-bold">
              <span className="text-primary">J</span>ane Designer
            </p>
            <p className="text-sm text-white/50 mt-1">
              Brand Identity &amp; Web Design for Startups
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Jane Designer. All rights reserved.</p>
          <p>Crafted with precision for startup success.</p>
        </div>
      </div>
    </footer>
  )
}
