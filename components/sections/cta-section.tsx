import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="py-24 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand px-8 py-20 lg:px-20 lg:py-24 text-center shadow-brand-lg">
          {/* Geometric decorations */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            {/* Grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 text-sm font-medium text-white">
              <Mail className="w-4 h-4" aria-hidden="true" />
              Available for projects starting Q2 2025
            </div>

            <h2
              id="cta-heading"
              className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight text-balance mb-6"
            >
              Ready to Build Your Startup's Brand?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10 text-pretty">
              Let's create a brand identity and website that drives growth and attracts investors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="mailto:jane@janedesigner.com"
                className="group inline-flex items-center gap-2 bg-white text-[var(--brand-primary)] font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/30 hover:border-white/60 transition-all duration-200"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
