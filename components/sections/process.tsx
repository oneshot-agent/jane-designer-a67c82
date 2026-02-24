const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "Deep dive into your business goals, target audience, and competitive landscape to inform design decisions.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    number: "02",
    title: "Concept Development",
    description:
      "Create initial design concepts and prototypes based on strategic insights and brand positioning.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Design & Refinement",
    description:
      "Develop comprehensive designs with multiple revision rounds to ensure perfect alignment with your vision.",
    color: "from-pink-500 to-rose-500",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Deliver final assets with implementation support and ongoing guidance for brand consistency.",
    color: "from-rose-500 to-orange-500",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase gradient-text-subtle mb-4">
            My Process
          </p>
          <h2
            id="process-heading"
            className="font-serif text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Strategic Design Process for{" "}
            <span className="gradient-text">Maximum Impact</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-pink-200 to-orange-200 hidden lg:block mx-[12.5%]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <article
                key={step.number}
                className="flex flex-col gap-5 relative"
              >
                {/* Step number circle */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <div
                    className={`relative w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} shadow-lg flex-shrink-0`}
                  >
                    <span
                      className="font-serif text-2xl font-bold text-white"
                      aria-label={`Step ${i + 1}`}
                    >
                      {step.number}
                    </span>
                    {/* Dot on connecting line */}
                    <div
                      className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-primary hidden lg:block last:hidden"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div
                    className="w-0.5 h-6 bg-gradient-to-b from-indigo-200 to-pink-200 ml-10 sm:hidden"
                    aria-hidden="true"
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
