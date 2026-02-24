import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: 'var(--brand-primary)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: 'var(--brand-accent)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium mb-8 animate-fade-in">
            <span
              className="flex h-2 w-2 rounded-full"
              style={{ backgroundColor: 'var(--brand-primary)' }}
              aria-hidden="true"
            />
            <span style={{ color: 'var(--brand-primary)' }}>Available for new projects</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6 text-foreground">
            Brand Identity That{' '}
            <span className="text-gradient">Drives Startup</span>{' '}
            Success
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Creative designer crafting memorable brand experiences and
            conversion-focused websites for ambitious startups ready to scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#portfolio"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:opacity-90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              style={{ backgroundColor: 'var(--brand-accent)' }}
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border border-border bg-white hover:bg-muted transition-all duration-200 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Learn More
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="flex" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: 'var(--brand-accent)' }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span>98% client satisfaction</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="font-bold text-base"
                style={{ color: 'var(--brand-primary)' }}
              >
                50+
              </span>
              <span>startups helped</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="font-bold text-base"
                style={{ color: 'var(--brand-primary)' }}
              >
                $2M+
              </span>
              <span>in funding raised</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 lg:mt-20 relative max-w-5xl mx-auto">
          <div
            className="absolute -inset-1 rounded-2xl opacity-30 blur-xl"
            style={{ background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))' }}
            aria-hidden="true"
          />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50">
            <Image
              src="https://images.unsplash.com/photo-1761818645943-a3689c34ca03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGNyZWF0aXZlJTIwc3R1ZGlvJTIwbW9kZXJufGVufDB8MHx8fDE3NzE5MTE2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Professional designer workspace with creative studio setup"
              width={1080}
              height={600}
              className="w-full object-cover"
              priority
            />
            {/* Overlay cards */}
            <div
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-border flex items-center gap-3"
              aria-hidden="true"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: 'var(--brand-primary)' }}
              >
                TF
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">TechFlow Rebrand</p>
                <p className="text-xs text-muted-foreground">Series A — $2M raised</p>
              </div>
            </div>
            <div
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-border"
              aria-hidden="true"
            >
              <p className="text-xs font-semibold text-foreground mb-1">Conversion Lift</p>
              <p
                className="text-xl font-bold font-heading"
                style={{ color: 'var(--brand-accent)' }}
              >
                +65%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
