import { Palette, Monitor, Rocket, Check } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description:
      'Complete visual identity systems including logos, color palettes, typography, and brand guidelines that establish market presence.',
    features: ['Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography Selection'],
    color: 'bg-[#E0E7FF] text-[#6366F1]',
    border: 'hover:border-[#6366F1]/40',
    accent: 'bg-[#6366F1]',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description:
      'Conversion-focused websites that showcase your brand and turn visitors into customers through strategic design and user experience.',
    features: [
      'Responsive Design',
      'User Experience',
      'Conversion Optimization',
      'Mobile-First Approach',
    ],
    color: 'bg-amber-50 text-[#F59E0B]',
    border: 'hover:border-[#F59E0B]/40',
    accent: 'bg-[#F59E0B]',
  },
  {
    icon: Rocket,
    title: 'Startup Packages',
    description:
      'Comprehensive design solutions tailored for startups, combining brand identity and web design for a cohesive launch strategy.',
    features: [
      'Complete Brand Kit',
      'Website Design',
      'Business Cards',
      'Social Media Assets',
    ],
    color: 'bg-indigo-50 text-indigo-500',
    border: 'hover:border-indigo-400/40',
    accent: 'bg-indigo-500',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#F8F9FF]"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0E7FF] text-[#6366F1] text-xs font-semibold uppercase tracking-wider mb-6">
            Services
          </div>
          <h2
            id="services-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] text-balance leading-tight mb-4"
          >
            Design Services That Drive Growth
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            From brand identity to full startup packages — everything you need to launch
            with confidence and make a lasting impression.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className={`group relative bg-white rounded-2xl p-8 border-2 border-border ${service.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.color} mb-6`}
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1E293B] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2" role="list">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#1E293B]">
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${service.accent}`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
