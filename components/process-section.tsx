interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'Deep dive into your business goals, target audience, and competitive landscape to create a strategic foundation.',
  },
  {
    number: '02',
    title: 'Concept Development',
    description:
      'Create multiple design concepts and iterate based on your feedback to find the perfect creative direction.',
  },
  {
    number: '03',
    title: 'Design & Refinement',
    description:
      'Develop the chosen concept into polished designs with attention to every detail and user experience.',
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
      className="section-pad bg-background"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wide uppercase mb-4">
            How It Works
          </div>
          <h2
            id="process-heading"
            className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight text-balance mb-4"
          >
            My Design Process
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed text-balance">
            A proven 4-step approach that delivers results on time and on budget
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div
            className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 hidden lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative flex flex-col items-start lg:items-center lg:text-center"
              >
                {/* Number badge */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-card border-2 border-border group-hover:border-primary/50 flex items-center justify-center mb-6 transition-all duration-300 shadow-sm group-hover:shadow-primary/10 group-hover:shadow-lg">
                  <span className="font-serif font-bold text-xl text-gradient-primary">
                    {step.number}
                  </span>
                  {/* Pulse ring on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div
                    className="sm:hidden w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent mt-4 ml-8"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
