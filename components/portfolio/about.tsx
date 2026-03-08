import Image from 'next/image'

const stats = [
  { number: '50+', label: 'Startups Launched' },
  { number: '3x', label: 'Average Brand Recognition Increase' },
  { number: '24hr', label: 'Average Response Time' },
]

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjBzdHVkaW98ZW58MHwwfHx8MTc3MzAwODQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jane Designer — creative professional in studio"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay on image */}
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                aria-hidden="true"
              />
            </div>
            {/* Decorative border accent */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl -z-10"
              style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', opacity: 0.15 }}
              aria-hidden="true"
            />
            {/* Floating stats card */}
            <div
              className="absolute -bottom-8 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl px-6 py-5 border border-border"
              aria-hidden="true"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                >
                  JD
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Jane Designer</p>
                  <p className="text-xs text-muted-foreground">Brand &amp; Web Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="flex flex-col gap-8">
            {/* Label */}
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-0.5 rounded-full" style={{ background: '#6366F1' }} aria-hidden="true" />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6366F1' }}>
                About Me
              </span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Transforming Startup Visions Into{' '}
              <span style={{ color: '#6366F1' }}>Market-Ready Brands</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm Jane Designer, a creative professional specializing in brand identity and web design
              for ambitious startups. With a focus on strategic design thinking, I create cohesive brand
              experiences that help emerging companies stand out in competitive markets and connect
              authentically with their target audience.
            </p>

            {/* Stats grid */}
            <dl className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ fontFamily: 'var(--font-heading)', color: '#6366F1' }}
                  >
                    {stat.number}
                  </dd>
                  <dd className="text-xs sm:text-sm text-muted-foreground leading-tight">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
