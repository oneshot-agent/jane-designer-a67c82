import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1758873272540-439a105db676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwbWVldGluZyUyMGRlc2lnbiUyMHN0cmF0ZWd5JTIwc3RhcnR1cHxlbnwwfDB8fHwxNzcyMzI5NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay with brand color tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(99,102,241,0.93) 0%, rgba(139,92,246,0.93) 100%)',
          }}
        />
      </div>

      {/* Geometric decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
          <span
            className="w-2 h-2 rounded-full bg-accent animate-pulse"
            aria-hidden="true"
          />
          Available for New Projects
        </div>

        {/* Heading */}
        <h2
          id="cta-heading"
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight"
        >
          Ready to Build Your Brand?
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          Let&apos;s create a visual identity and website that drives real business results for
          your startup.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="mailto:jane@janedesigner.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold text-base hover:bg-amber-500 transition-all hover:shadow-xl hover:shadow-amber-500/30 active:scale-95"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/15 text-white font-semibold text-base hover:bg-white/25 transition-all backdrop-blur-sm border border-white/30"
          >
            View Portfolio
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/70 text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free Initial Consultation
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Unlimited Revisions
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            On-Time Delivery
          </span>
        </div>
      </div>
    </section>
  )
}
