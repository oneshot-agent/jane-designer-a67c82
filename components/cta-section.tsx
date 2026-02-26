import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export function CtaSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-hero"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="relative flex flex-col items-center text-center gap-8 p-12 md:p-16 rounded-3xl overflow-hidden"
          style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div
              className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-8"
              style={{ background: 'var(--brand-primary)' }}
            />
            <div
              className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full opacity-8"
              style={{ background: 'var(--brand-secondary)' }}
            />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  'linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          {/* Badge */}
          <div
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
            style={{
              borderColor: 'rgba(245,158,11,0.3)',
              background: 'rgba(245,158,11,0.08)',
              color: 'var(--brand-accent)',
            }}
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Available for New Projects</span>
          </div>

          {/* Headline */}
          <h2
            id="cta-heading"
            className="relative font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
            style={{ color: 'var(--brand-text)' }}
          >
            Ready to Elevate{' '}
            <span className="text-gradient-primary">Your Brand?</span>
          </h2>

          {/* Sub-headline */}
          <p
            className="relative max-w-xl text-lg leading-relaxed"
            style={{ color: 'var(--brand-text-muted)' }}
          >
            Let's discuss how strategic design can accelerate your startup's growth and
            market success.
          </p>

          {/* CTAs */}
          <div className="relative flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="mailto:jane@janedesigner.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: 'var(--brand-accent)', color: '#FFFFFF' }}
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: 'var(--brand-border)',
                color: 'var(--brand-text)',
              }}
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
