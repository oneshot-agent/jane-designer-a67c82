import { Target, Palette, Rocket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const features: Array<{
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}> = [
  {
    icon: Target,
    title: 'Brand Strategy',
    description:
      'Strategic visual identities that position your startup ahead of competitors and resonate with your target market.',
    gradient: 'from-[#6366F1] to-[#818CF8]',
  },
  {
    icon: Palette,
    title: 'Web Design',
    description:
      'Conversion-focused websites that turn visitors into customers with bold, user-centric design principles.',
    gradient: 'from-[#EC4899] to-[#F472B6]',
  },
  {
    icon: Rocket,
    title: 'Startup Focus',
    description:
      'Deep understanding of startup needs, fast timelines, and budget constraints without compromising quality.',
    gradient: 'from-[#F59E0B] to-[#FCD34D]',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 px-6 lg:px-8 bg-background"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest">
            Services
          </span>
          <h2
            id="features-heading"
            className="font-display font-bold text-4xl sm:text-5xl text-foreground text-balance"
          >
            Design That{' '}
            <span className="gradient-text">Drives Results</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Every pixel is intentional. Every design decision is backed by
            strategy to help your startup grow faster.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative flex flex-col gap-5 p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-md`}
                  aria-hidden="true"
                >
                  <Icon size={26} className="text-white" strokeWidth={1.75} />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover accent line */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  aria-hidden="true"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
