import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <Sparkles size={14} aria-hidden="true" />
              <span>Brand Identity & Web Design</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance mb-6">
              Bold Brands That{" "}
              <span className="text-gradient-primary">Demand Attention</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              I transform startup visions into unforgettable brand identities and high-converting
              websites that make competitors jealous.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-white bg-gradient-brand hover:opacity-90 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 group"
              >
                See My Work
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="mailto:jane@janedesigner.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-foreground border-2 border-border hover:border-primary hover:text-primary transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>

            {/* Social proof strip */}
            <div className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {["S", "M", "E", "A"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: ["#6366F1", "#EC4899", "#06B6D4", "#8B5CF6"][i],
                    }}
                    aria-hidden="true"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">50+ startups</span> launched &amp;
                growing
              </p>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1717079556888-c23cb91b450f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYm9sZCUyMGNvbG9yZnVsJTIwYnJhbmRpbmclMjBtYXRlcmlhbHN8ZW58MHwwfHx8MTc3MTk2Njg3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative designer workspace with colorful branding materials"
                  width={1080}
                  height={810}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                  ↑
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Avg. conversion lift</p>
                  <p className="text-lg font-bold text-foreground font-serif">+180%</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-2xl px-4 py-2 shadow-lg text-white font-semibold text-sm">
                🏆 Top Rated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
