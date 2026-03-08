import Image from 'next/image'

const stats = [
  { number: '50+', label: 'Startups Designed' },
  { number: '$25M+', label: 'Client Funding Raised' },
  { number: '8', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[var(--brand-surface)]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <span className="inline-block text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-widest mb-3">
              About
            </span>
            <h2
              id="about-heading"
              className="font-heading text-4xl lg:text-5xl font-bold text-[var(--brand-text)] tracking-tight text-balance mb-6"
            >
              Designed{' '}
              <span className="text-gradient-primary">50+ Successful</span>{' '}
              Startup Brands
            </h2>
            <div className="space-y-4 mb-10">
              <p className="text-[var(--brand-text-muted)] leading-relaxed">
                With 8 years of experience in brand identity and web design, I specialize in helping
                startups establish strong market presence through strategic design. My work has
                contributed to over $25M in funding raised by client companies.
              </p>
              <p className="text-[var(--brand-text-muted)] leading-relaxed">
                I combine creative expertise with business acumen, ensuring every design decision
                supports your growth objectives. From early-stage MVPs to scaling companies, I create
                brands that evolve with your success.
              </p>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-[var(--brand-border)] rounded-full px-5 py-3 shadow-sm">
              <span className="relative flex h-3 w-3" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22C55E]" />
              </span>
              <span className="text-sm font-medium text-[var(--brand-text)]">
                Currently available for new projects
              </span>
            </div>
          </div>

          {/* Right: image + stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc3MzAwODM5NHww&ixlib=rb-4.1.0&q=80&w=800"
                alt="Jane Designer at work in her creative workspace"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-heading text-2xl font-bold text-[var(--brand-primary)]">
                        {stat.number}
                      </p>
                      <p className="text-xs text-[var(--brand-text-muted)] mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
