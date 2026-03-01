import { Search, Lightbulb, Paintbrush, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery & Research',
    description:
      'Understanding your market, competitors, and target audience to inform strategic design decisions.',
    color: '#6366F1',
    bg: '#EEF2FF',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Concept Development',
    description:
      'Creating multiple design directions and concepts that align with your business goals and brand vision.',
    color: '#8B5CF6',
    bg: '#F3EEFF',
  },
  {
    icon: Paintbrush,
    step: '03',
    title: 'Design & Refinement',
    description:
      'Developing polished designs with multiple revision rounds to ensure perfect alignment with your needs.',
    color: '#6366F1',
    bg: '#EEF2FF',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Support',
    description:
      'Delivering final assets and providing ongoing support to ensure successful implementation and results.',
    color: '#F59E0B',
    bg: '#FFFBEB',
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            How I Work
          </span>
          <h2
            id="process-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            My Proven Design Process
          </h2>
          <div
            className="mt-4 mx-auto h-1 w-16 rounded-full"
            style={{ background: 'linear-gradient(90deg, #6366F1, #8B5CF6)' }}
            aria-hidden="true"
          />
        </div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            className="absolute top-12 left-0 right-0 h-0.5 hidden lg:block"
            style={{ background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #F59E0B)' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <article key={step.title} className="relative flex flex-col items-center text-center group">
                  {/* Step circle */}
                  <div className="relative mb-6 z-10">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ background: step.bg }}
                      aria-hidden="true"
                    >
                      <Icon className="w-9 h-9" style={{ color: step.color }} />
                    </div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                      style={{ background: step.color }}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
