import Image from 'next/image'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient blobs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--brand-primary) 0%, var(--brand-secondary) 60%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--brand-accent) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center gap-8 py-20 lg:py-28">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium animate-fade-in"
            style={{
              borderColor: 'var(--brand-primary)',
              color: 'var(--brand-primary)',
              backgroundColor: 'var(--primary-light)',
            }}
          >
            <Sparkles size={14} aria-hidden="true" />
            <span>Brand Identity &amp; Web Design for Startups</span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight text-balance animate-fade-in-up"
            style={{ color: 'var(--brand-text)' }}
          >
            Bold Brands That{' '}
            <span className="gradient-text block sm:inline">
              Demand Attention
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground animate-fade-in-up animate-delay-100"
          >
            I transform startup visions into unforgettable brand identities and websites
            that convert customers from day one.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up animate-delay-200">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: 'var(--brand-accent)',
                color: 'var(--brand-text)',
                boxShadow: '0 4px 24px rgba(6, 255, 165, 0.35)',
              }}
              aria-label="View My Work — jump to portfolio section"
            >
              View My Work
            </a>
            <a
              href="mailto:jane@janedesigner.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 transition-all duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                borderColor: 'var(--brand-primary)',
                color: 'var(--brand-primary)',
              }}
            >
              Start a Project
            </a>
          </div>

          {/* Hero image */}
          <div className="w-full max-w-5xl mt-8 animate-fade-in-up animate-delay-300">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                boxShadow:
                  '0 32px 80px -12px rgba(99, 102, 241, 0.25), 0 0 0 1px rgba(99, 102, 241, 0.08)',
              }}
            >
              {/* Decorative frame */}
              <div
                className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 60%, rgba(250, 251, 255, 0.9) 100%)',
                }}
                aria-hidden="true"
              />
              <Image
                src="https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYm9sZCUyMGJyYW5kaW5nJTIwbWF0ZXJpYWxzfGVufDB8MHx8fDE3NzIzMzAzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative designer workspace with bold branding materials"
                width={1080}
                height={600}
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
                priority
              />
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#features"
            className="mt-4 flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors animate-float"
            aria-label="Scroll to next section"
          >
            <span>Scroll to explore</span>
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
