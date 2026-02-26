import { Search, Lightbulb, Palette, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery & Strategy',
    description:
      'Deep dive into your business goals, target audience, and competitive landscape to inform design decisions.',
    color: '#6366F1',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Concept Development',
    description:
      'Create initial concepts and design directions based on strategic insights and brand positioning.',
    color: '#8B5CF6',
  },
  {
    icon: Palette,
    step: '03',
    title: 'Design & Refinement',
    description:
      'Develop comprehensive design solutions with iterative feedback and refinement cycles.',
    color: '#EC4899',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Support',
    description:
      'Deliver final assets with implementation support and brand guidelines for consistent application.',
    color: '#F43F5E',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6366F1]">My Process</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E293B] text-balance max-w-2xl leading-tight">
            A Proven Process That{' '}
            <span className="gradient-text-primary">Delivers Results</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] h-px hidden lg:block"
            style={{
              background: 'linear-gradient(90deg, #6366F1 0%, #8B5CF6 33%, #EC4899 66%, #F43F5E 100%)',
              opacity: 0.25,
            }}
            aria-hidden="true"
          />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center gap-4"
              >
                {/* Step circle */}
                <div className="relative z-10">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}22 0%, ${step.color}10 100%)`,
                      border: `2px solid ${step.color}30`,
                    }}
                  >
                    <Icon size={28} style={{ color: step.color }} />
                  </div>
                  {/* Step number badge */}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold text-white flex items-center justify-center shadow-md"
                    style={{ backgroundColor: step.color }}
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#1E293B]">{step.title}</h3>
                <p className="text-sm text-[#1E293B]/60 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
