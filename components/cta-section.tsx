import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

export function CtaSection() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-background"
      aria-label="Start your project"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1695067058684-da5a90013c57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbGxhYm9yYXRpb24lMjBkZXNpZ24lMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MHwwfHx8MTc3MTk2Njg3NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-purple-600/85 to-secondary/90" />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
            {/* Grid dots */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center py-20 px-6 sm:px-12 lg:px-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-4">
              Let&apos;s Build Together
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance mb-6 leading-tight">
              Ready to Build a Brand{" "}
              <span className="text-accent">That Wins?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 text-pretty leading-relaxed">
              Stop blending in. Start standing out. Let&apos;s create something bold together.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:jane@janedesigner.com"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-foreground bg-white hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-accent/40 transition-all duration-200 group"
              >
                <Mail size={18} aria-hidden="true" />
                Start Your Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                View Portfolio
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-10 text-sm text-white/60">
              No commitment required · Free 30-min discovery call · Response within 24hrs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
