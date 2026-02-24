const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'Deep dive into your business goals, target audience, and competitive landscape to inform all design decisions with strategic intent.',
  },
  {
    number: '02',
    title: 'Concept Development',
    description:
      'Create multiple design directions based on strategic insights, ensuring alignment with your brand vision and market positioning.',
  },
  {
    number: '03',
    title: 'Design & Refinement',
    description:
      'Develop chosen concepts with meticulous attention to detail, incorporating feedback through collaborative iterations.',
  },
  {
    number: '04',
    title: 'Delivery & Support',
    description:
      'Provide final assets, comprehensive guidelines, and ongoing support for successful implementation and brand consistency.',
  },
]

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ backgroundColor: 'var(--indigo-50)', color: 'var(--brand-primary)' }}
          >
            How It Works
          </div>
          <h2
            id="process-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            My{' '}
            <span className="text-gradient">Design Process</span>
          </h2>
        </div>

        {/* Steps — horizontal on large, vertical on small */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--brand-primary), transparent)',
              top: '2.5rem',
            }}
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6" role="list">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className="relative flex flex-col items-start"
              >
                {/* Number bubble */}
                <div className="relative mb-6 z-10">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: index % 2 === 0
                        ? 'var(--brand-primary)'
                        : 'linear-gradient(135deg, var(--brand-primary), #818CF8)',
                    }}
                    aria-hidden="true"
                  >
                    <span className="font-heading text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  {/* Connector arrow (mobile) */}
                  {index < steps.length - 1 && (
                    <div
                      className="sm:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 w-px h-8"
                      style={{ backgroundColor: 'var(--brand-primary)', opacity: 0.3 }}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
