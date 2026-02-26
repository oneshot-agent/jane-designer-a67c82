import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export function CTA() {
  return (
    <section
      id="cta"
      className="py-24 lg:py-32"
      style={{
        background: 'linear-gradient(145deg, oklch(0.964 0.008 264) 0%, #FEFEFE 100%)',
      }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden px-8 md:px-16 py-16 md:py-20 text-center"
          style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}
        >
          {/* Background decoration */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
            />
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <Mail className="w-4 h-4" aria-hidden="true" />
              Let&apos;s Work Together
            </div>

            <h2
              id="cta-heading"
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-balance text-white max-w-3xl"
            >
              Ready to Transform Your Startup&apos;s Brand?
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-white/80 max-w-2xl">
              Let&apos;s discuss how strategic design can accelerate your business growth and
              establish market presence.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Link
                href="mailto:hello@janedesigner.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-accent text-accent-foreground hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>

            <p className="text-white/60 text-sm mt-2">
              Usually responds within 24 hours · Available for new projects
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-heading font-bold text-xl text-foreground">
              <span className="text-primary">Jane</span> Designer
            </p>
            <p className="text-sm text-muted-foreground">
              Brand Identity & Web Design for Startups
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-6 justify-center" role="list">
              {['About', 'Services', 'Portfolio', 'Process', 'Testimonials'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center md:items-end gap-1">
            <Link
              href="mailto:hello@janedesigner.com"
              className="text-sm font-medium text-primary hover:underline"
            >
              hello@janedesigner.com
            </Link>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Jane Designer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
