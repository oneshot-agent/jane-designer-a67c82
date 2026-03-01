import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'TechFlow SaaS',
    description: 'Complete rebrand increased user signups by 340% in first quarter',
    category: 'Brand Identity + Web Design',
    stat: '+340%',
    statLabel: 'User Signups',
    accentColor: 'bg-primary',
    height: 'lg',
  },
  {
    title: 'GreenStart Marketplace',
    description: 'E-commerce platform design that generated $2M in first-year sales',
    category: 'Web Design + UX',
    stat: '$2M',
    statLabel: 'First Year Sales',
    accentColor: 'bg-secondary',
    height: 'sm',
  },
  {
    title: 'FinanceForward App',
    description: 'Mobile-first brand and interface design for Series A funded fintech',
    category: 'Brand Identity + App Design',
    stat: 'Series A',
    statLabel: 'Funded',
    accentColor: 'bg-accent',
    height: 'sm',
  },
  {
    title: 'LocalEats Platform',
    description: 'Restaurant discovery app that reached 50K downloads in 3 months',
    category: 'Brand Identity + Web Design',
    stat: '50K',
    statLabel: 'Downloads',
    accentColor: 'bg-primary',
    height: 'lg',
  },
]

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
              <span className="geo-dot" aria-hidden="true" />
              Selected Work
            </div>
            <h2
              id="portfolio-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance"
            >
              Brands I&apos;ve{' '}
              <span className="gradient-text-primary">Brought to Life</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground leading-relaxed lg:text-right">
            Each project is a partnership built on strategy, creativity, and measurable results.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden bg-card border border-border card-hover ${
                index % 3 === 0 ? 'md:row-span-1' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  project.height === 'lg' ? 'h-72 sm:h-80' : 'h-56 sm:h-64'
                }`}
              >
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                  alt={`${project.title} project showcase`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center bg-white/95 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full border border-border">
                    {project.category}
                  </span>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={18} className="text-white" aria-hidden="true" />
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>

              {/* Stat bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-card border-t border-border">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${project.accentColor}`}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-muted-foreground">{project.statLabel}</span>
                </div>
                <span className="font-display font-bold text-lg text-foreground">
                  {project.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
