const steps = [
  {
    number: '01',
    title: 'Strategic Discovery',
    description:
      "Deep dive into your startup's vision, target market, and competitive landscape to uncover unique positioning opportunities.",
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    number: '02',
    title: 'Bold Concepts',
    description:
      'Create fearless design concepts that break industry norms and make your brand impossible to ignore.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
  },
  {
    number: '03',
    title: 'Rapid Iteration',
    description:
      'Fast-paced refinement process with continuous feedback to ensure designs exceed expectations and deadlines.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description:
      'Strategic rollout with performance tracking and optimization to maximize impact and ROI from day one.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
]

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 px-6 lg:px-8 bg-background"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest">
            How I Work
          </span>
          <h2
            id="process-heading"
            className="font-display font-bold text-4xl sm:text-5xl text-foreground text-balance"
          >
            My Bold{' '}
            <span className="gradient-text">Design Process</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg leading-relaxed">
            A proven framework that delivers exceptional results — fast.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary via-secondary to-amber-400 opacity-30"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col gap-5 p-7 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Step number */}
              <div
                className={`relative z-10 w-16 h-16 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center`}
              >
                <span
                  className={`font-display font-bold text-2xl ${step.color}`}
                  aria-label={`Step ${i + 1}`}
                >
                  {step.number}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-foreground leading-snug">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
