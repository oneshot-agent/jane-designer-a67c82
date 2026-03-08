import { Palette, Monitor, Smartphone, Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  accent: string
  bg: string
  border: string
}

const services: Service[] = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description:
      'Logo design, color palettes, typography, and brand guidelines that establish your unique market position.',
    features: [
      'Logo & Visual Identity',
      'Brand Guidelines',
      'Marketing Collateral',
      'Brand Strategy',
    ],
    accent: 'text-[var(--brand-primary)]',
    bg: 'bg-[var(--brand-primary)]',
    border: 'hover:border-[var(--brand-primary)]/40',
  },
  {
    icon: Monitor,
    title: 'Web Design & Development',
    description:
      'High-converting websites optimized for user experience and business growth.',
    features: [
      'Responsive Web Design',
      'User Experience (UX)',
      'Conversion Optimization',
      'CMS Integration',
    ],
    accent: 'text-[var(--brand-accent)]',
    bg: 'bg-[var(--brand-accent)]',
    border: 'hover:border-[var(--brand-accent)]/40',
  },
  {
    icon: Smartphone,
    title: 'Digital Product Design',
    description:
      'App interfaces and digital experiences that users love and investors notice.',
    features: [
      'Mobile App Design',
      'Dashboard Design',
      'Prototype Development',
      'User Testing',
    ],
    accent: 'text-[#0EA5E9]',
    bg: 'bg-[#0EA5E9]',
    border: 'hover:border-[#0EA5E9]/40',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-[var(--brand-surface)]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-widest mb-3">
            Services
          </span>
          <h2
            id="services-heading"
            className="font-heading text-4xl lg:text-5xl font-bold text-[var(--brand-text)] tracking-tight text-balance max-w-2xl mx-auto"
          >
            Comprehensive Design{' '}
            <span className="text-gradient-primary">Solutions for Startups</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            const isFeatured = i === 0
            return (
              <article
                key={service.title}
                className={`relative rounded-2xl border border-[var(--brand-border)] ${service.border} transition-all duration-300 overflow-hidden group ${
                  isFeatured
                    ? 'bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)] text-white shadow-brand-lg'
                    : 'bg-white hover:shadow-brand'
                }`}
              >
                <div className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      isFeatured ? 'bg-white/20' : service.bg + '/10'
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${isFeatured ? 'text-white' : service.accent}`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3
                    className={`font-heading text-xl font-bold mb-3 ${
                      isFeatured ? 'text-white' : 'text-[var(--brand-text)]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isFeatured ? 'text-white/80' : 'text-[var(--brand-text-muted)]'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2.5" role="list">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isFeatured ? 'bg-white/20' : service.bg + '/10'
                          }`}
                          aria-hidden="true"
                        >
                          <Check
                            className={`w-3 h-3 ${isFeatured ? 'text-white' : service.accent}`}
                          />
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            isFeatured ? 'text-white/90' : 'text-[var(--brand-text)]'
                          }`}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle decorative corner */}
                <div
                  className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full ${
                    isFeatured ? 'bg-white/10' : service.bg + '/5'
                  }`}
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
