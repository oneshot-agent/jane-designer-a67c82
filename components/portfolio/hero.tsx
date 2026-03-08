import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1659141170537-6e0aa70329a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYnJhbmQlMjBpZGVudGl0eSUyMG1vY2t1cHN8ZW58MHwwfHx8MTc3MzAwODM5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Deep gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(99,102,241,0.93) 0%, rgba(139,92,246,0.88) 50%, rgba(30,41,59,0.85) 100%)',
          }}
        />
        {/* Subtle geometric shapes */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: '#F59E0B' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: '#ffffff' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 md:py-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium mb-8">
          <div className="flex gap-0.5" aria-label="5 star rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
            ))}
          </div>
          <span>50+ Startups Launched</span>
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Brands That{' '}
          <span className="relative inline-block">
            <span
              className="relative z-10"
              style={{ color: '#F59E0B' }}
            >
              Connect
            </span>
          </span>
          ,<br className="hidden sm:block" /> Websites That{' '}
          <span style={{ color: '#F59E0B' }}>Convert</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed text-pretty mb-10">
          I help startups build memorable brand identities and high-performing websites that drive
          growth and customer engagement.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#portfolio"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-95"
            style={{
              background: '#F59E0B',
              boxShadow: '0 4px 20px rgba(245,158,11,0.45)',
            }}
          >
            View My Work
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base border border-white/40 backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:scale-105 active:scale-95"
          >
            About Me
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs tracking-widest uppercase"
          aria-hidden="true"
        >
          <span>Scroll</span>
          <div className="w-px h-10 bg-white/30 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
