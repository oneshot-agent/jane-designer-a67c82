import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export function CtaSection() {
  return (
    <section
      id="cta"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-dark" aria-hidden="true" />

      {/* Geometric decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white/80 mb-8">
          <span
            className="w-2 h-2 rounded-full bg-accent animate-pulse"
            aria-hidden="true"
          />
          Available for new projects
        </div>

        {/* Headline */}
        <h2
          id="cta-heading"
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight text-balance mb-6"
        >
          Ready to Build a Brand{' '}
          <span className="gradient-text-accent">That Stands Out?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12 text-balance">
          Let&apos;s create a bold identity that makes your startup impossible to ignore.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:jane@janedesigner.com"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-bold text-base px-10 py-5 rounded-full hover:bg-amber-400 transition-all duration-200 shadow-2xl hover:shadow-accent/40 hover:-translate-y-0.5 group"
          >
            <Mail size={20} aria-hidden="true" />
            Start Your Project
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>

          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold text-base px-10 py-5 rounded-full hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
          >
            View Portfolio
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {[
            { num: '200+', label: 'Happy Clients' },
            { num: '6yr', label: 'Experience' },
            { num: '2-3wk', label: 'Turnaround' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-display font-bold text-3xl text-white mb-1">{item.num}</div>
              <div className="text-sm text-white/50">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
