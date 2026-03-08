const stats = [
  {
    number: '50+',
    label: 'Startups Transformed',
    accent: 'text-primary',
  },
  {
    number: '300%',
    label: 'Average ROI Increase',
    accent: 'text-secondary',
  },
  {
    number: '$25M+',
    label: 'Funding Raised by Clients',
    accent: 'text-amber-500',
  },
  {
    number: '2 Weeks',
    label: 'Average Project Timeline',
    accent: 'text-primary',
  },
]

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="py-24 px-6 lg:px-8 bg-foreground"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest">
            Impact
          </span>
          <h2
            id="stats-heading"
            className="font-display font-bold text-4xl sm:text-5xl text-white text-balance"
          >
            Results That{' '}
            <span className="gradient-text">Speak Volumes</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <span
                className={`font-display font-bold text-4xl sm:text-5xl lg:text-6xl ${stat.accent} mb-3`}
              >
                {stat.number}
              </span>
              <span className="text-white/70 text-sm sm:text-base font-medium leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
