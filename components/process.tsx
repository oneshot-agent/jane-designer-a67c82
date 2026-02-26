const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'Deep dive into your business goals, target audience, and competitive landscape to inform design decisions.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Concept Development',
    description:
      'Create initial design concepts and prototypes based on strategic insights and brand positioning.',
    icon: '💡',
  },
  {
    number: '03',
    title: 'Design & Refinement',
    description:
      'Develop comprehensive design solutions with iterative feedback and refinement cycles.',
    icon: '✏️',
  },
  {
    number: '04',
    title: 'Launch & Optimization',
    description:
      'Implement final designs and provide ongoing support to ensure optimal performance and results.',
    icon: '🚀',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32"
      style={{
        background: 'linear-gradient(180deg, oklch(0.964 0.008 264) 0%, #FEFEFE 100%)',
      }}
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            How I Work
          </div>
          <h2
            id="process-heading"
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-balance text-foreground"
          >
            A Proven Process That{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
            >
              Delivers Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A structured, collaborative approach that ensures every project is delivered on time,
            on brand, and beyond expectations.
          </p>
        </div>

        {/* Steps */}
        <ol className="relative" aria-label="Design process steps">
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-14 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, #6366F1 20%, #8B5CF6 80%, transparent)',
              opacity: 0.3,
            }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className="relative flex flex-col gap-5"
              >
                {/* Step number circle */}
                <div className="flex items-center gap-4">
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center font-heading font-bold text-lg text-white shadow-lg shrink-0 z-10"
                    style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                  >
                    {step.number}
                  </div>
                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="lg:hidden flex-1 h-px"
                      style={{
                        background: 'linear-gradient(90deg, #6366F1, transparent)',
                        opacity: 0.3,
                      }}
                    />
                  )}
                </div>

                {/* Content card */}
                <div className="bg-background rounded-2xl border border-border p-6 shadow-sm flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <h3 className="font-heading font-bold text-lg text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 text-xs font-semibold mt-1"
                    style={{ color: '#6366F1' }}
                  >
                    Step {step.number}
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  )
}
