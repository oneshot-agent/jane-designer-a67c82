import { Target, Monitor, TrendingUp } from 'lucide-react'
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
    title: 'Brand Identity Design',
    description:
      'Create memorable logos, color palettes, and brand guidelines that make your startup stand out in competitive markets.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Monitor,
    title: 'Web Design & Development',
    description:
      'Design conversion-focused websites that look stunning and perform flawlessly across all devices and browsers.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: TrendingUp,
    title: 'Startup-Focused Approach',
    description:
      'Understand the unique challenges of early-stage companies and deliver designs that grow with your business.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-pad bg-secondary"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            What I Do
          </div>
          <h2
            id="features-heading"
            className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight text-balance"
          >
            Design Solutions That{' '}
            <span className="text-gradient-primary">Drive Results</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative bg-card rounded-2xl p-8 border border-border card-hover shadow-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-subtle rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} mb-6`}
                >
                  <Icon className={`w-6 h-6 ${feature.color}`} aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="font-serif font-bold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-brand rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
