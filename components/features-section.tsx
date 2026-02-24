import { Rocket, Target, Zap } from "lucide-react"

const features = [
  {
    Icon: Rocket,
    title: "Launch-Ready in 4 Weeks",
    description:
      "Complete brand identity and website delivered fast, so you can start making sales immediately.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    shadow: "hover:shadow-primary/20",
  },
  {
    Icon: Target,
    title: "Conversion-Focused Design",
    description:
      "Every pixel serves a purpose. My designs don't just look good—they turn visitors into customers.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    shadow: "hover:shadow-secondary/20",
  },
  {
    Icon: Zap,
    title: "Startup DNA",
    description:
      "I speak startup. No corporate bureaucracy, just bold decisions and results that fuel your growth.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    shadow: "hover:shadow-accent/20",
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 lg:py-32 bg-gradient-subtle"
      aria-label="Why startups choose Jane"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Why Jane
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Why Startups <span className="text-gradient-primary">Choose Jane</span>
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ Icon, title, description, color, bg, border, shadow }) => (
            <article
              key={title}
              className={`relative bg-card rounded-3xl p-8 border ${border} hover:shadow-xl ${shadow} transition-all duration-300 hover:-translate-y-1 group`}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-2xl ${bg} mb-6`}>
                <Icon className={`w-7 h-7 ${color}`} aria-hidden="true" />
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>

              {/* Hover accent line */}
              <div
                className={`absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${bg} scale-x-0 group-hover:scale-x-100 origin-left`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
