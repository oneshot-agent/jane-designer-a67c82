import Image from 'next/image'

const stats = [
  { number: '50+', label: 'Startups Launched' },
  { number: '150%', label: 'Average Engagement Increase' },
  { number: '8', label: 'Years Experience' },
  { number: '95%', label: 'Client Retention Rate' },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      style={{ background: '#F8FAFF' }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/15">
              <Image
                src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc3MjMyOTc0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jane Designer — professional designer at her creative workspace"
                width={1080}
                height={1080}
                className="w-full h-auto object-cover aspect-square"
              />
              {/* Accent border overlay */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(99,102,241,0.2)' }}
                aria-hidden="true"
              />
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl -z-10 opacity-50"
              style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}
              aria-hidden="true"
            />
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              About Jane
            </span>
            <h2
              id="about-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
            >
              Designed for Startup Success
            </h2>
            <div
              className="mb-6 h-1 w-16 rounded-full"
              style={{ background: 'linear-gradient(90deg, #6366F1, #8B5CF6)' }}
              aria-hidden="true"
            />
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              With 8+ years of experience in brand design and web development, I specialize in
              helping startups establish strong visual identities that drive business growth.
              I&apos;ve worked with 50+ startups across tech, healthcare, finance, and e-commerce
              sectors, delivering designs that not only look great but perform measurably better.
              My approach combines creative vision with data-driven strategy to ensure every design
              decision supports your business goals.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 transition-colors"
                >
                  <p
                    className="font-heading text-3xl font-bold mb-1"
                    style={{
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundImage: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
