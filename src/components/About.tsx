"use client";

import AnimateOnScroll from "./AnimateOnScroll";

type Pillar = {
  title: string;
  verse: string;
  body: string;
  icon: React.ReactNode;
};

const pillars: Pillar[] = [
  {
    title: "Save Souls",
    verse: "II Corinthians 4:1-7",
    body: "It is the duty of every Christian to go out and preach the Gospel to the lost. Law of Liberty Baptist Church is a soul-winning church. We believe and practice door-to-door soul winning and Marketplace Evangelism. We print and distribute FREE King James Bibles as part of our ministry. God wants all people to be saved, therefore we utterly reject Calvinism and Reformed Theology. The unsaved cannot be saved unless they hear God’s Word and are given the choice to believe on Jesus Christ or reject the free gift of eternal life.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 text-brown-light">
        {/* Cross with rays of light */}
        <path d="M32 6v52M16 22h32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 6" opacity="0.5" />
        <path d="M32 8L28 14M32 8l4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Build Believers",
    verse: "Matthew 28:19-20",
    body: "The Local Church has the duty to supply learning opportunities for individual Christians of all ages through teaching, preaching, evangelism training, and congregational music. Building up each individual strengthens the entire body of Christ.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 text-brown-light">
        {/* Open Bible with light coming out */}
        <path d="M8 18 C 16 14, 24 14, 32 18 C 40 14, 48 14, 56 18 L 56 48 C 48 44, 40 44, 32 48 C 24 44, 16 44, 8 48 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M32 18v30" stroke="currentColor" strokeWidth="2" />
        <path d="M32 24l-4 -6M32 24l4 -6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Fortify Families",
    verse: "Ephesians 2:19-22",
    body: "The Church is a family, and each individual comes from a family — so we focus on helping families grow spiritually by encouraging homeschooling and providing practical family instruction rooted in Scripture.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 text-brown-light">
        {/* House with family silhouettes inside */}
        <path d="M8 30 L 32 10 L 56 30 L 56 54 L 8 54 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="24" cy="36" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="40" cy="36" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="46" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
            Why We Exist
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-text-light italic font-serif">
            Save Souls. Build Believers. Fortify Families.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 120}>
              <div className="bg-white rounded-2xl p-8 md:p-9 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all h-full flex flex-col border border-brown-deep/[.04]">
                <div className="mb-5">{p.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-1">
                  {p.title}
                </h3>
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark mb-4">
                  {p.verse}
                </p>
                <p className="text-[0.95rem] text-text-body leading-relaxed flex-1">
                  {p.body}
                </p>
                <a
                  href="/mission"
                  className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-gold-dark hover:text-brown-light transition-colors"
                >
                  Learn More
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12 flex-wrap">
          <a
            href="/history"
            className="text-sm font-semibold text-brown-light hover:text-brown transition-colors"
          >
            Our History
          </a>
          <span className="text-text-muted">&middot;</span>
          <a
            href="/statement-of-faith"
            className="text-sm font-semibold text-brown-light hover:text-brown transition-colors"
          >
            Statement of Faith
          </a>
          <span className="text-text-muted">&middot;</span>
          <a
            href="/pastor"
            className="text-sm font-semibold text-brown-light hover:text-brown transition-colors"
          >
            Meet Our Pastor
          </a>
        </div>
      </div>
    </section>
  );
}
