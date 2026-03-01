import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'TechFlow Startup',
    category: 'Brand Identity & Website',
    description: 'Complete rebrand increased user engagement by 150% and conversion rates by 40%.',
    stat: '+150% Engagement',
    statColor: '#6366F1',
    image:
      'https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBzaG93Y2FzZSUyMGRlc2lnbiUyMHByb2plY3RzfGVufDB8MHx8fDE3NzIzMjk3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cols: 'md:col-span-2',
    height: 'h-72 md:h-80',
  },
  {
    title: 'EcoVenture',
    category: 'Web Design',
    description: 'Responsive e-commerce site generated $100K in first quarter after launch.',
    stat: '$100K Q1',
    statColor: '#8B5CF6',
    image: '/placeholder.svg?height=400&width=400',
    cols: 'md:col-span-1',
    height: 'h-72 md:h-80',
  },
  {
    title: 'FinanceFlow',
    category: 'Brand Identity',
    description: 'Professional financial services rebrand attracted 200+ new clients in 6 months.',
    stat: '200+ Clients',
    statColor: '#F59E0B',
    image: '/placeholder.svg?height=400&width=400',
    cols: 'md:col-span-1',
    height: 'h-64 md:h-72',
  },
  {
    title: 'HealthTech Pro',
    category: 'Web Design',
    description: 'Medical platform redesign improved user retention by 75% and reduced bounce rate.',
    stat: '+75% Retention',
    statColor: '#6366F1',
    image: '/placeholder.svg?height=500&width=700',
    cols: 'md:col-span-2',
    height: 'h-64 md:h-72',
  },
]

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32"
      style={{ background: '#F8FAFF' }}
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Portfolio
          </span>
          <h2
            id="portfolio-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Recent Projects That Drove Results
          </h2>
          <div
            className="mt-4 mx-auto h-1 w-16 rounded-full"
            style={{ background: 'linear-gradient(90deg, #6366F1, #8B5CF6)' }}
            aria-hidden="true"
          />
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden bg-card border border-border cursor-pointer ${project.cols}`}
            >
              {/* Image */}
              <div className={`relative ${project.height} overflow-hidden`}>
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category} project`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(99,102,241,0.75)' }}
                  aria-hidden="true"
                />
                {/* View icon on hover */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </span>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ color: project.statColor, background: `${project.statColor}15` }}
                  >
                    {project.stat}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1.5">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="mailto:jane@janedesigner.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-base hover:bg-indigo-600 transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
