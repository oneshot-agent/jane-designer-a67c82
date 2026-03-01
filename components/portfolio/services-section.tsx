import { Palette, Monitor, Package, Check } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description:
      'Logo, color palette, typography, and brand guidelines that make you unforgettable.',
    features: ['Logo Design', 'Brand Guidelines', 'Color & Typography', 'Business Cards'],
    highlight: false,
    accentColor: 'var(--brand-primary)',
    bgColor: 'var(--primary-light)',
    tag: 'Most Popular',
    showTag: false,
  },
  {
    icon: Package,
    title: 'Complete Launch',
    description:
      'Full brand and web package to take you from startup to standout in weeks.',
    features: ['Brand + Web Bundle', '2–3 Week Delivery', 'Unlimited Revisions', 'Launch Support'],
    highlight: true,
    accentColor: 'var(--brand-text)',
    bgColor: 'rgba(255,255,255,0.15)',
    tag: 'Best Value',
    showTag: true,
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description:
      'High-converting websites that turn visitors into customers and investors into believers.',
    features: ['Landing Pages', 'Full Websites', 'Mobile Optimization', 'Conversion Focus'],
    highlight: false,
    accentColor: 'var(--brand-secondary)',
    bgColor: 'var(--secondary-light)',
    tag: '',
    showTag: false,
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--surface-elevated)' }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--brand-primary)' }}
          >
            What I Offer
          </p>
          <h2
            id="services-heading"
            className="font-heading font-bold text-4xl sm:text-5xl text-balance"
            style={{ color: 'var(--brand-text)' }}
          >
            Services That{' '}
            <span className="gradient-text">Scale Your Startup</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                  service.highlight
                    ? 'shadow-2xl scale-[1.02] md:scale-105'
                    : 'card-hover bg-card border border-border'
                }`}
                style={
                  service.highlight
                    ? {
                        background:
                          'linear-gradient(145deg, var(--brand-primary) 0%, #8B5CF6 50%, var(--brand-secondary) 100%)',
                        color: '#fff',
                      }
                    : {}
                }
              >
                {/* Best Value tag */}
                {service.showTag && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: 'var(--brand-accent)',
                      color: 'var(--brand-text)',
                    }}
                  >
                    {service.tag}
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: service.highlight ? 'rgba(255,255,255,0.2)' : service.bgColor,
                  }}
                  aria-hidden="true"
                >
                  <Icon
                    size={24}
                    strokeWidth={2}
                    style={{ color: service.highlight ? '#fff' : service.accentColor }}
                  />
                </div>

                {/* Text */}
                <h3
                  className="font-heading font-bold text-2xl mb-3"
                  style={{ color: service.highlight ? '#fff' : 'var(--brand-text)' }}
                >
                  {service.title}
                </h3>
                <p
                  className="leading-relaxed mb-6 flex-grow"
                  style={{ color: service.highlight ? 'rgba(255,255,255,0.85)' : 'var(--muted-foreground)' }}
                >
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="flex flex-col gap-2.5 mb-8" role="list">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: service.highlight ? 'rgba(255,255,255,0.2)' : 'var(--primary-light)',
                        }}
                        aria-hidden="true"
                      >
                        <Check
                          size={11}
                          style={{ color: service.highlight ? '#fff' : 'var(--brand-primary)' }}
                          strokeWidth={3}
                        />
                      </div>
                      <span style={{ color: service.highlight ? 'rgba(255,255,255,0.9)' : 'var(--brand-text)' }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="mailto:jane@janedesigner.com"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={
                    service.highlight
                      ? {
                          backgroundColor: 'var(--brand-accent)',
                          color: 'var(--brand-text)',
                        }
                      : {
                          backgroundColor: 'var(--primary-light)',
                          color: 'var(--brand-primary)',
                        }
                  }
                  aria-label={`Get started with ${service.title}`}
                >
                  Get Started
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
