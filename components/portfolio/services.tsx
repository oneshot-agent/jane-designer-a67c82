import { Palette, Monitor, Rocket, Check } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description:
      'Complete brand packages including logo design, color palettes, typography, and brand guidelines that establish strong market presence.',
    features: ['Logo & Visual Identity', 'Brand Guidelines', 'Marketing Collateral', 'Brand Strategy'],
    accent: '#6366F1',
  },
  {
    icon: Monitor,
    title: 'Web Design & Development',
    description:
      'Custom websites that convert visitors into customers, optimized for user experience and business growth.',
    features: [
      'Responsive Web Design',
      'User Experience Optimization',
      'Conversion-Focused Layout',
      'Mobile-First Approach',
    ],
    accent: '#8B5CF6',
    featured: true,
  },
  {
    icon: Rocket,
    title: 'Startup Brand Strategy',
    description:
      'Strategic brand positioning and visual storytelling that helps startups communicate their value proposition effectively.',
    features: ['Market Positioning', 'Visual Storytelling', 'Competitive Analysis', 'Brand Architecture'],
    accent: '#6366F1',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ background: 'oklch(0.975 0.01 262)' }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 rounded-full" style={{ background: '#6366F1' }} aria-hidden="true" />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6366F1' }}>
              Services
            </span>
            <div className="w-8 h-0.5 rounded-full" style={{ background: '#6366F1' }} aria-hidden="true" />
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Comprehensive Design Solutions for{' '}
            <span style={{ color: '#6366F1' }}>Growing Startups</span>
          </h2>
        </div>

        {/* Services grid */}
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          role="list"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <li
                key={service.title}
                className={`relative flex flex-col gap-6 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.featured
                    ? 'text-white shadow-2xl'
                    : 'bg-white border border-border shadow-sm'
                }`}
                style={
                  service.featured
                    ? { background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }
                    : undefined
                }
              >
                {service.featured && (
                  <div
                    className="absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: '#F59E0B', color: '#fff' }}
                    aria-label="Most popular service"
                  >
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={
                    service.featured
                      ? { background: 'rgba(255,255,255,0.2)' }
                      : {
                          background: `linear-gradient(135deg, ${service.accent}20, ${service.accent}10)`,
                        }
                  }
                  aria-hidden="true"
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: service.featured ? '#fff' : service.accent }}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-xl font-bold"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: service.featured ? '#fff' : 'var(--foreground)',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: service.featured ? 'rgba(255,255,255,0.8)' : 'var(--muted-foreground)' }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="flex flex-col gap-2 mt-auto" role="list">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: service.featured ? 'rgba(255,255,255,0.9)' : 'var(--foreground)' }}
                    >
                      <Check
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: service.featured ? '#F59E0B' : '#6366F1' }}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
