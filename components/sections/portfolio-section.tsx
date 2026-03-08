import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  span: string
}

const projects: Project[] = [
  {
    title: 'TechFlow SaaS Platform',
    category: 'Brand Identity & Web Design',
    description: 'Complete rebrand increased user signups by 240% in first quarter',
    tags: ['Brand Identity', 'Web Design', 'SaaS'],
    span: 'md:col-span-2',
  },
  {
    title: 'GreenStart Sustainability App',
    category: 'Brand Identity & Mobile Design',
    description: 'Fresh brand helped secure $2M seed funding within 6 months',
    tags: ['Brand Identity', 'App Design', 'Sustainability'],
    span: 'md:col-span-1',
  },
  {
    title: 'DataPulse Analytics Dashboard',
    category: 'Web Design & UX',
    description: 'Redesigned interface reduced user onboarding time by 60%',
    tags: ['Web Design', 'UX/UI', 'Analytics'],
    span: 'md:col-span-1',
  },
  {
    title: 'LocalEats Food Delivery',
    category: 'Brand Identity & Web Design',
    description: 'Brand refresh led to 180% increase in restaurant partnerships',
    tags: ['Brand Identity', 'Web Design', 'Food Tech'],
    span: 'md:col-span-2',
  },
]

const tagColors: Record<string, string> = {
  'Brand Identity': 'bg-[#EEF2FF] text-[var(--brand-primary)]',
  'Web Design': 'bg-[#FDF2F8] text-[var(--brand-accent)]',
  'SaaS': 'bg-[#F0FDF4] text-[#16A34A]',
  'App Design': 'bg-[#FFF7ED] text-[#EA580C]',
  'Sustainability': 'bg-[#F0FDF4] text-[#16A34A]',
  'UX/UI': 'bg-[#F0F9FF] text-[#0284C7]',
  'Analytics': 'bg-[#EEF2FF] text-[var(--brand-primary)]',
  'Food Tech': 'bg-[#FFF7ED] text-[#EA580C]',
}

const projectColors = [
  { gradient: 'from-[#EEF2FF] to-[#FDF2F8]', accent: '#6366F1' },
  { gradient: 'from-[#F0FDF4] to-[#ECFDF5]', accent: '#16A34A' },
  { gradient: 'from-[#F0F9FF] to-[#EFF6FF]', accent: '#0284C7' },
  { gradient: 'from-[#FFF7ED] to-[#FDF2F8]', accent: '#EA580C' },
]

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-widest mb-3">
              Portfolio
            </span>
            <h2
              id="portfolio-heading"
              className="font-heading text-4xl lg:text-5xl font-bold text-[var(--brand-text)] tracking-tight text-balance max-w-lg"
            >
              Recent Projects That{' '}
              <span className="text-gradient-primary">Drove Results</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHByb2plY3RzfGVufDB8MHx8fDE3NzMwMDgzOTN8MA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Portfolio mockups"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const colors = projectColors[i % projectColors.length]
            return (
              <article
                key={project.title}
                className={`group relative rounded-2xl overflow-hidden border border-[var(--brand-border)] hover:border-transparent hover:shadow-brand-lg transition-all duration-300 cursor-pointer ${project.span}`}
              >
                {/* Background gradient */}
                <div className={`bg-gradient-to-br ${colors.gradient} p-8 pb-6 min-h-[260px] flex flex-col justify-between`}>
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[var(--brand-text-muted)] uppercase tracking-wider mb-2">
                        {project.category}
                      </p>
                      <h3 className="font-heading text-xl font-bold text-[var(--brand-text)] leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <button
                      aria-label={`View ${project.title} project`}
                      className="w-10 h-10 rounded-full bg-white/70 hover:bg-white flex items-center justify-center group-hover:bg-white transition-colors duration-200 flex-shrink-0 ml-4 shadow-sm"
                    >
                      <ArrowUpRight className="w-5 h-5 text-[var(--brand-text)]" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Bottom */}
                  <div>
                    <p className="text-sm text-[var(--brand-text-muted)] mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[tag] ?? 'bg-white text-[var(--brand-text-muted)]'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
