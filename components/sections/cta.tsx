import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function CtaSection() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Light blobs */}
      <div
        className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "white" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "white" }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-8">
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
            aria-hidden="true"
          >
            <Mail size={28} className="text-white" />
          </div>

          <div className="flex flex-col gap-4">
            <h2
              id="cta-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance"
            >
              Ready to Build Your Brand?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed text-pretty">
              Let&apos;s create a visual identity that sets your startup apart and
              drives measurable business growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="mailto:jane@janedesigner.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-foreground bg-white transition-all duration-200 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/40 hover:bg-white/10 hover:border-white/60 transition-all duration-200 hover:-translate-y-0.5"
            >
              View Portfolio
            </Link>
          </div>

          {/* Social proof */}
          <p className="text-white/60 text-sm">
            No commitment required &bull; Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
