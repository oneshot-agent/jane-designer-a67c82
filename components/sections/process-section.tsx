const steps = [
  {
    number: '01',
    title: 'Strategy Session',
    description:
      'Deep dive into your business goals, target audience, and competitive landscape to inform design decisions.',
  },
  {
    number: '02',
    title: 'Concept Development',
    description:
      'Create initial concepts and wireframes based on strategic insights and user experience best practices.',
  },
  {
    number: '03',
    title: 'Design & Refinement',
    description:
      'Develop full designs with multiple revision rounds to ensure perfect alignment with your vision.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'Deliver final assets and provide ongoing support to ensure successful implementation and results.',
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
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-widest mb-3">
            How It Works
          </span>
          <h2
            id="process-heading"
            className="font-heading text-4xl lg:text-5xl font-bold text-[var(--brand-text)] tracking-tight text-balance max-w-xl mx-auto"
          >
            My Proven{' '}
            <span className="text-gradient-primary">Design Process</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] mx-[12.5%]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <article
                key={step.number}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number circle */}
                <div
                  className={`relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 shadow-sm ${
                    i === 0
                      ? 'bg-gradient-brand text-white shadow-brand'
                      : i === steps.length - 1
                      ? 'bg-gradient-to-br from-[var(--brand-accent)] to-[#BE185D] text-white shadow-accent'
                      : 'bg-[var(--brand-surface)] border border-[var(--brand-border)] text-[var(--brand-primary)]'
                  }`}
                >
                  <span className="font-heading text-2xl font-bold">{step.number}</span>
                </div>

                <h3 className="font-heading text-lg font-bold text-[var(--brand-text)] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--brand-text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
