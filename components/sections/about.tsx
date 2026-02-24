import Image from "next/image";

const stats = [
  { number: "50+", label: "Startups Launched" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "3x", label: "Average Brand Recognition Increase" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-secondary/40"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-primary/20"
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-100">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                alt="Jane Designer working on a brand identity project"
                width={600}
                height={400}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-6 left-6 right-6 backdrop-blur-sm bg-white/90 border border-border/50 rounded-xl p-4 flex items-center gap-4 shadow-lg"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl font-bold font-serif"
                  style={{ background: "linear-gradient(135deg, #6366F1, #EC4899)" }}
                  aria-hidden="true"
                >
                  J
                </div>
                <div>
                  <p className="font-semibold text-foreground font-serif text-sm">Jane Designer</p>
                  <p className="text-xs text-muted-foreground">Brand Identity & Web Design</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <span className="text-yellow-400 text-sm" aria-hidden="true">★★★★★</span>
                  <span className="text-xs text-muted-foreground sr-only">5 star rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase gradient-text-subtle mb-4">
                About Me
              </p>
              <h2
                id="about-heading"
                className="font-serif text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance"
              >
                Transforming Startup Visions Into{" "}
                <span className="gradient-text">Powerful Brands</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg text-pretty">
              With over 5 years of experience in brand identity and web design,
              I help startups create cohesive visual identities that resonate
              with their target audience. My approach combines strategic thinking
              with creative execution to deliver designs that not only look
              exceptional but also drive business results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-border/60 shadow-sm"
                >
                  <span
                    className="font-serif text-3xl font-bold gradient-text"
                    aria-label={`${stat.number} ${stat.label}`}
                  >
                    {stat.number}
                  </span>
                  <span className="text-xs text-muted-foreground leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
