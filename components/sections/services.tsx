import { Palette, Monitor, Package, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const services: Service[] = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    description:
      "Complete visual identity systems including logos, color palettes, typography, and brand guidelines that establish market presence.",
    features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography Selection"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: Monitor,
    title: "Web Design & Development",
    description:
      "Responsive websites that convert visitors into customers, optimized for user experience and business objectives.",
    features: ["Responsive Design", "User Experience", "Conversion Optimization", "Content Management"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Package,
    title: "Complete Brand Packages",
    description:
      "End-to-end branding solutions combining identity design and web presence for comprehensive market launch.",
    features: ["Brand Strategy", "Visual Identity", "Website Design", "Marketing Materials"],
    gradient: "from-violet-500 to-indigo-600",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase gradient-text-subtle mb-4">
            Services
          </p>
          <h2
            id="services-heading"
            className="font-serif text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance"
          >
            Design Services That{" "}
            <span className="gradient-text">Accelerate Growth</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="card-hover group relative flex flex-col gap-6 p-8 rounded-2xl bg-white border border-border/60 shadow-sm overflow-hidden"
            >
              {/* Top gradient line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${service.gradient} shadow-lg`}
                aria-hidden="true"
              >
                <service.icon size={24} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2 mt-auto" role="list">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${service.gradient}`}
                      aria-hidden="true"
                    >
                      <Check size={11} className="text-white" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Number label */}
              <span
                className="absolute top-6 right-6 text-6xl font-bold font-serif opacity-5 text-foreground select-none"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
