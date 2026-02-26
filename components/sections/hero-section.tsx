import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      aria-label="Hero"
    >
      {/* Geometric background accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Top-right blob */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#6366F1]/8 blur-3xl" />
        {/* Bottom-left blob */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#E0E7FF]/60 blur-3xl" />
        {/* Accent dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #6366F1 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 py-28 md:py-36 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0E7FF] text-[#6366F1] text-sm font-medium mb-8 ring-1 ring-[#6366F1]/20">
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          <span>Brand Identity &amp; Web Design for Startups</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E293B] text-balance leading-[1.1] tracking-tight mb-6 max-w-4xl">
          Transform Your{' '}
          <span className="text-[#6366F1]">Startup&apos;s</span>{' '}
          Brand Identity
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 text-pretty">
          Creative designer helping startups build memorable brands and
          convert-focused websites that drive growth and customer trust.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F59E0B] text-white font-semibold text-base shadow-lg shadow-[#F59E0B]/30 hover:bg-[#D97706] hover:shadow-[#D97706]/30 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2"
          >
            View My Work
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#6366F1] text-[#6366F1] font-semibold text-base hover:bg-[#6366F1] hover:text-white transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2"
          >
            About Me
          </Link>
        </div>

        {/* Hero image */}
        <div className="relative mt-16 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#6366F1]/10">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/20 to-transparent z-10 pointer-events-none rounded-2xl" />
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
            alt="Creative design workspace with modern branding materials"
            width={1200}
            height={800}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Social proof strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          {[
            { number: '50+', label: 'Startups Launched' },
            { number: '5 Years', label: 'Experience' },
            { number: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="font-bold text-[#6366F1] text-base">{stat.number}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
