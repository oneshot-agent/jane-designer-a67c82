import { Palette, Globe, Rocket, Check } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description:
      'Complete visual identity systems including logos, color palettes, typography, and brand guidelines that establish market presence.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Assets', 'Style Systems'],
    accent: '#6366F1',
    lightBg: 'bg-[#6366F1]/8',
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'Responsive websites optimized for conversions, built with modern technologies and focused on user experience.',
    features: ['Responsive Design', 'UX/UI Optimization', 'Performance Focus', 'CMS Integration'],
    accent: '#EC4899',
    lightBg: 'bg-[#EC4899]/8',
  },
  {
    icon: Rocket,
    title: 'Startup Branding Packages',
    description:
      'Comprehensive branding solutions designed specifically for early-stage companies looking to make a strong first impression.',
    features: ['Market Research', 'Competitor Analysis', 'Brand Strategy', 'Launch Materials'],
    accent: '#8B5CF6',
    lightBg: 'bg-[#8B5CF6]/8',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6366F1]">Services</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E293B] text-balance max-w-2xl leading-tight">
            Services That{' '}
            <span className="gradient-text-accent">Accelerate Growth</span>
          </h2>
          <p className="mt-4 text-[#1E293B]/60 max-w-xl leading-relaxed">
            End-to-end design services crafted to make your startup stand out and scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group relative flex flex-col gap-6 p-8 rounded-2xl bg-white border border-[#1E293B]/8 hover:border-[#6366F1]/30 hover:shadow-xl hover:shadow-[#6366F1]/8 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${service.lightBg} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={22} style={{ color: service.accent }} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl text-[#1E293B]">{service.title}</h3>
                  <p className="text-sm text-[#1E293B]/60 leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-[#1E293B]/70">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: service.accent + '18' }}
                        aria-hidden="true"
                      >
                        <Check size={10} style={{ color: service.accent }} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-none rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `linear-gradient(225deg, ${service.accent}18 0%, transparent 60%)`,
                  }}
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
