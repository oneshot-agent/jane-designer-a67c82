const stats = [
  { number: '50+', label: 'Startups Helped', description: 'from seed to scale' },
  { number: '$2M+', label: 'In Funding Raised', description: 'by our clients combined' },
  { number: '65%', label: 'Avg. Conversion Increase', description: 'across web projects' },
  { number: '98%', label: 'Client Satisfaction', description: 'would recommend us' },
]

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="py-20 lg:py-24"
      style={{
        background: 'linear-gradient(135deg, var(--brand-primary) 0%, #4F46E5 50%, #7C3AED 100%)',
      }}
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            id="stats-heading"
            className="font-heading text-2xl sm:text-3xl font-bold text-white/90 text-balance"
          >
            Proven Track Record
          </h2>
        </div>

        {/* Stats row */}
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                index < stats.length - 1
                  ? 'lg:border-r lg:border-white/20'
                  : ''
              }`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span
                  className="block font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2"
                  aria-label={stat.number}
                >
                  {stat.number}
                </span>
                <span className="block text-sm sm:text-base font-semibold text-white/90 mb-1">
                  {stat.label}
                </span>
                <span className="block text-xs sm:text-sm text-white/50">
                  {stat.description}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
