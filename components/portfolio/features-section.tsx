import { Target, Zap, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Startup-Focused',
    description:
      'I understand the unique challenges of launching a brand from zero to market leader.',
    color: 'var(--brand-primary)',
    bg: 'var(--primary-light)',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Complete brand identity and website delivered in 2–3 weeks, not months.',
    color: 'var(--brand-secondary)',
    bg: 'var(--secondary-light)',
  },
  {
    icon: TrendingUp,
    title: 'Conversion-Driven',
    description:
      "Designs that don't just look good—they turn visitors into paying customers.",
    color: 'var(--brand-accent)',
    bg: '#ECFFF8',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 lg:py-32"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--brand-primary)' }}
          >
            Why Work With Me
          </p>
          <h2
            id="features-heading"
            className="font-heading font-bold text-4xl sm:text-5xl text-balance"
            style={{ color: 'var(--brand-text)' }}
          >
            Why Startups{' '}
            <span className="gradient-text">Choose Jane</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="card-hover relative flex flex-col gap-5 p-8 rounded-2xl bg-card border border-border"
                role="listitem"
              >
                {/* Icon bubble */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: feature.bg }}
                  aria-hidden="true"
                >
                  <Icon
                    size={24}
                    style={{ color: feature.color }}
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h3
                    className="font-heading font-bold text-xl mb-2"
                    style={{ color: 'var(--brand-text)' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative accent line */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
                  aria-hidden="true"
                />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
