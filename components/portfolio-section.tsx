import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  category: string
  description: string
  image: string
  alt: string
  span?: string
}

const projects: Project[] = [
  {
    title: 'TechFlow Startup',
    category: 'Brand Identity & Web Design',
    description:
      'Complete brand overhaul resulting in 150% increase in user engagement and successful Series A funding.',
    image:
      'https://images.unsplash.com/photo-1763630730206-2c3a5d6c82d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBzaG93Y2FzZSUyMGRlc2lnbiUyMHByb2plY3RzJTIwY3JlYXRpdmUlMjB3b3JrfGVufDB8MHx8fDE3NzIxNDE5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'TechFlow Startup brand identity and web design project showcase',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'GreenSpace App',
    category: 'Web Design',
    description:
      'Responsive web platform design that improved conversion rates by 85% within first quarter.',
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    alt: 'GreenSpace App eco-friendly web design project',
    span: '',
  },
  {
    title: 'FinNext Solutions',
    category: 'Brand Identity',
    description:
      'Professional fintech branding that established market credibility and attracted enterprise clients.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    alt: 'FinNext Solutions fintech branding project',
    span: '',
  },
]

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="section-pad bg-background"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wide uppercase mb-4">
            Portfolio
          </div>
          <h2
            id="portfolio-heading"
            className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight text-balance mb-4"
          >
            Recent Projects
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed text-balance">
            Explore brand identities and websites I&apos;ve crafted for innovative startups
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden bg-card border border-border card-hover shadow-sm cursor-pointer ${project.span ?? ''}`}
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300" />

              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-foreground">
                  {project.category}
                </span>
              </div>

              {/* Arrow icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-serif font-bold text-white text-xl mb-1">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
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
