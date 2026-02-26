const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'Understanding your business goals, target audience, and competitive landscape to inform design decisions.',
    color: 'bg-[#E0E7FF] text-[#6366F1]',
    line: 'bg-[#6366F1]/20',
  },
  {
    number: '02',
    title: 'Concept Development',
    description:
      'Creating initial design concepts and exploring creative directions that align with your brand strategy.',
    color: 'bg-amber-50 text-[#F59E0B]',
    line: 'bg-[#F59E0B]/20',
  },
  {
    number: '03',
    title: 'Design & Refinement',
    description:
      'Developing detailed designs with multiple revision rounds to ensure the final result exceeds expectations.',
    color: 'bg-[#E0E7FF] text-[#6366F1]',
    line: 'bg-[#6366F1]/20',
  },
  {
    number: '04',
    title: 'Delivery & Support',
    description:
      'Providing all final files, guidelines, and ongoing support to ensure successful implementation.',
    color: 'bg-amber-50 text-[#F59E0B]',
    line: 'bg-transparent',
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-[#1E293B] overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6366F1]/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#F59E0B]/5 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6366F1]/20 text-[#A5B4FC] text-xs font-semibold uppercase tracking-wider mb-6">
            My Process
          </div>
          <h2
            id="process-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight"
          >
            My Design Process
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-white/10"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <article key={step.number} className="relative flex flex-col">
              {/* Number circle */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`relative z-10 w-12 h-12 rounded-full ${step.color} flex items-center justify-center font-serif font-bold text-base shrink-0`}
                >
                  {step.number}
                </div>
                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div
                    className="lg:hidden flex-1 h-px bg-white/10"
                    aria-hidden="true"
                  />
                )}
              </div>

              <h3 className="font-serif text-lg font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
