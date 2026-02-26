import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Soft gradient blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, rgba(236,72,153,0.06) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] text-sm font-medium mb-8 animate-fade-in">
          <Sparkles size={14} />
          <span>Brand Identity & Web Design</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1E293B] text-balance leading-[1.1] tracking-tight max-w-4xl animate-fade-up">
          Brand Identity That{' '}
          <span className="gradient-text-primary">Drives Startup</span>{' '}
          <span className="gradient-text-accent">Success</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-[#1E293B]/60 max-w-2xl leading-relaxed text-pretty animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Strategic design solutions that help emerging businesses build
          memorable brands and convert visitors into customers.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-[#6366F1] text-white hover:bg-[#4f46e5] transition-all shadow-lg shadow-[#6366F1]/30 hover:shadow-[#6366F1]/40 hover:-translate-y-0.5"
          >
            View My Work
            <ArrowRight size={18} />
          </Link>
          <Link
            href="mailto:hello@janedesigner.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-[#1E293B] border border-[#1E293B]/15 hover:border-[#6366F1]/40 hover:text-[#6366F1] transition-all bg-white/60"
          >
            Start a Project
          </Link>
        </div>

        {/* Social proof bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {[
            { value: '150+', label: 'Brands Launched' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '8+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display font-bold text-2xl text-[#6366F1]">{stat.value}</span>
              <span className="text-xs text-[#1E293B]/50 mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Hero image */}
        <div className="mt-16 w-full max-w-5xl relative animate-fade-up" style={{ animationDelay: '0.35s' }}>
          {/* Decorative frame */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#6366F1]/30 via-[#EC4899]/20 to-[#6366F1]/30 blur-sm" aria-hidden="true" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/60">
            <Image
              src="https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGNyZWF0aXZlJTIwc3R1ZGlvJTIwYnJhbmQlMjBkZXNpZ258ZW58MHwwfHx8MTc3MjE0MjUwNnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Professional designer workspace — Jane Designer's creative studio"
              width={1080}
              height={600}
              className="w-full object-cover aspect-[16/8]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
