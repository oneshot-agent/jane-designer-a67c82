import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'TechFlow Startup',
    category: 'Brand Identity + Web Design',
    description:
      'Complete rebrand and website redesign resulting in 150% increase in lead generation and successful Series A funding.',
    image:
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop&q=80',
    color: 'from-[#6366F1]/20 to-[#6366F1]/5',
    tag: 'Case Study',
  },
  {
    title: 'EcoVenture',
    category: 'Brand Identity',
    description:
      'Sustainable brand identity design that helped secure $2M in initial funding and establish market credibility.',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop&q=80',
    color: 'from-emerald-100/60 to-emerald-50/20',
    tag: 'Brand Identity',
  },
  {
    title: 'FinanceFlow',
    category: 'Web Design',
    description:
      'User-centered web design that improved conversion rates by 200% and reduced bounce rate by 45%.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    color: 'from-amber-100/60 to-amber-50/20',
    tag: 'Web Design',
  },
  {
    title: 'HealthTech Pro',
    category: 'Brand Identity + Web Design',
    description:
      'Medical startup branding and web platform design, leading to successful product launch and 10,000+ user signups.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
    color: 'from-sky-100/60 to-sky-50/20',
    tag: 'Full Package',
  },
]

const categoryColors: Record<string, string> = {
  'Brand Identity + Web Design': 'bg-[#E0E7FF] text-[#6366F1]',
  'Brand Identity': 'bg-emerald-50 text-emerald-700',
  'Web Design': 'bg-amber-50 text-amber-700',
  'Full Package': 'bg-sky-50 text-sky-700',
}

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-[#FEFEFE]"
      aria-labelledby="portfolio-heading"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0E7FF] text-[#6366F1] text-xs font-semibold uppercase tracking-wider mb-6">
              Portfolio
            </div>
            <h2
              id="portfolio-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] text-balance leading-tight"
            >
              Recent Work &amp;{' '}
              <span className="text-[#6366F1]">Success Stories</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-sm leading-relaxed text-pretty md:text-right">
            Every project tells a story of transformation and growth.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative bg-white rounded-2xl overflow-hidden border border-border hover:border-[#6366F1]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${project.color}`}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span
                      className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[project.category] ?? 'bg-muted text-muted-foreground'} mb-2`}
                    >
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#1E293B]">
                      {project.title}
                    </h3>
                  </div>
                  <span
                    className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-muted text-muted-foreground group-hover:bg-[#6366F1] group-hover:text-white transition-colors duration-200"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
