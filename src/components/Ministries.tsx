"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const ministries = [
  {
    title: "Children&rsquo;s Ministry",
    desc: "A nursery for little ones and age-appropriate Sunday School classes where children learn Scripture, sing hymns, and hear Bible stories.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-brown-light">
        <path d="M32 12c-6 0-10 4-10 9s4 9 10 9 10-4 10-9-4-9-10-9zM16 48c0-8 7-14 16-14s16 6 16 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="48" cy="22" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M50 34c5 1 10 5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Soul-Winning",
    desc: "We believe every Christian is called to share the Gospel. Join our soul-winning teams as we take the good news to our community.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-brown-light">
        <path d="M8 48c4-16 12-24 24-24s20 8 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 24V8M32 8l-6 8M32 8l6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Adult Bible Study",
    desc: "Weekly verse-by-verse teaching of God&rsquo;s Word. Grow deeper in your understanding of Scripture alongside your church family.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-brown-light">
        <rect x="10" y="16" width="44" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 28h28M18 36h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 22h44" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Traditional Music",
    desc: "Congregational singing of the great hymns of the faith, accompanied by piano and enriched with special music from our church family.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-brown-light">
        <circle cx="20" cy="44" r="8" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="44" cy="38" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M28 44V16l24-6v28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Family-Integrated Worship",
    desc: "Families worship together in every service. We encourage parents to disciple their children and keep the next generation under sound preaching.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-brown-light">
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="44" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="40" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M10 40c0-6 5-10 10-10s10 4 10 10M34 40c0-6 5-10 10-10s10 4 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Bible Distribution",
    desc: "We give out King James Bibles freely to our community — because every person deserves the chance to hold God&rsquo;s Word in their own hands.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-brown-light">
        <path d="M14 10h28a4 4 0 0 1 4 4v40H14z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M14 50h32a4 4 0 0 0-4-4H14" stroke="currentColor" strokeWidth="2.5" />
        <path d="M30 20v14M23 27h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Ministries() {
  return (
    <section id="ministries" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
            Get Involved
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Our Ministries
          </h2>
          <p className="text-lg text-text-light">
            There&rsquo;s a place for everyone at Law of Liberty Baptist Church.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {ministries.map((m, i) => (
            <AnimateOnScroll key={m.title} delay={i * 80}>
              <div className="bg-white border border-brown-deep/[.05] rounded-2xl p-9 text-center hover:-translate-y-1 hover:shadow-lg hover:border-gold-light transition-all h-full">
                <div className="flex justify-center mb-5">{m.icon}</div>
                <h3
                  className="font-serif text-xl font-semibold text-text-dark mb-3"
                  dangerouslySetInnerHTML={{ __html: m.title }}
                />
                <p
                  className="text-[0.92rem] text-text-light leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: m.desc }}
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
