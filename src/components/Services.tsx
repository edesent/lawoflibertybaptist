"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Sunday School",
    time: "10:00 AM",
    desc: "Bible study classes for all ages — children, teens, and adults learning the Word together.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14 text-gold">
        <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 18h20M14 24h20M14 30h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Morning Worship",
    time: "11:00 AM",
    desc: "Family-integrated worship with traditional hymns, prayer, and verse-by-verse KJV preaching.",
    featured: true,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14 text-gold">
        <path d="M24 4 L34 14 L34 32 L38 36 L38 44 L10 44 L10 36 L14 32 L14 14 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M24 12 V22 M19 17 H29" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Sunday Evening",
    time: "5:00 PM",
    desc: "An evening service with hymns, testimony, and preaching — a perfect way to close the Lord&rsquo;s Day.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14 text-gold">
        <path d="M32 24a8 8 0 1 1-8-8 6 6 0 0 0 8 8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M40 12l-2 2M38 24h3M14 40l-2 2M10 30H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Wednesday Night",
    time: "7:00 PM",
    desc: "Midweek Bible study and prayer meeting. Recharge, fellowship, and grow deeper in the Word.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14 text-gold">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 18h36M16 10V6M32 10V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 1920 800" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="servBg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a1118" />
              <stop offset="100%" stopColor="#1a0b10" />
            </linearGradient>
          </defs>
          <rect width="1920" height="800" fill="url(#servBg)" />
          <circle cx="960" cy="400" r="320" fill="rgba(212,168,74,0.05)" />
          <circle cx="960" cy="400" r="180" fill="rgba(212,168,74,0.05)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(42,17,24,0.92)] to-[rgba(26,11,16,0.96)] z-[1]" />

      <div className="relative z-[2] max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-light mb-3">
            Join Us in Worship
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Service Times
          </h2>
          <p className="text-lg text-white/60">
            We&rsquo;d love to see you at any of our weekly services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 80}>
              <div
                className={`relative rounded-2xl p-7 text-center transition-all hover:-translate-y-1 hover:shadow-2xl h-full ${
                  s.featured
                    ? "bg-gold/[.12] border border-gold/25"
                    : "bg-white/[.06] border border-white/[.08] hover:bg-white/10"
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-brown-deep text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1 rounded-full">
                    Main Service
                  </span>
                )}
                <div className="flex justify-center mb-5">{s.icon}</div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-2xl font-bold text-gold mb-3">{s.time}</p>
                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
