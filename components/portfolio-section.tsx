import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  description: string
  category: string
  tags: string[]
  metric: string
  metricLabel: string
  colSpan?: boolean
}

const projects: Project[] = [
  {
    title: 'TechFlow Startup Brand Identity',
    description:
      'Complete rebrand resulting in 40% increase in investor interest and successful Series A funding.',
    category: 'Brand Identity',
    tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    metric: '+40%',
    metricLabel: 'Investor interest',
    colSpan: true,
  },
  {
    title: 'GreenSpace E-commerce Website',
    description:
      'Modern web design that improved conversion rates by 65% and reduced bounce rate by 30%.',
    category: 'Web Design',
    tags: ['E-commerce', 'UX/UI', 'Responsive Design'],
    metric: '+65%',
    metricLabel: 'Conversion rate',
  },
  {
    title: 'DataViz SaaS Platform Design',
    description:
      'User-centered design system that enhanced user engagement and reduced support tickets by 45%.',
    category: 'Digital Design',
    tags: ['SaaS', 'Dashboard Design', 'User Experience'],
    metric: '-45%',
    metricLabel: 'Support tickets',
  },
  {
    title: 'HealthTech App Branding',
    description:
      'Medical app branding that built trust and achieved 50K+ downloads in first quarter.',
    category: 'Brand Identity',
    tags: ['Mobile App', 'Healthcare', 'Brand Strategy'],
    metric: '50K+',
    metricLabel: 'Q1 Downloads',
    colSpan: true,
  },
]

const categoryColors: Record<string, string> = {
  'Brand Identity': 'var(--brand-primary)',
  'Web Design': '#8B5CF6',
  'Digital Design': 'var(--brand-accent)',
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-white" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ backgroundColor: 'var(--indigo-50)', color: 'var(--brand-primary)' }}
            >
              Portfolio
            </div>
            <h2
              id="portfolio-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              Recent Projects &{' '}
              <span className="text-gradient">Success Stories</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xs leading-relaxed sm:text-right flex-shrink-0">
            Every project is a story of transformation and measurable results.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const accentColor = categoryColors[project.category] ?? 'var(--brand-primary)'
            return (
              <article
                key={project.title}
                className={`group relative bg-white rounded-2xl overflow-hidden border border-border card-hover cursor-pointer ${
                  project.colSpan ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image area with overlay */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-70"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}80, #00000060)`,
                    }}
                    aria-hidden="true"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-foreground">
                      {project.category}
                    </span>
                  </div>
                  {/* Metric */}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white/80 text-xs font-medium mb-0.5">{project.metricLabel}</p>
                    <p className="text-white text-2xl font-bold font-heading">{project.metric}</p>
                  </div>
                  {/* Arrow icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Project tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        role="listitem"
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
