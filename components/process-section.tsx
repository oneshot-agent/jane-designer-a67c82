import { Search, Lightbulb, Pencil, Rocket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Step {
  icon: LucideIcon
  title: string
  description: string
  step: string
}

const steps: Step[] = [
  {
    icon: Search,
    title: 'Discovery & Research',
    description:
      'Deep dive into your business goals, target audience, and competitive landscape to inform strategic design decisions.',
    step: '01',
  },
  {
    icon: Lightbulb,
    title: 'Concept Development',
    description:
      'Create initial concepts and design directions based on research insights and your unique brand story.',
    step: '02',
  },
  {
    icon: Pencil,
    title: 'Design & Refinement',
    description:
      'Develop polished designs with multiple revision rounds to ensure perfect alignment with your vision.',
    step: '03',
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description:
      'Deliver final assets and provide ongoing support to ensure successful implementation and brand consistency.',
    step: '04',
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-gradient-hero"
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: 'var(--brand-primary)' }}
          >
            How It Works
          </span>
          <h2
            id="process-heading"
            className="font-serif text-4xl md:text-5xl font-bold leading-tight text-balance"
            style={{ color: 'var(--brand-text)' }}
          >
            My Proven{' '}
            <span className="text-gradient-primary">Design Process</span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'var(--brand-text-muted)' }}
          >
            A structured, collaborative approach that delivers exceptional results every time.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px opacity-20"
            style={{ background: 'var(--brand-primary)' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 1
              return (
                <article
                  key={step.title}
                  className="relative flex flex-col items-start gap-5 p-6 rounded-2xl border card-hover"
                  style={{
                    background: 'var(--brand-surface)',
                    borderColor: 'var(--brand-border)',
                  }}
                >
                  {/* Step number */}
                  <div className="flex items-center justify-between w-full">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-2xl"
                      style={{
                        background: isEven
                          ? 'linear-gradient(135deg, var(--brand-secondary), var(--brand-accent))'
                          : 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
                      }}
                      aria-hidden="true"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span
                      className="font-serif text-4xl font-bold opacity-10 select-none"
                      style={{ color: 'var(--brand-primary)' }}
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-serif text-lg font-bold"
                      style={{ color: 'var(--brand-text)' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--brand-text-muted)' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
