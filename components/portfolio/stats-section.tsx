const stats = [
  {
    number: '50+',
    label: 'Startups Launched',
    color: 'var(--brand-primary)',
  },
  {
    number: '300%',
    label: 'Avg. Inquiry Increase',
    color: 'var(--brand-secondary)',
  },
  {
    number: '2-3',
    label: 'Weeks to Launch',
    color: 'var(--brand-accent)',
  },
  {
    number: '$20M+',
    label: 'Funding Raised by Clients',
    color: 'var(--brand-primary)',
  },
]

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="py-24 lg:py-32 noise-texture overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, var(--brand-primary) 0%, #8B5CF6 50%, var(--brand-secondary) 100%)',
      }}
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="stats-heading"
            className="font-heading font-bold text-4xl sm:text-5xl text-white text-balance"
          >
            Results That Speak{' '}
            <span
              style={{
                color: 'var(--brand-accent)',
              }}
            >
              Volumes
            </span>
          </h2>
          <p className="text-white/75 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
            Numbers that tell the story of startups transformed.
          </p>
        </div>

        {/* Stats grid */}
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd
                className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl mb-2 leading-none"
                style={{ color: stat.label === 'Weeks to Launch' ? 'var(--brand-accent)' : '#fff' }}
              >
                {stat.number}
              </dd>
              <span className="text-white/75 text-sm sm:text-base font-medium leading-tight text-balance">
                {stat.label}
              </span>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
