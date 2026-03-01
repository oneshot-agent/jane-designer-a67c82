import { Palette, Monitor, Package, Check } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description:
      'Logo, color palette, typography, and brand guidelines that make you unforgettable.',
    features: [
      'Logo design & variations',
      'Brand style guide',
      'Business card design',
      'Social media templates',
    ],
    popular: false,
    accent: 'text-primary',
    accentBg: 'bg-indigo-50',
    accentBorder: 'border-indigo-100',
    badge: null,
  },
  {
    icon: Monitor,
    title: 'Website Design & Development',
    description:
      'Responsive websites built to convert visitors into paying customers.',
    features: [
      'Mobile-responsive design',
      'SEO optimization',
      'CMS integration',
      'Performance optimization',
    ],
    popular: true,
    accent: 'text-secondary',
    accentBg: 'bg-pink-50',
    accentBorder: 'border-pink-100',
    badge: 'Most Popular',
  },
  {
    icon: Package,
    title: 'Complete Brand Packages',
    description:
      'Everything you need to launch with confidence and compete with industry leaders.',
    features: [
      'Full brand identity',
      'Website design & build',
      'Marketing materials',
      '3 months support',
    ],
    popular: false,
    accent: 'text-accent',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-100',
    badge: 'Best Value',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-slate-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-border shadow-sm px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
            <span className="geo-dot" aria-hidden="true" />
            Design Services
          </div>
          <h2
            id="services-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance"
          >
            Design Services That{' '}
            <span className="gradient-text-primary">Scale Your Business</span>
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`relative flex flex-col bg-card rounded-2xl border overflow-hidden card-hover ${
                  service.popular
                    ? 'border-primary shadow-xl shadow-primary/10 ring-1 ring-primary'
                    : 'border-border shadow-sm'
                }`}
              >
                {/* Popular badge */}
                {service.badge && (
                  <div
                    className={`absolute top-0 right-0 ${
                      service.popular
                        ? 'bg-gradient-brand text-white'
                        : 'bg-amber-50 text-amber-700 border-l border-b border-amber-100'
                    } text-xs font-bold px-3 py-1.5 rounded-bl-xl`}
                  >
                    {service.badge}
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${service.accentBg} ${service.accentBorder} border mb-6`}
                  >
                    <Icon size={26} className={service.accent} aria-hidden="true" />
                  </div>

                  {/* Title & description */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="flex flex-col gap-3 flex-1" aria-label={`${service.title} features`}>
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full ${service.accentBg} ${service.accentBorder} border flex items-center justify-center`}
                          aria-hidden="true"
                        >
                          <Check size={11} className={service.accent} strokeWidth={3} />
                        </span>
                        <span className="text-sm text-foreground">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="mailto:jane@janedesigner.com"
                    className={`mt-8 inline-flex items-center justify-center font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 ${
                      service.popular
                        ? 'bg-gradient-brand text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
                        : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
