import Image from 'next/image'

const stats = [
  { number: '50+', label: 'Startups Launched' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '3x', label: 'Average Brand Recognition Increase' },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{ background: 'var(--brand-surface)' }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image column */}
          <div className="flex-1 w-full">
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -inset-3 rounded-3xl opacity-20"
                style={{
                  background:
                    'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
                }}
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc3MjEyODgxMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Jane Designer — professional designer in creative workspace"
                  width={1080}
                  height={800}
                  className="w-full object-cover aspect-[4/5]"
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -right-6 flex flex-col items-center justify-center w-28 h-28 rounded-full shadow-xl"
                style={{ background: 'var(--brand-accent)', color: '#FFFFFF' }}
                aria-hidden="true"
              >
                <span className="font-serif text-2xl font-bold leading-none">5+</span>
                <span className="text-xs font-medium text-center leading-tight mt-1">
                  Years of
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: 'var(--brand-primary)' }}
              >
                About Me
              </span>
              <h2
                id="about-heading"
                className="font-serif text-4xl md:text-5xl font-bold leading-tight text-balance"
                style={{ color: 'var(--brand-text)' }}
              >
                Bringing Your{' '}
                <span className="text-gradient-primary">Vision to Life</span>
              </h2>
            </div>

            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--brand-text-muted)' }}
            >
              I'm Jane Designer, a creative professional specializing in brand identity and
              web design for startups. With a passion for transforming ideas into compelling
              visual stories, I help emerging businesses establish their presence and connect
              with their target audience through thoughtful design solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 p-4 rounded-2xl border"
                  style={{
                    borderColor: 'var(--brand-border)',
                    background: 'var(--brand-bg)',
                  }}
                >
                  <span
                    className="font-serif text-3xl font-bold"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    {stat.number}
                  </span>
                  <span
                    className="text-xs font-medium leading-tight"
                    style={{ color: 'var(--brand-text-muted)' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
