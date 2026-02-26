import Link from 'next/link'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
]

export function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#FEFEFE]/80 backdrop-blur-md border-b border-[#6366F1]/10"
      role="banner"
    >
      <nav
        className="container mx-auto px-6 md:px-8 lg:px-12 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#hero"
          className="font-serif font-bold text-xl text-[#1E293B] hover:text-[#6366F1] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded"
          aria-label="Jane Designer - Go to homepage"
        >
          Jane<span className="text-[#6366F1]">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-[#6366F1] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:jane@janedesigner.com"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-lg bg-[#F59E0B] text-white font-semibold text-sm hover:bg-[#D97706] transition-all duration-200 shadow-md shadow-[#F59E0B]/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile menu placeholder — accessible disclosure */}
        <button
          className="md:hidden inline-flex flex-col gap-1.5 p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
          aria-label="Toggle mobile menu"
          aria-expanded="false"
        >
          <span className="w-5 h-0.5 bg-[#1E293B] rounded-full" />
          <span className="w-5 h-0.5 bg-[#1E293B] rounded-full" />
          <span className="w-3 h-0.5 bg-[#1E293B] rounded-full" />
        </button>
      </nav>
    </header>
  )
}
