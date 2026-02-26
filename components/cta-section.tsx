import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function CtaSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1758873272540-439a105db676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbGxhYm9yYXRpb24lMjBkZXNpZ24lMjBtZWV0aW5nJTIwc3RhcnR1cCUyMHN1Y2Nlc3N8ZW58MHwwfHx8MTc3MjEzNDE1NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt=""
              fill
              className="object-cover"
              aria-hidden="true"
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(99,102,241,0.92) 0%, rgba(139,92,246,0.88) 50%, rgba(236,72,153,0.85) 100%)',
              }}
            />
          </div>

          {/* Background geometric pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden="true" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 lg:py-28">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium mb-8">
              <Mail size={14} aria-hidden="true" />
              <span>Available for New Projects</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-6xl text-white text-balance max-w-3xl leading-tight mb-6">
              Ready to Build Your Brand?
            </h2>

            <p className="text-white/80 text-lg max-w-xl leading-relaxed mb-10 text-pretty">
              Let&apos;s create a visual identity that sets your startup apart and drives
              meaningful growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="mailto:hello@janedesigner.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-white text-[#6366F1] hover:bg-[#F1F5F9] transition-all shadow-xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border-2 border-white/40 hover:border-white/80 hover:bg-white/10 transition-all"
              >
                View Portfolio
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/20">
              {[
                { label: 'Response within 24h' },
                { label: 'Free 30-min consultation' },
                { label: 'Flexible engagement models' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-white/75 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" aria-hidden="true" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
