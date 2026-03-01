import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-20"
      aria-label="Hero section"
    >
      {/* Geometric background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl" />
        {/* Geometric grid lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6366F1" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col items-center text-center gap-10 lg:gap-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-indigo-100 shadow-sm px-4 py-2 rounded-full text-sm font-medium text-primary animate-fade-in">
            <Sparkles size={14} className="text-accent" aria-hidden="true" />
            <span>Brand Identity + Web Design for Startups</span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-balance">
              <span className="text-foreground">Bold Brands</span>{' '}
              <span className="gradient-text-primary block sm:inline">That Demand</span>{' '}
              <span className="text-foreground">Attention</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance">
            I transform startup visions into powerful brand identities and websites that convert
            visitors into customers.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-base px-8 py-4 rounded-full hover:bg-indigo-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              View My Work
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 bg-white text-foreground font-semibold text-base px-8 py-4 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md"
            >
              See Services
            </Link>
          </div>

          {/* Hero image */}
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 mt-4">
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/60 to-transparent z-10 pointer-events-none" />
            <Image
              src="https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYm9sZCUyMGJyYW5kaW5nJTIwbWF0ZXJpYWxzfGVufDB8MHx8fDE3NzIzMzAzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Creative designer workspace with bold branding materials"
              width={1080}
              height={600}
              className="w-full object-cover aspect-[16/9]"
              priority
            />

            {/* Floating stats card */}
            <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-5 py-4 border border-border flex items-center gap-4">
              <div className="text-center">
                <div className="font-display font-bold text-2xl text-primary">200+</div>
                <div className="text-xs text-muted-foreground font-medium">Startups</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="font-display font-bold text-2xl text-secondary">340%</div>
                <div className="text-xs text-muted-foreground font-medium">Avg Growth</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="font-display font-bold text-2xl text-accent">6yr</div>
                <div className="text-xs text-muted-foreground font-medium">Experience</div>
              </div>
            </div>
          </div>

          {/* Trusted by logos row */}
          <div className="flex flex-col items-center gap-4 mt-2">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
              Trusted by innovative startups
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
              {['TechFlow', 'GreenStart', 'FinanceForward', 'LocalEats', 'DataFlow'].map(
                (brand) => (
                  <span
                    key={brand}
                    className="font-display font-bold text-sm text-foreground uppercase tracking-widest"
                  >
                    {brand}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
