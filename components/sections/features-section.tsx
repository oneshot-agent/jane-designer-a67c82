import { Target, Zap, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  color: string
  bg: string
}

const features: Feature[] = [
  {
    icon: Target,
    title: 'Strategic Brand Focus',
    description:
      'Every design decision aligns with your business goals and target audience, ensuring maximum market impact.',
    color: 'text-[var(--brand-primary)]',
    bg: 'bg-[#EEF2FF]',
  },
  {
    icon: Zap,
    title: 'Rapid Turnaround',
    description:
      'Get your complete brand identity and website delivered in 2-3 weeks, perfect for startup timelines.',
    color: 'text-[var(--brand-accent)]',
    bg: 'bg-[#FDF2F8]',
  },
  {
    icon: TrendingUp,
    title: 'Growth-Oriented Design',
    description:
      'Designs that scale with your business, from MVP launch to Series A and beyond.',
    color: 'text-[#0EA5E9]',
    bg: 'bg-[#F0F9FF]',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 lg:py-32 bg-[var(--brand-surface)]"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-widest mb-3">
            Why Choose Me
          </span>
          <h2
            id="features-heading"
            className="font-heading text-4xl lg:text-5xl font-bold text-[var(--brand-text)] tracking-tight text-balance"
          >
            Why Startups Choose My{' '}
            <span className="text-gradient-primary">Design Expertise</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-[var(--brand-border)] hover:border-[var(--brand-primary)]/30 hover:shadow-brand transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--brand-text)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--brand-text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
