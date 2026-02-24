import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  span?: "wide" | "normal";
}

const projects: Project[] = [
  {
    title: "TechFlow Startup",
    category: "Brand Identity & Web Design",
    description:
      "Complete rebrand and website redesign that increased lead generation by 150% in 3 months.",
    tags: ["Branding", "Web Design", "SaaS"],
    span: "wide",
  },
  {
    title: "GreenSpace Co.",
    category: "Brand Identity",
    description:
      "Sustainable brand identity that helped secure $2M in Series A funding.",
    tags: ["Logo Design", "Brand Guidelines", "Sustainability"],
  },
  {
    title: "DataViz Pro",
    category: "Web Design",
    description:
      "User-focused website redesign that improved conversion rates by 85%.",
    tags: ["UX Design", "Web Development", "Analytics"],
  },
  {
    title: "FoodieConnect",
    category: "Complete Brand Package",
    description:
      "Full brand launch package for food tech startup, from concept to market.",
    tags: ["Brand Strategy", "Visual Identity", "Web Platform"],
    span: "wide",
  },
];

const tagColors: Record<string, string> = {
  Branding: "bg-indigo-50 text-indigo-700 border-indigo-100",
  "Web Design": "bg-pink-50 text-pink-700 border-pink-100",
  SaaS: "bg-violet-50 text-violet-700 border-violet-100",
  "Logo Design": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Brand Guidelines": "bg-indigo-50 text-indigo-700 border-indigo-100",
  Sustainability: "bg-green-50 text-green-700 border-green-100",
  "UX Design": "bg-blue-50 text-blue-700 border-blue-100",
  "Web Development": "bg-cyan-50 text-cyan-700 border-cyan-100",
  Analytics: "bg-orange-50 text-orange-700 border-orange-100",
  "Brand Strategy": "bg-violet-50 text-violet-700 border-violet-100",
  "Visual Identity": "bg-pink-50 text-pink-700 border-pink-100",
  "Web Platform": "bg-indigo-50 text-indigo-700 border-indigo-100",
};

const gradients = [
  "from-indigo-400 via-purple-400 to-pink-400",
  "from-emerald-400 via-teal-400 to-cyan-400",
  "from-blue-400 via-indigo-400 to-violet-400",
  "from-pink-400 via-rose-400 to-orange-400",
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-secondary/40"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase gradient-text-subtle mb-4">
              Portfolio
            </p>
            <h2
              id="portfolio-heading"
              className="font-serif text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              Recent Projects That{" "}
              <span className="gradient-text">Delivered Results</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-right hidden sm:block text-sm leading-relaxed">
            Each project is a story of strategy meeting creativity to produce measurable impact.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`card-hover group relative rounded-2xl overflow-hidden bg-white border border-border/60 shadow-sm ${
                project.span === "wide" ? "md:col-span-1" : ""
              }`}
            >
              {/* Gradient image placeholder */}
              <div
                className={`relative h-52 sm:h-64 bg-gradient-to-br ${gradients[i]} flex items-end p-6 overflow-hidden`}
                aria-hidden="true"
              >
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20">
                  <Image
                    src="https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwb3J0Zm9saW8lMjBicmFuZCUyMGlkZW50aXR5JTIwd2ViJTIwZGVzaWduJTIwcHJvamVjdHN8ZW58MHwwfHx8MTc3MTkxMzg3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt=""
                    fill
                    className="object-cover mix-blend-overlay"
                  />
                </div>
                <span className="relative z-10 font-serif text-4xl font-bold text-white/30 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Arrow icon on hover */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} className="text-white" aria-hidden="true" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                        tagColors[tag] ?? "bg-secondary text-foreground border-border"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
