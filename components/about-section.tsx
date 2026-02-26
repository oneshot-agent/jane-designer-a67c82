import Image from 'next/image'

const stats = [
  { number: '150+', label: 'Brands Launched' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '3x', label: 'Average ROI Increase' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            {/* Geometric accent */}
            <div
              className="absolute -top-6 -left-6 w-48 h-48 rounded-2xl z-0"
              style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)', opacity: 0.15 }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl z-0"
              style={{ background: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)', opacity: 0.15 }}
              aria-hidden="true"
            />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-white/80">
              <Image
                src="https://images.unsplash.com/photo-1525199896530-b1d87c75c887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGRlc2lnbmVyJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MHwwfHx8MTc3MjE0MjUwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jane Designer — Portrait"
                width={540}
                height={640}
                className="w-full object-cover aspect-[4/5]"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 border border-[#6366F1]/10">
              <p className="font-display font-bold text-2xl text-[#6366F1]">8+</p>
              <p className="text-xs text-[#1E293B]/60 font-medium mt-0.5">Years of Experience</p>
            </div>
          </div>

          {/* Content column */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            {/* Section label */}
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#6366F1]">About Me</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E293B] text-balance leading-tight">
              Transforming Ideas Into{' '}
              <span className="gradient-text-primary">Visual Stories</span>
            </h2>

            <p className="text-[#1E293B]/65 leading-relaxed text-base sm:text-lg">
              I&apos;m Jane Designer, a creative professional with 8+ years of experience
              helping startups establish their visual identity. I specialize in creating
              cohesive brand systems and user-friendly websites that resonate with target
              audiences and drive business growth.
            </p>

            <p className="text-[#1E293B]/65 leading-relaxed">
              My approach blends strategic thinking with visual craft — every design
              decision is grounded in your business goals and your customers&apos; needs.
            </p>

            {/* Skills pills */}
            <div className="flex flex-wrap gap-2">
              {['Brand Strategy', 'Logo Design', 'Web Design', 'Typography', 'UX/UI', 'Motion'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#6366F1]/15 text-[#6366F1]"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-[#1E293B]/10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-display font-bold text-3xl text-[#6366F1]">{stat.number}</span>
                  <span className="text-xs text-[#1E293B]/55 leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
