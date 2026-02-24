"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  rating: number;
  initials: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Jane's brand design transformed how customers perceive our startup. We went from unknown to industry leader in 6 months.",
    author: "Sarah Chen",
    title: "CEO, TechFlow",
    rating: 5,
    initials: "SC",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    quote:
      "The website Jane designed increased our conversion rate by 85%. Her understanding of user psychology is exceptional.",
    author: "Michael Rodriguez",
    title: "Founder, DataViz Pro",
    rating: 5,
    initials: "MR",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    quote:
      "Professional, creative, and results-driven. Jane delivered a complete brand identity that helped us secure funding.",
    author: "Emma Thompson",
    title: "Co-founder, GreenSpace Co.",
    rating: 5,
    initials: "ET",
    gradient: "from-violet-500 to-indigo-600",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-secondary/40 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase gradient-text-subtle mb-4">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            What Startup{" "}
            <span className="gradient-text">Founders Say</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div
            className="relative bg-white rounded-3xl p-8 sm:p-12 border border-border/60 shadow-xl shadow-indigo-50"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Quote icon */}
            <div
              className="absolute -top-5 left-10 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
              style={{ background: "linear-gradient(135deg, #6366F1, #EC4899)" }}
              aria-hidden="true"
            >
              <Quote size={20} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg" aria-hidden="true">
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <blockquote>
              <p className="font-serif text-xl sm:text-2xl font-medium text-foreground leading-relaxed text-balance mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-serif text-lg font-bold text-white bg-gradient-to-br ${t.gradient} flex-shrink-0`}
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2.5 bg-primary"
                      : "w-2.5 h-2.5 bg-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* All cards (desktop) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.author}
              onClick={() => setCurrent(i)}
              className={`text-left p-6 rounded-2xl border transition-all duration-200 ${
                i === current
                  ? "border-primary/40 bg-white shadow-md shadow-indigo-50"
                  : "border-border/60 bg-white/60 hover:bg-white hover:border-border"
              }`}
              aria-label={`Show testimonial from ${testimonial.author}`}
              aria-pressed={i === current}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm font-bold text-white bg-gradient-to-br ${testimonial.gradient} flex-shrink-0`}
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {testimonial.quote}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
