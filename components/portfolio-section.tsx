import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'TechFlow Startup',
    category: 'Brand Identity & Web Design',
    description:
      'Complete rebrand resulted in 300% increase in investor interest and successful Series A funding.',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop&q=80',
    accent: 'from-[#6366F1] to-[#818CF8]',
    stat: '300% ROI',
    tall: true,
  },
  {
    title: 'GreenSpace Co',
    category: 'Web Design',
    description:
      'E-commerce platform design drove 250% increase in online sales within first quarter.',
    image:
      'https://images.unsplash.com/photo-1542601906897-ecd2f1c36f53?w=800&h=500&fit=crop&q=80',
    accent: 'from-[#10B981] to-[#34D399]',
    stat: '250% Sales',
    tall: false,
  },
  {
    title: 'FinTech Revolution',
    category: 'Brand Identity',
    description:
      'Bold financial brand identity that disrupted traditional banking and attracted 10k+ users in 30 days.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&q=80',
    accent: 'from-[#EC4899] to-[#F472B6]',
    stat: '10k+ Users',
    tall: false,
  },
  {
    title: 'FoodieApp',
    category: 'Web Design',
    description:
      'Mobile-first web design increased user engagement by 180% and app downloads by 400%.',
    image:
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop&q=80',
    accent: 'from-[#F59E0B] to-[#FCD34D]',
    stat: '400% Downloads',
    tall: true,
  },
]

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 lg:px-8"
      style={{ background: 'linear-gradient(180deg, #F8FAFF 0%, #FAFBFF 100%)' }}
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest">
              Portfolio
            </span>
            <h2
              id="portfolio-heading"
              className="font-display font-bold text-4xl sm:text-5xl text-foreground text-balance"
            >
              Brands I've{' '}
              <span className="gradient-text">Transformed</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground leading-relaxed md:text-right">
            Real results for real startups — from seed stage to Series A.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                project.tall ? 'md:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  project.tall ? 'h-72 md:h-[460px]' : 'h-56'
                }`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} design project`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
                {/* Stat badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${project.accent} text-white text-xs font-bold shadow-lg`}
                >
                  {project.stat}
                </div>
                {/* Hover arrow */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-foreground" aria-hidden="true" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-2">
                <span
                  className={`text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}
                >
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-xl text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom image showcase */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl border border-border">
          <Image
            src="https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBzaG93Y2FzZSUyMGRlc2lnbiUyMHByb2plY3RzfGVufDB8MHx8fDE3NzMwMTEzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Portfolio showcase featuring multiple design projects"
            width={1080}
            height={480}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
