import { Palette, Monitor, Target, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  accent: string
}

const features: Feature[] = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description:
      'Complete visual identity systems including logos, color palettes, typography, and brand guidelines that establish strong market presence.',
    accent: 'var(--brand-primary)',
  },
  {
    icon: Monitor,
    title: 'Web Design & Development',
    description:
      'Conversion-optimized websites that showcase your brand professionally and drive customer engagement and measurable growth.',
    accent: '#8B5CF6',
  },
  {
    icon: Target,
    title: 'Strategic Design Thinking',
    description:
      'Research-backed design decisions that align with your business goals and target audience preferences for maximum impact.',
    accent: 'var(--brand-accent)',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description:
      'Efficient project delivery without compromising quality — perfect for startups moving at speed and needing results fast.',
    accent: '#10B981',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--surface-subtle)' }}
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ backgroundColor: 'var(--indigo-50)', color: 'var(--brand-primary)' }}
          >
            Services
          </div>
          <h2
            id="features-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4"
          >
            Design Solutions That{' '}
            <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Every service is crafted to move your startup forward — from first impression
            to long-term brand equity.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="group bg-white rounded-2xl p-7 border border-border card-hover cursor-default"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: `${feature.accent}15` }}
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6" style={{ color: feature.accent }} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-6 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: feature.accent }}
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
