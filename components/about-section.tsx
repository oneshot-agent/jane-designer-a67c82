import Image from "next/image"

const stats = [
  { number: "50+", label: "Startups Launched", color: "#6366F1" },
  { number: "8", label: "Years Experience", color: "#EC4899" },
  { number: "$50M+", label: "Funding Raised by Clients", color: "#06B6D4" },
  { number: "180%", label: "Avg. Conversion Increase", color: "#8B5CF6" },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-background"
      aria-label="About Jane"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — image collage */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/15 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                alt="Jane working on brand design project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Color overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            </div>

            {/* Floating experience card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 shadow-2xl border border-border">
              <p className="text-xs text-muted-foreground mb-1">Happy Clients</p>
              <p className="font-serif text-3xl font-bold text-foreground">50<span className="text-primary">+</span></p>
              <div className="flex -space-x-2 mt-2">
                {["#6366F1", "#EC4899", "#06B6D4", "#8B5CF6"].map((color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-white"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>

            {/* Floating years badge */}
            <div className="absolute -top-4 -left-4 bg-gradient-brand rounded-2xl p-4 shadow-xl text-white text-center">
              <p className="font-serif text-3xl font-bold leading-none">8</p>
              <p className="text-xs font-medium opacity-90 mt-0.5">Years</p>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              About
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance mb-6">
              Meet Jane: Your Brand&apos;s{" "}
              <span className="text-gradient-primary">Secret Weapon</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                I&apos;ve spent <strong className="text-foreground">8 years</strong> turning startup
                dreams into visual realities. From scrappy pre-seed companies to Series A successes,
                I&apos;ve helped 50+ startups build brands that investors notice and customers
                remember.
              </p>
              <p>
                My superpower? I think like a founder, design like an artist, and execute like a
                machine. No fluff, no ego—just{" "}
                <strong className="text-foreground">bold work that moves the needle.</strong>
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ number, label, color }) => (
                <div
                  key={label}
                  className="bg-muted rounded-2xl p-5 hover:shadow-md transition-shadow duration-200"
                >
                  <p
                    className="font-serif text-3xl font-bold mb-1"
                    style={{ color }}
                  >
                    {number}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">{label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="mailto:jane@janedesigner.com"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-white bg-gradient-brand hover:opacity-90 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200"
              >
                Work With Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
