import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CtaSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ background: 'oklch(0.975 0.01 262)' }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative icon */}
        <div
          className="inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-8 text-white"
          style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
          aria-hidden="true"
        >
          <Sparkles className="w-7 h-7" />
        </div>

        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Ready to Build a Brand That{' '}
          <span style={{ color: '#6366F1' }}>Stands Out?</span>
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          Let's create a compelling brand identity and website that helps your startup achieve its
          growth goals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="mailto:jane@janedesigner.com"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
            style={{
              background: '#F59E0B',
              boxShadow: '0 4px 20px rgba(245,158,11,0.4)',
            }}
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-primary text-primary transition-all duration-200 hover:bg-primary hover:text-white hover:scale-105 active:scale-95"
          >
            View Portfolio
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-8 mt-12 pt-10 border-t border-border">
          {[
            { label: '50+', sub: 'Startups Launched' },
            { label: '5★', sub: 'Average Rating' },
            { label: '24hr', sub: 'Response Time' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: '#6366F1' }}
              >
                {item.label}
              </span>
              <span className="text-xs text-muted-foreground">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
