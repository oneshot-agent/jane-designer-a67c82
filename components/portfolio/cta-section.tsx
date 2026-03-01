import Image from 'next/image'
import { ArrowRight, Eye } from 'lucide-react'

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src="https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxib2xkJTIwY3JlYXRpdmUlMjBkZXNpZ24lMjBzdHVkaW8lMjBjYWxsJTIwdG8lMjBhY3Rpb258ZW58MHwwfHx8MTc3MjMzMDMyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt=""
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(99,102,241,0.92) 0%, rgba(139,92,246,0.88) 50%, rgba(236,72,153,0.92) 100%)',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-8 py-20 lg:py-28 px-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: '#fff',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: 'var(--brand-accent)' }}
                aria-hidden="true"
              />
              Available for new projects
            </div>

            <h2
              id="cta-heading"
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white text-balance max-w-3xl"
            >
              Ready to Make{' '}
              <span style={{ color: 'var(--brand-accent)' }}>Your Mark?</span>
            </h2>

            <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl">
              Let&apos;s create a brand that&apos;s impossible to ignore and a website that converts
              from day one.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="mailto:jane@janedesigner.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: 'var(--brand-accent)',
                  color: 'var(--brand-text)',
                  boxShadow: '0 4px 24px rgba(6, 255, 165, 0.4)',
                }}
                aria-label="Start Your Project — send an email to Jane"
              >
                Start Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-white/30 text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="View More Work — jump to portfolio section"
              >
                <Eye size={18} aria-hidden="true" />
                View More Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
