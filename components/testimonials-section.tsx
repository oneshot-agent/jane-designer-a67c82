"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Jane didn't just design our brand—she understood our vision and made it impossible to ignore. Our investor meetings went from 'maybe' to 'hell yes.'",
    author: "Sarah Chen",
    title: "CEO, TechFlow",
    rating: 5,
    initials: "SC",
    color: "#6366F1",
  },
  {
    quote:
      "Finally, a designer who gets startups. No endless revisions, no creative ego—just bold work that sells.",
    author: "Marcus Rodriguez",
    title: "Founder, UrbanFit",
    rating: 5,
    initials: "MR",
    color: "#EC4899",
  },
  {
    quote:
      "Our conversion rate doubled within a month of launching Jane's design. The ROI speaks for itself.",
    author: "Emily Watson",
    title: "CMO, GreenEats",
    rating: 5,
    initials: "EW",
    color: "#06B6D4",
  },
]

export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = useCallback(() => {
    setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  }, [])

  const next = useCallback(() => {
    setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))
  }, [])

  const current = testimonials[active]

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)" }}
      aria-label="Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — image */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 rounded-3xl bg-white/10 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                alt="Founders collaborating on brand design"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />
            </div>
            {/* Floating quote card */}
            <div className="absolute -right-8 -bottom-8 bg-white rounded-2xl p-5 shadow-2xl max-w-[220px]">
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-medium">
                "Best design investment we've ever made."
              </p>
              <p className="text-xs font-bold text-foreground mt-1">— Series A Founder</p>
            </div>
          </div>

          {/* Right — carousel */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white text-balance mb-12">
              Founders Love Working With Jane
            </h2>

            {/* Testimonial card */}
            <div
              key={active}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 relative"
              aria-live="polite"
              aria-atomic="true"
            >
              <Quote
                className="absolute top-6 right-6 text-white/20 w-12 h-12"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label={`${current.rating} out of 5 stars`}>
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-white leading-relaxed mb-8 text-pretty">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 border-2 border-white/30"
                  style={{ backgroundColor: current.color }}
                  aria-hidden="true"
                >
                  {current.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{current.author}</p>
                  <p className="text-sm text-white/70">{current.title}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="flex gap-2 ml-2" role="tablist" aria-label="Testimonial slides">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
