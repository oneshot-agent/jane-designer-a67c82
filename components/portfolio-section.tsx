import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'TechFlow Startup',
    category: 'Brand Identity & Web Design',
    description:
      'Complete rebrand and website redesign resulting in 200% increase in qualified leads within 6 months.',
    accent: 'var(--brand-primary)',
    span: 'lg:col-span-2',
  },
  {
    title: 'GreenSpace Co.',
    category: 'Brand Identity',
    description:
      'Sustainable brand identity that helped secure $2M in Series A funding and establish market credibility.',
    accent: 'var(--brand-secondary)',
    span: '',
  },
  {
    title: 'DataSync Solutions',
    category: 'Web Design',
    description:
      'B2B SaaS website that improved conversion rates by 150% and reduced bounce rate by 40%.',
    accent: 'var(--brand-accent)',
    span: '',
  },
  {
    title: 'Wellness Hub',
    category: 'Complete Brand Package',
    description:
      'End-to-end branding and digital presence that launched successfully with 1000+ users in first month.',
    accent: 'var(--brand-primary)',
    span: 'lg:col-span-2',
  },
]

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 md:py-32"
      style={{ background: 'var(--brand-surface)' }}
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: 'var(--brand-primary)' }}
            >
              Portfolio
            </span>
            <h2
              id="portfolio-heading"
              className="font-serif text-4xl md:text-5xl font-bold leading-tight text-balance"
              style={{ color: 'var(--brand-text)' }}
            >
              Recent{' '}
              <span className="text-gradient-primary">Success Stories</span>
            </h2>
          </div>
          <p
            className="text-base leading-relaxed max-w-sm"
            style={{ color: 'var(--brand-text-muted)' }}
          >
            A selection of projects that delivered measurable results for startup clients.
          </p>
        </div>

        {/* Portfolio image showcase */}
        <div className="relative w-full rounded-2xl overflow-hidden aspect-video">
          <Image
            src="https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHByb2plY3RzfGVufDB8MHx8fDE3NzIxMjg4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Portfolio mockups showcasing brand identity and web design projects"
            width={1080}
            height={600}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(99,102,241,0.15) 0%, transparent 50%, rgba(236,72,153,0.1) 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative flex flex-col justify-between p-7 rounded-2xl border card-hover overflow-hidden ${project.span}`}
              style={{
                background: 'var(--brand-bg)',
                borderColor: 'var(--brand-border)',
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 h-1 w-full"
                style={{ background: project.accent }}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: project.accent }}
                    >
                      {project.category}
                    </span>
                    <h3
                      className="font-serif text-xl font-bold"
                      style={{ color: 'var(--brand-text)' }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-200 group-hover:scale-110"
                    style={{
                      borderColor: project.accent,
                      color: project.accent,
                    }}
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--brand-text-muted)' }}
                >
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
