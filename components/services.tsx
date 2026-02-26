import { Palette, Monitor, Rocket, Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  highlight?: boolean
}

const services: Service[] = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description:
      'Complete visual identity systems including logos, color palettes, typography, and brand guidelines that establish market presence.',
    features: ['Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography Selection'],
  },
  {
    icon: Monitor,
    title: 'Web Design & Development',
    description:
      'Conversion-optimized websites that showcase your brand and drive results, from landing pages to full e-commerce solutions.',
    features: [
      'Responsive Design',
      'User Experience',
      'Conversion Optimization',
      'Content Management',
    ],
    highlight: true,
  },
  {
    icon: Rocket,
    title: 'Startup Branding Packages',
    description:
      'Comprehensive branding solutions tailored for startups, combining identity design with digital presence for maximum impact.',
    features: ['Complete Brand Kit', 'Website Design', 'Marketing Materials', 'Launch Strategy'],
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #FEFEFE 0%, oklch(0.964 0.008 264) 100%)' }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            What I Offer
          </div>
          <h2
            id="services-heading"
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-balance text-foreground"
          >
            Services That{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
            >
              Scale Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            From brand foundations to full digital experiences — everything your startup needs to
            stand out and convert.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className={`relative flex flex-col gap-6 rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.highlight
                    ? 'border-primary/30 shadow-lg'
                    : 'border-border bg-background shadow-sm'
                }`}
                style={
                  service.highlight
                    ? {
                        background:
                          'linear-gradient(145deg, rgba(99,102,241,0.06) 0%, rgba(139,92,246,0.06) 100%)',
                      }
                    : undefined
                }
              >
                {service.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: service.highlight
                      ? 'linear-gradient(135deg, #6366F1, #8B5CF6)'
                      : 'rgba(99,102,241,0.1)',
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: service.highlight ? '#fff' : '#6366F1' }}
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 mt-auto" aria-label={`${service.title} features`}>
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <Check
                        className="w-4 h-4 shrink-0"
                        style={{ color: '#F59E0B' }}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:hello@janedesigner.com"
                  className={`mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 ${
                    service.highlight
                      ? 'text-white'
                      : 'text-primary border border-primary/20 bg-primary/5 hover:bg-primary/10'
                  }`}
                  style={
                    service.highlight
                      ? { background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }
                      : undefined
                  }
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
