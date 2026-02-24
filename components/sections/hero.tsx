import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Background blobs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#6366F1" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#EC4899" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="flex flex-col items-center text-center gap-12">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white"
            style={{ background: "linear-gradient(135deg, #6366F1, #EC4899)" }}
          >
            <Sparkles size={14} aria-hidden="true" />
            <span>Brand Identity & Web Design for Startups</span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight tracking-tight text-balance">
              Brand Identity That{" "}
              <span className="gradient-text">Converts</span> Customers
            </h1>
          </div>

          {/* Subheadline */}
          <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            Creative designer helping startups build memorable brands and
            websites that drive growth and engagement.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
            >
              View My Work
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="mailto:jane@janedesigner.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-foreground bg-secondary border border-border transition-all duration-200 hover:border-primary/40 hover:bg-white hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
          </div>

          {/* Social proof pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" aria-hidden="true" />
              50+ Startups Launched
            </span>
            <span className="w-px h-4 bg-border" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" aria-hidden="true" />
              98% Client Satisfaction
            </span>
            <span className="w-px h-4 bg-border" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" aria-hidden="true" />
              5+ Years Experience
            </span>
          </div>

          {/* Hero image */}
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl shadow-indigo-100 border border-border/50">
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 70%, rgba(254,254,254,0.6) 100%)",
              }}
              aria-hidden="true"
            />
            <Image
              src="https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGJyYW5kaW5nJTIwbWF0ZXJpYWxzfGVufDB8MHx8fDE3NzE5MTM4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Designer workspace with branding materials"
              width={1080}
              height={600}
              className="w-full h-[360px] sm:h-[480px] object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
