import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Geometric background shapes */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Top-left blob */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        {/* Bottom-right blob */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/8 blur-3xl" />
        {/* Center accent */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-subtle opacity-60 blur-2xl" />

        {/* Geometric grid decoration */}
        <div className="absolute top-20 right-10 w-24 h-24 border border-primary/15 rounded-2xl rotate-12" />
        <div className="absolute bottom-32 left-10 w-16 h-16 border border-accent/20 rounded-xl rotate-45" />
        <div className="absolute top-1/2 right-16 w-8 h-8 bg-primary/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for new projects
        </div>

        {/* Headline */}
        <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight tracking-tight text-balance mb-6">
          Brands That{' '}
          <span className="text-gradient-primary">Connect,</span>
          <br className="hidden sm:block" />
          Websites That{' '}
          <span className="text-gradient-primary">Convert</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-balance mb-10">
          Creative designer helping startups build memorable brand identities and
          high-performing websites that drive growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-brand text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-200"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="mailto:jane@janedesigner.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-secondary hover:border-primary/30 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 border border-border/50">
          {/* Floating badge */}
          <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs font-semibold text-foreground">50+ Startups Helped</span>
          </div>
          <div className="absolute bottom-6 right-6 z-10 bg-white/95 backdrop-blur rounded-xl px-4 py-2.5 shadow-lg">
            <p className="text-xs font-semibold text-foreground">98% Satisfaction Rate</p>
            <div className="flex gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-xs">★</span>
              ))}
            </div>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1761818645943-a3689c34ca03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGNyZWF0aXZlJTIwc3R1ZGlvJTIwbW9kZXJufGVufDB8MHx8fDE3NzIxMzM3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional designer workspace with creative tools and digital designs"
            width={1080}
            height={608}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
