import Image from 'next/image'

const stats = [
  { number: '200+', label: 'Startups Launched', color: 'text-primary' },
  { number: '6', label: 'Years Experience', color: 'text-secondary' },
  { number: '340%', label: 'Avg. Conversion Increase', color: 'text-accent' },
  { number: '2-3', label: 'Week Delivery', color: 'text-primary' },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-background overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            {/* Background decoration */}
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10"
              aria-hidden="true"
            />

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc3MjMyOTc0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jane Designer in her creative workspace"
                width={540}
                height={660}
                className="w-full object-cover aspect-[4/5]"
              />
            </div>

            {/* Floating experience card */}
            <div
              className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl shadow-xl px-6 py-5 max-w-[200px]"
              aria-hidden="true"
            >
              <div className="font-display font-bold text-4xl text-primary mb-1">200+</div>
              <div className="text-sm text-muted-foreground font-medium leading-tight">
                Startups launched successfully
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
              <span className="geo-dot" aria-hidden="true" />
              About Jane
            </div>

            <h2
              id="about-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance mb-6"
            >
              The Designer Behind{' '}
              <span className="gradient-text-primary">Bold Brands</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I&apos;m Jane, and I believe every startup deserves a brand as ambitious as their
              vision. Over 6 years, I&apos;ve helped 200+ startups transform from unknown entities
              to recognized brands that customers trust and investors notice.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              My approach is simple: understand your business goals, then design with purpose. No
              fluff, no endless revisions—just bold, strategic design that drives results.
            </p>

            {/* Stats grid */}
            <dl className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-2xl px-6 py-5 hover:border-primary/30 transition-colors duration-200"
                >
                  <dt className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</dt>
                  <dd className={`font-display font-bold text-3xl ${stat.color}`}>
                    {stat.number}
                  </dd>
                </div>
              ))}
            </dl>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:jane@janedesigner.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Work With Me
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-transparent text-foreground font-semibold text-sm px-6 py-3.5 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-200"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
