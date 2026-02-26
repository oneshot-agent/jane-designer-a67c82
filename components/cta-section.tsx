import Image from 'next/image'
import { ArrowRight, Mail } from 'lucide-react'

export default function CtaSection() {
  return (
    <section
      className="section-pad bg-background"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-foreground shadow-2xl shadow-foreground/20">
          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb2xsYWJvcmF0aW9uJTIwbWVldGluZyUyMHN0YXJ0dXAlMjBkZXNpZ24lMjBjb25zdWx0YXRpb258ZW58MHwwfHx8MTc3MjE0MTk5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional collaboration meeting for startup design consultation"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/80 via-foreground/80 to-accent/60"
            aria-hidden="true"
          />

          {/* Geometric decorations */}
          <div className="absolute top-8 right-8 w-32 h-32 border border-white/10 rounded-3xl rotate-12" aria-hidden="true" />
          <div className="absolute bottom-8 left-8 w-20 h-20 border border-white/10 rounded-2xl -rotate-6" aria-hidden="true" />
          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-accent/40" aria-hidden="true" />

          {/* Content */}
          <div className="relative z-10 py-20 px-8 md:px-16 lg:px-24 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Let&apos;s Work Together
            </div>

            <h2
              id="cta-heading"
              className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight text-balance mb-6 max-w-3xl mx-auto"
            >
              Ready to Build{' '}
              <span className="text-accent">Your Brand?</span>
            </h2>

            <p className="max-w-xl mx-auto text-white/75 text-base md:text-lg leading-relaxed mb-10 text-balance">
              Let&apos;s create a design strategy that sets your startup up for success.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:jane@janedesigner.com"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/30 hover:bg-accent/90 hover:shadow-accent/40 hover:scale-[1.02] transition-all duration-200"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/25 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-200 backdrop-blur"
              >
                View Portfolio
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '98%', label: 'Satisfaction Rate' },
                { value: '5★', label: 'Average Rating' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-serif font-bold text-2xl text-white">{item.value}</p>
                  <p className="text-white/60 text-xs mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
