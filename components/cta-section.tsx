import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--surface-subtle)' }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden p-10 sm:p-14 lg:p-20 text-center"
          style={{ backgroundColor: 'var(--brand-secondary)' }}
        >
          {/* Background decoration */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: 'var(--brand-primary)' }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: 'var(--brand-accent)' }}
            aria-hidden="true"
          />

          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-white/60 mb-8">
              <span
                className="flex h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: 'var(--brand-accent)' }}
                aria-hidden="true"
              />
              Limited spots available
            </div>

            <h2
              id="cta-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-balance mb-6 max-w-3xl mx-auto"
            >
              Ready to Elevate{' '}
              <span style={{ color: 'var(--brand-accent)' }}>Your Brand?</span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
              Let&apos;s discuss how strategic design can accelerate your startup&apos;s
              growth and market presence. Every great brand starts with a single conversation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="mailto:jane@janedesigner.com"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-foreground transition-all duration-200 hover:opacity-90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                style={{ backgroundColor: 'var(--brand-accent)' }}
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                View Portfolio
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-10 text-sm text-white/40">
              No commitment required &mdash; free 30-minute strategy call to get started.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
