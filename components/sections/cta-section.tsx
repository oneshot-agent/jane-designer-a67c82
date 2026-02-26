import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export function CtaSection() {
  return (
    <section
      id="cta"
      className="py-24 md:py-32 bg-[#FEFEFE] overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="relative rounded-3xl bg-[#6366F1] p-12 md:p-20 text-center overflow-hidden">
          {/* Background decorations */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#F59E0B]/10 blur-2xl" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-8">
              Get Started
            </div>

            <h2
              id="cta-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight mb-6 max-w-3xl mx-auto"
            >
              Ready to Transform Your Brand?
            </h2>

            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
              Let&apos;s discuss how strategic design can help your startup stand out
              and drive growth in today&apos;s competitive market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:jane@janedesigner.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#F59E0B] text-white font-semibold text-base shadow-lg shadow-black/20 hover:bg-[#D97706] transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#6366F1]"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Start Your Project
              </a>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6366F1]"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
