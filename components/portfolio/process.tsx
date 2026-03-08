import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'Deep dive into your business goals, target audience, and competitive landscape to inform design decisions.',
  },
  {
    number: '02',
    title: 'Concept Development',
    description:
      'Create initial design concepts and wireframes based on strategic insights and user experience principles.',
  },
  {
    number: '03',
    title: 'Design & Refinement',
    description:
      'Develop comprehensive designs with iterative feedback cycles to ensure perfect alignment with your vision.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'Deliver final assets and provide ongoing support to ensure successful implementation and launch.',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-background"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: steps */}
          <div className="flex flex-col gap-8">
            {/* Section label */}
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-0.5 rounded-full" style={{ background: '#6366F1' }} aria-hidden="true" />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6366F1' }}>
                My Process
              </span>
            </div>

            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              My Proven Design Process for{' '}
              <span style={{ color: '#6366F1' }}>Startup Success</span>
            </h2>

            {/* Steps */}
            <ol className="flex flex-col gap-6" aria-label="Design process steps">
              {steps.map((step, index) => (
                <li
                  key={step.number}
                  className="flex gap-5 group"
                >
                  {/* Step number + connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className="w-px flex-1 mt-3 min-h-[24px]"
                        style={{ background: 'linear-gradient(to bottom, #6366F140, transparent)' }}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1 pb-2">
                    <h3
                      className="font-bold text-lg text-foreground"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwd29ya2Zsb3clMjBjcmVhdGl2ZSUyMHN0cmF0ZWd5JTIwc3RhcnR1cCUyMGNvbGxhYm9yYXRpb258ZW58MHwwfHx8MTc3MzAwODQ0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Design process and creative workflow"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                aria-hidden="true"
              />
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -top-4 -right-4 w-full h-full rounded-3xl -z-10"
              style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', opacity: 0.12 }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
