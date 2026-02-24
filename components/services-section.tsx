import { Palette, Monitor, Package, Check } from "lucide-react"

const services = [
  {
    Icon: Palette,
    title: "Brand Identity Design",
    description:
      "Logo, colors, typography, and brand guidelines that make your startup unforgettable",
    features: ["Logo design", "Brand guidelines", "Business card design", "Social media assets"],
    price: "From $3,500",
    popular: false,
    accent: "primary",
    accentHex: "#6366F1",
    border: "border-border",
    bg: "bg-card",
  },
  {
    Icon: Monitor,
    title: "Website Design & Development",
    description:
      "High-converting websites that turn visitors into customers and investors into believers",
    features: ["Custom web design", "Mobile optimization", "CRO-focused layouts", "Launch support"],
    price: "From $6,500",
    popular: false,
    accent: "secondary",
    accentHex: "#EC4899",
    border: "border-border",
    bg: "bg-card",
  },
  {
    Icon: Package,
    title: "Complete Brand Package",
    description: "Full brand identity + website combo for startups ready to dominate their market",
    features: [
      "Everything above",
      "Brand strategy session",
      "3 months support",
      "Priority timeline",
    ],
    price: "From $9,500",
    popular: true,
    accent: "accent",
    accentHex: "#06B6D4",
    border: "border-accent/40",
    bg: "bg-card",
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-gradient-subtle"
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            Services
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Services That{" "}
            <span className="text-gradient-primary">Scale Your Success</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ Icon, title, description, features, price, popular, accentHex, border, bg }) => (
            <article
              key={title}
              className={`relative rounded-3xl border-2 ${border} ${bg} p-8 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                popular ? "shadow-xl" : ""
              }`}
            >
              {/* Popular badge */}
              {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-brand text-white text-xs font-bold tracking-wide shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div
                className="inline-flex p-3 rounded-2xl mb-6 w-fit"
                style={{ backgroundColor: `${accentHex}18` }}
              >
                <Icon
                  className="w-7 h-7"
                  style={{ color: accentHex }}
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{description}</p>

              {/* Feature list */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${accentHex}18` }}
                      aria-hidden="true"
                    >
                      <Check size={11} style={{ color: accentHex }} />
                    </span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-1">Starting at</p>
                <p
                  className="font-serif text-2xl font-bold mb-4"
                  style={{ color: accentHex }}
                >
                  {price}
                </p>
                <a
                  href="mailto:jane@janedesigner.com"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg text-white"
                  style={{ backgroundColor: accentHex }}
                >
                  Get Started
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
