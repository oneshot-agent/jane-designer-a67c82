import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background geometric decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#EEF2FF] rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FDF2F8] rounded-full blur-3xl opacity-60" />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366F1" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--brand-surface)] border border-[var(--brand-border)] rounded-full px-4 py-2 mb-8 text-sm font-medium text-[var(--brand-primary)]">
            <Sparkles className="w-4 h-4 text-[var(--brand-accent)]" aria-hidden="true" />
            Available for new projects
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--brand-text)] leading-[1.05] tracking-tight text-balance max-w-4xl mb-6">
            Brand Identity That{' '}
            <span className="text-gradient-primary">Converts</span>{' '}
            Customers
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[var(--brand-text-muted)] max-w-2xl leading-relaxed mb-10 text-pretty">
            I help startups build memorable brands and high-converting websites
            that drive growth and establish market presence.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Link
              href="#portfolio"
              className="group inline-flex items-center gap-2 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-brand hover:shadow-brand-lg hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
            <Link
              href="mailto:jane@janedesigner.com"
              className="inline-flex items-center gap-2 text-[var(--brand-text)] font-semibold text-base px-8 py-4 rounded-full border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all duration-200"
            >
              Start a Project
            </Link>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-16">
            {[
              { number: '50+', label: 'Startups' },
              { number: '$25M+', label: 'Funding Raised' },
              { number: '8 yrs', label: 'Experience' },
              { number: '98%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-heading text-2xl font-bold text-[var(--brand-text)]">{stat.number}</span>
                <span className="text-sm text-[var(--brand-text-muted)]">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Hero image */}
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg ring-1 ring-[var(--brand-border)]">
              {/* Gradient overlay on top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" aria-hidden="true" />
              <Image
                src="https://images.unsplash.com/photo-1659141170537-6e0aa70329a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYnJhbmQlMjBpZGVudGl0eSUyMG1vY2t1cHN8ZW58MHwwfHx8MTc3MzAwODM5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative designer workspace with brand identity mockups"
                width={1080}
                height={600}
                className="w-full object-cover aspect-[16/8]"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 sm:left-8 bg-white rounded-2xl shadow-brand-lg px-5 py-4 flex items-center gap-3 border border-[var(--brand-border)]" aria-label="Award badge">
              <span className="text-2xl" role="img" aria-label="trophy">🏆</span>
              <div>
                <p className="font-heading font-bold text-sm text-[var(--brand-text)]">Awwwards Nominee</p>
                <p className="text-xs text-[var(--brand-text-muted)]">Best Portfolio 2024</p>
              </div>
            </div>
            <div className="absolute -bottom-4 right-4 sm:right-8 bg-white rounded-2xl shadow-brand-lg px-5 py-4 border border-[var(--brand-border)]" aria-label="Projects count">
              <p className="font-heading font-bold text-2xl text-[var(--brand-primary)]">50+</p>
              <p className="text-xs text-[var(--brand-text-muted)]">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
