import Link from "next/link"

const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "mailto:jane@janedesigner.com" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="font-serif text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
              aria-label="Jane Designer — Home"
            >
              Jane<span className="text-gradient-accent">.</span>
            </Link>
            <p className="text-sm text-white/50 mt-1.5">
              Brand Identity &amp; Web Design for Startups
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6 justify-center" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links / email */}
          <div className="text-center md:text-right">
            <a
              href="mailto:jane@janedesigner.com"
              className="text-sm font-semibold text-accent hover:text-white transition-colors duration-200"
            >
              jane@janedesigner.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Jane Designer. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made with passion &amp; purpose.
          </p>
        </div>
      </div>
    </footer>
  )
}
