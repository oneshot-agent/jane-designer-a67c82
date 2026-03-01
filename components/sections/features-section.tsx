import { Rocket, Target, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Launch-Ready Fast',
    description:
      'Complete brand identity and website delivered in 2-3 weeks, not months.',
    color: 'text-primary',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: Target,
    title: 'Conversion-Focused',
    description:
      "Designs that don't just look good—they drive sales and user engagement.",
    color: 'text-secondary',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
  },
  {
    icon: TrendingUp,
    title: 'Startup-Savvy',
    description:
      'I understand lean budgets and growth goals. Every design decision drives business results.',
    color: 'text-accent',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 lg:py-32 bg-foreground relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white/80 mb-6">
            <span className="geo-dot" aria-hidden="true" />
            Why work with me
          </div>
          <h2
            id="features-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance"
          >
            Why Startups{' '}
            <span className="gradient-text-accent">Choose My Design</span>
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 card-hover"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.bg} ${feature.border} border mb-6`}
                >
                  <Icon size={26} className={feature.color} aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent`}
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
