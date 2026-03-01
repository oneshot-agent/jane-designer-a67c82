import { Palette, Monitor, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description:
      'Complete visual identity systems including logos, color palettes, and brand guidelines that make your startup memorable.',
    color: '#6366F1',
    bg: '#EEF2FF',
  },
  {
    icon: Monitor,
    title: 'Web Design & Development',
    description:
      'Responsive websites that convert visitors into customers, optimized for performance and user experience.',
    color: '#8B5CF6',
    bg: '#F3EEFF',
  },
  {
    icon: TrendingUp,
    title: 'Growth-Focused Strategy',
    description:
      'Design solutions backed by user research and market analysis to help your startup scale effectively.',
    color: '#F59E0B',
    bg: '#FFFBEB',
  },
]

export function FeaturesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Services
          </span>
          <h2
            id="features-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            What I Deliver for Your Startup
          </h2>
          <div
            className="mt-4 mx-auto h-1 w-16 rounded-full"
            style={{ background: 'linear-gradient(90deg, #6366F1, #8B5CF6)' }}
            aria-hidden="true"
          />
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: feature.bg }}
                  aria-hidden="true"
                >
                  <Icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>

                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {feature.description}
                </p>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
                  aria-hidden="true"
                />
              </article>
            )
          })}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-base">
            Ready to transform your startup&apos;s visual identity?{' '}
            <a
              href="mailto:jane@janedesigner.com"
              className="text-primary font-semibold hover:underline"
            >
              Let&apos;s start a conversation.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
