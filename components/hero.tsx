import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      aria-label="Hero"
    >
      {/* Gradient blobs — decorative, aria-hidden */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-10"
          style={{
            background:
              'radial-gradient(circle, #6366F1 0%, #8B5CF6 50%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-8"
          style={{
            background:
              'radial-gradient(circle, #8B5CF6 0%, #6366F1 50%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 lg:py-40">
          {/* Text content */}
          <div className="flex flex-col items-start gap-6">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Available for new projects</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-balance text-foreground">
              Brand Identity That{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                }}
              >
                Drives Startup
              </span>{' '}
              Success
            </h1>

            <p className="font-sans text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-lg">
              Creative designer helping startups build memorable brands and convert-focused
              websites that accelerate growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', color: '#fff' }}
              >
                View My Work
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base border border-border text-foreground hover:bg-muted transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 pt-4 border-t border-border w-full">
              {[
                { number: '50+', label: 'Startups' },
                { number: '5 yrs', label: 'Experience' },
                { number: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-heading font-bold text-2xl text-foreground">
                    {stat.number}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Decorative ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl scale-105 opacity-20"
                style={{
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B)',
                }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1761818645943-a3689c34ca03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMG1vZGVybiUyMGNyZWF0aXZlJTIwc3R1ZGlvfGVufDB8MHx8fDE3NzIxNDI1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Jane Designer working in a modern creative studio"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 lg:-left-8 bg-background border border-border rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3"
                aria-hidden="true"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: 'linear-gradient(135deg, #F59E0B, #F59E0B)' }}
                >
                  ★
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">Top Rated</p>
                  <p className="text-xs text-muted-foreground">5.0 on Dribbble</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
