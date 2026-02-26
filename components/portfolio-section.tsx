import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'TechFlow Startup',
    category: 'Brand Identity & Web Design',
    description:
      'Complete rebrand and website redesign resulting in 250% increase in lead generation within 6 months.',
    tags: ['SaaS', 'B2B', 'Tech'],
    result: '+250% leads',
    color: '#6366F1',
  },
  {
    title: 'GreenSpace Co.',
    category: 'Brand Identity',
    description:
      'Sustainable brand identity for eco-friendly startup, leading to successful $2M seed funding round.',
    tags: ['Sustainability', 'B2C', 'Retail'],
    result: '$2M Seed Raise',
    color: '#10B981',
  },
  {
    title: 'DataViz Platform',
    category: 'Web Design',
    description:
      'User-centered website design that improved user engagement by 180% and reduced bounce rate by 45%.',
    tags: ['Analytics', 'B2B', 'Platform'],
    result: '+180% engagement',
    color: '#EC4899',
  },
  {
    title: 'HealthTech Innovators',
    category: 'Complete Branding',
    description:
      'End-to-end branding solution from naming to digital presence, facilitating successful market entry.',
    tags: ['Healthcare', 'B2B', 'Innovation'],
    result: 'Successful Launch',
    color: '#8B5CF6',
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#6366F1]">Portfolio</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E293B] text-balance leading-tight">
              Recent Work That{' '}
              <span className="gradient-text-primary">Delivers Results</span>
            </h2>
          </div>
          <p className="text-[#1E293B]/60 max-w-xs sm:text-right leading-relaxed text-sm">
            Every project is built around measurable outcomes and strategic clarity.
          </p>
        </div>

        {/* Featured image */}
        <div className="relative mb-10 rounded-2xl overflow-hidden shadow-xl border border-white/80 aspect-[16/6]">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
            alt="Portfolio preview — creative design work samples"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8">
            <p className="text-white/80 text-sm font-medium">Selected Work — 2024</p>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative bg-white rounded-2xl border border-[#1E293B]/8 p-7 hover:shadow-xl hover:shadow-[#6366F1]/8 hover:border-[#6366F1]/25 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: project.color }}>
                    {project.category}
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#1E293B]">{project.title}</h3>
                </div>
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: project.color + '18' }}
                  aria-hidden="true"
                >
                  <ArrowUpRight size={16} style={{ color: project.color }} />
                </span>
              </div>

              <p className="text-sm text-[#1E293B]/60 leading-relaxed mb-5">{project.description}</p>

              {/* Footer row */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#F1F5F9] text-[#1E293B]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: project.color + '15', color: project.color }}
                >
                  {project.result}
                </span>
              </div>

              {/* Colored strip on left edge */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ backgroundColor: project.color }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
