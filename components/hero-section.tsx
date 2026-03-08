import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background gradient blobs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
          <Sparkles size={14} aria-hidden="true" />
          Available for new projects
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance">
          Bold Brands That{' '}
          <span className="gradient-text">Disrupt Industries</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
          I transform startup visions into unforgettable brand identities and
          high-converting websites that demand attention.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            View My Work
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            href="mailto:jane@janedesigner.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-base shadow-md hover:bg-amber-400 hover:scale-105 transition-all duration-200"
          >
            Start a Project
          </Link>
        </div>

        {/* Social proof strip */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="text-amber-400">★★★★★</span> 50+ startups
          </span>
          <span className="hidden sm:block w-px h-4 bg-border" aria-hidden="true" />
          <span>$25M+ funding raised by clients</span>
          <span className="hidden sm:block w-px h-4 bg-border" aria-hidden="true" />
          <span>2-week turnarounds</span>
        </div>

        {/* Hero image */}
        <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl mt-6 border border-white/80">
          <Image
            src="https://images.unsplash.com/photo-1717079556888-c23cb91b450f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYm9sZCUyMGNvbG9yZnVsJTIwYnJhbmRpbmclMjBtYXRlcmlhbHN8ZW58MHwwfHx8MTc3MzAxMTM2MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Creative designer workspace with colorful branding materials"
            width={1080}
            height={720}
            priority
            className="w-full object-cover aspect-[16/9]"
          />
          {/* Overlay gradient for readability */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
