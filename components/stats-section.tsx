import { Building2, TrendingUp, Clock, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Stat {
  number: string
  label: string
  icon: LucideIcon
  color: string
  bg: string
}

const stats: Stat[] = [
  {
    number: '50+',
    label: 'Startups Helped',
    icon: Building2,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    number: '200%',
    label: 'Avg. Conversion Increase',
    icon: TrendingUp,
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    number: '48hrs',
    label: 'Average Response Time',
    icon: Clock,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    number: '98%',
    label: 'Client Satisfaction Rate',
    icon: Star,
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
]

export default function StatsSection() {
  return (
    <section
      className="section-pad bg-secondary"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            By The Numbers
          </div>
          <h2
            id="stats-heading"
            className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight text-balance"
          >
            Proven{' '}
            <span className="text-gradient-primary">Track Record</span>
          </h2>
        </div>

        {/* Stats horizontal grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="group bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm card-hover text-center"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bg} mb-5 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className={`w-6 h-6 ${stat.color}`} aria-hidden="true" />
                </div>

                {/* Number */}
                <p className="font-serif font-bold text-3xl md:text-4xl text-gradient-primary mb-1">
                  {stat.number}
                </p>

                {/* Label */}
                <p className="text-muted-foreground text-sm font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
