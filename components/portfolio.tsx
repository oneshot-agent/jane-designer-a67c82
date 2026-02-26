import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  size: 'tall' | 'normal'
  gradient: string
  textColor: string
}

const projects: Project[] = [
  {
    title: 'TechFlow Startup',
    category: 'Brand Identity & Web Design',
    description:
      'Complete rebrand and website redesign that increased user engagement by 150% and conversion rates by 85%.',
    tags: ['Branding', 'Web Design', 'UX/UI'],
    size: 'tall',
    gradient: 'linear-gradient(145deg, #6366F1 0%, #4F46E5 100%)',
    textColor: '#fff',
  },
  {
    title: 'GreenLeaf Organics',
    category: 'E-commerce Design',
    description:
      'Sustainable brand identity and e-commerce platform that boosted online sales by 200% in first quarter.',
    tags: ['E-commerce', 'Branding', 'Sustainability'],
    size: 'normal',
    gradient: 'linear-gradient(145deg, #10B981 0%, #059669 100%)',
    textColor: '#fff',
  },
  {
    title: 'DataViz Pro',
    category: 'SaaS Branding',
    description:
      'Modern brand identity and landing page design that improved lead generation by 120% for B2B SaaS startup.',
    tags: ['SaaS', 'B2B', 'Lead Generation'],
    size: 'normal',
    gradient: 'linear-gradient(145deg, #F59E0B 0%, #D97706 100%)',
    textColor: '#fff',
  },
  {
    title: 'Wellness Connect',
    category: 'Mobile App Design',
    description:
      'User-centered app design and branding for health tech startup, achieving 4.8 app store rating.',
    tags: ['Mobile App', 'Health Tech', 'UX Design'],
    size: 'tall',
    gradient: 'linear-gradient(145deg, #8B5CF6 0%, #7C3AED 100%)',
    textColor: '#fff',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            Selected Work
          </div>
          <h2
            id="portfolio-heading"
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-balance text-foreground"
          >
            Recent Projects That{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
            >
              Delivered Results
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A curated selection of brand identity and web design projects for ambitious startups
            across industries.
          </p>
        </div>

        {/* Portfolio featured image */}
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-lg aspect-[16/6]">
          <Image
            src="https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHN0YXJ0dXAlMjBwcm9qZWN0c3xlbnwwfDB8fHwxNzcyMTQyNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Design portfolio showcase — brand identity and web design projects"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, transparent 40%, rgba(30,41,59,0.7) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <p className="font-heading font-bold text-2xl text-white">Design Portfolio 2024–2025</p>
            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              View All Work
            </span>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-end ${
                project.size === 'tall' ? 'row-span-1 lg:row-span-2 sm:min-h-[360px] lg:min-h-[420px]' : 'min-h-[260px]'
              }`}
              style={{ background: project.gradient }}
            >
              {/* Background pattern */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at ${i % 2 === 0 ? '20% 80%' : '80% 20%'}, rgba(255,255,255,0.4) 0%, transparent 50%)`,
                }}
              />

              {/* Number */}
              <div
                aria-hidden="true"
                className="absolute top-5 right-5 font-heading font-bold text-6xl opacity-10 text-white leading-none select-none"
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative p-6 flex flex-col gap-3">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm border border-white/30"
                      style={{ color: project.textColor }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-medium opacity-75 mb-1" style={{ color: project.textColor }}>
                    {project.category}
                  </p>
                  <h3
                    className="font-heading font-bold text-lg leading-snug"
                    style={{ color: project.textColor }}
                  >
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed opacity-80" style={{ color: project.textColor }}>
                  {project.description}
                </p>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-fit"
                  style={{ color: project.textColor }}
                  aria-label={`View ${project.title} case study`}
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
