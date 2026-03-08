import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 lg:px-8 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/90 via-[#6366F1]/80 to-[#EC4899]/85" />
      </div>

      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{ background: '#F59E0B' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: '#EC4899' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center space-y-8">
        {/* Badge */}
        <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold border border-white/30 backdrop-blur-sm">
          Limited spots available
        </span>

        {/* Headline */}
        <h2
          id="cta-heading"
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight text-balance"
        >
          Ready to Disrupt{' '}
          <span className="text-accent">Your Industry?</span>
        </h2>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-white/85 text-lg sm:text-xl leading-relaxed text-pretty">
          Let's create a bold brand identity that gets your startup noticed,
          funded, and scaling fast.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="mailto:jane@janedesigner.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold text-base shadow-xl hover:bg-amber-300 hover:scale-105 transition-all duration-200"
          >
            Start Your Project
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/15 text-white font-semibold text-base border border-white/30 backdrop-blur-sm hover:bg-white/25 hover:scale-105 transition-all duration-200"
          >
            View Portfolio
            <ExternalLink size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Trust line */}
        <p className="text-white/60 text-sm">
          No commitment required · Response within 24 hours · Free discovery call
        </p>
      </div>
    </section>
  )
}
