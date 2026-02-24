import Link from "next/link";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "mailto:jane@janedesigner.com" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-bold hover:opacity-80 transition-opacity"
            aria-label="Jane Designer home"
          >
            Jane<span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #6366F1, #EC4899)" }}>Designer</span>
          </Link>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
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

          {/* Copyright */}
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Jane Designer
          </p>
        </div>
      </div>
    </footer>
  );
}
