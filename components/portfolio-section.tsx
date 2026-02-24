import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "TechFlow",
    category: "SaaS Brand Identity",
    description: "Complete rebrand increased user signups by 340% in 3 months",
    stat: "+340%",
    statLabel: "User signups",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=800&h=600&fit=crop&q=80",
    accent: "#6366F1",
    large: true,
  },
  {
    title: "GreenEats",
    category: "Food Delivery Website",
    description: "New website design boosted conversion rates by 180%",
    stat: "+180%",
    statLabel: "Conversion rate",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=80",
    accent: "#06B6D4",
    large: false,
  },
  {
    title: "UrbanFit",
    category: "Fitness Brand + Web",
    description: "Bold rebrand helped secure $2M Series A funding",
    stat: "$2M",
    statLabel: "Series A raised",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
    accent: "#EC4899",
    large: false,
  },
  {
    title: "DataVault",
    category: "B2B SaaS Platform",
    description: "Enterprise-ready design increased demo requests by 250%",
    stat: "+250%",
    statLabel: "Demo requests",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    accent: "#8B5CF6",
    large: true,
  },
]

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-background"
      aria-label="Portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">
            Brands That <span className="text-gradient-primary">Break Through</span>
          </h2>
          <p className="text-xl text-muted-foreground">Real startups. Real results. Real impact.</p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl bg-card border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                project.large ? "md:row-span-1" : ""
              } ${i === 0 ? "md:col-span-1" : ""}`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${project.large ? "h-64 sm:h-72" : "h-48 sm:h-56"}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project showcase`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category pill */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: project.accent }}
                >
                  {project.category}
                </div>

                {/* Arrow on hover */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shadow-lg">
                  <ArrowUpRight size={16} className="text-foreground" aria-hidden="true" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {/* Stat badge */}
                  <div className="flex-shrink-0 text-right">
                    <p
                      className="font-serif text-2xl font-bold"
                      style={{ color: project.accent }}
                    >
                      {project.stat}
                    </p>
                    <p className="text-xs text-muted-foreground">{project.statLabel}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
