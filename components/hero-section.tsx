import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16"
      aria-label="Hero"
    >
      {/* Geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-48 -left-24 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
        />
        {/* Geometric grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6366F1" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Brand Identity & Web Design</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
              Brands That{' '}
              <span
                className="relative inline-block"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                  backgroundClip: 'text',
                }}
              >
                Connect
              </span>
              ,<br />
              Websites That{' '}
              <span
                className="relative inline-block"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                  backgroundClip: 'text',
                }}
              >
                Convert
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              I help startups build memorable brand identities and high-performing websites that
              drive growth and customer engagement.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-base hover:bg-indigo-600 transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-95"
              >
                View My Work
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="mailto:jane@janedesigner.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-border text-foreground font-semibold text-base hover:border-primary hover:text-primary transition-colors"
              >
                Let&apos;s Talk
              </Link>
            </div>

            {/* Social proof row */}
            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {['SC', 'MR', 'DP'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: ['#6366F1', '#8B5CF6', '#F59E0B'][i],
                      zIndex: 3 - i,
                    }}
                    aria-hidden="true"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-accent fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">50+ startups</strong> launched
                </p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              {/* Decorative border */}
              <div
                className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(99,102,241,0.15)' }}
                aria-hidden="true"
              />
              <Image
                src="https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYnJhbmRpbmclMjBtYXRlcmlhbHMlMjBsYXB0b3AlMjBkZXNpZ258ZW58MHwwfHx8MTc3MjMyOTc0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative designer workspace with branding materials and laptop"
                width={1080}
                height={720}
                priority
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-xl px-4 py-3 shadow-xl border border-border flex items-center gap-3"
              aria-label="8 years of experience"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                aria-hidden="true"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold font-heading text-foreground leading-none">8+</p>
                <p className="text-xs text-muted-foreground mt-0.5">Years Experience</p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 sm:-right-6 bg-accent rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2"
              aria-label="95% client retention rate"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-white">95% Retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
