import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-hero pt-20 pb-16"
      aria-label="Hero"
    >
      {/* Geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'var(--brand-primary)' }}
        />
        <div
          className="absolute top-1/2 -left-24 w-72 h-72 rounded-full opacity-8"
          style={{ background: 'var(--brand-secondary)' }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-10"
          style={{ background: 'var(--brand-accent)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
          style={{
            borderColor: 'rgba(99,102,241,0.25)',
            background: 'rgba(99,102,241,0.06)',
            color: 'var(--brand-primary)',
          }}
        >
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          <span>Creative Design for Startups</span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance"
          style={{ color: 'var(--brand-text)' }}
        >
          Transform Your{' '}
          <span className="text-gradient-primary">Startup's Brand</span>
          <br />
          Into Success
        </h1>

        {/* Sub-headline */}
        <p
          className="max-w-2xl text-lg md:text-xl leading-relaxed"
          style={{ color: 'var(--brand-text-muted)' }}
        >
          Creative designer crafting compelling brand identities and websites that help
          startups stand out and grow in competitive markets.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: 'var(--brand-accent)',
              color: '#FFFFFF',
            }}
            aria-label="View my work"
          >
            View My Work
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base border transition-all duration-200 hover:-translate-y-0.5"
            style={{
              borderColor: 'var(--brand-border)',
              color: 'var(--brand-text)',
              background: 'var(--brand-surface)',
            }}
          >
            Learn More
          </Link>
        </div>

        {/* Social proof row */}
        <div
          className="flex items-center gap-6 pt-2 flex-wrap justify-center"
          style={{ color: 'var(--brand-text-muted)' }}
        >
          {[
            { value: '50+', label: 'Startups Launched' },
            { value: '95%', label: 'Client Satisfaction' },
            { value: '3x', label: 'Brand Recognition' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-0.5">
              <span
                className="font-serif text-2xl font-bold"
                style={{ color: 'var(--brand-primary)' }}
              >
                {stat.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Hero image */}
        <div className="relative w-full max-w-4xl mt-4 rounded-2xl overflow-hidden glow-primary">
          <div
            className="absolute inset-0 z-10 rounded-2xl"
            style={{
              background:
                'linear-gradient(to bottom, transparent 60%, rgba(250,251,255,0.95) 100%)',
            }}
            aria-hidden="true"
          />
          <Image
            src="https://images.unsplash.com/photo-1455994972514-4624f7f224a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGNyZWF0aXZlJTIwc3R1ZGlvJTIwbW9kZXJufGVufDB8MHx8fDE3NzIxMjg4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Jane Designer's creative workspace — modern design studio environment"
            width={1080}
            height={600}
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
