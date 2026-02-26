import { Palette, Monitor, Layout } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}

const services: Service[] = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description:
      "Complete visual identity systems including logos, color palettes, typography, and brand guidelines that establish your startup's unique market position.",
    gradient: 'linear-gradient(135deg, #6366F1, #EC4899)',
  },
  {
    icon: Monitor,
    title: 'Web Design & Development',
    description:
      "Responsive, user-focused websites that convert visitors into customers while perfectly reflecting your brand's personality and values.",
    gradient: 'linear-gradient(135deg, #EC4899, #F59E0B)',
  },
  {
    icon: Layout,
    title: 'Marketing Materials',
    description:
      'Cohesive print and digital marketing assets that maintain brand consistency across all touchpoints and drive engagement.',
    gradient: 'linear-gradient(135deg, #F59E0B, #6366F1)',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-gradient-hero"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: 'var(--brand-primary)' }}
          >
            What I Do
          </span>
          <h2
            id="services-heading"
            className="font-serif text-4xl md:text-5xl font-bold leading-tight text-balance"
            style={{ color: 'var(--brand-text)' }}
          >
            Design Solutions That{' '}
            <span className="text-gradient-primary">Drive Growth</span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'var(--brand-text-muted)' }}
          >
            From concept to launch, I deliver end-to-end design solutions tailored to
            the unique challenges of startup growth.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="relative flex flex-col gap-6 p-8 rounded-2xl border card-hover"
                style={{
                  background: 'var(--brand-surface)',
                  borderColor: 'var(--brand-border)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-2xl"
                  style={{ background: service.gradient }}
                  aria-hidden="true"
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <div className="flex flex-col gap-3">
                  <h3
                    className="font-serif text-xl font-bold"
                    style={{ color: 'var(--brand-text)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'var(--brand-text-muted)' }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-none rounded-tr-2xl rounded-br-none rounded-tl-none opacity-5 pointer-events-none"
                  style={{ background: service.gradient }}
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
