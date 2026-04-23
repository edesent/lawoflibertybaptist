"use client";

import AnimateOnScroll from "./AnimateOnScroll";

type Card = {
  title: string;
  text: string;
  placeholder: string;
  image?: string;
  href?: string;
  linkLabel?: string;
  iconColor: string;
};

const cards: Card[] = [
  {
    title: "Our History",
    text: "Law of Liberty Baptist Church was planted in Jacksonville with one aim: to preach the Word of God without compromise. What began as a small gathering has grown into a church family committed to the same Gospel that has transformed lives for generations.",
    placeholder: "Church Building",
    href: "/history",
    linkLabel: "Read Our Story",
    iconColor: "#d4a84a",
  },
  {
    title: "Our Beliefs",
    text: "We are an independent, King James Bible-believing Baptist church. The Bible is our final authority for faith and practice. We hold to the fundamentals of the faith — the deity of Christ, salvation by grace through faith, and the eternal security of the believer.",
    placeholder: "Open KJV Bible",
    href: "/statement-of-faith",
    linkLabel: "Read Our Statement of Faith",
    iconColor: "#7a3546",
  },
  {
    title: "Our Mission",
    text: "Save Souls. Build Believers. Fortify Families. Our mission is to reach Jacksonville with the Gospel, disciple believers through the teaching of Scripture, and strengthen the families God has entrusted to us.",
    placeholder: "Family at Worship",
    href: "/mission",
    linkLabel: "Learn About Our Mission",
    iconColor: "#6b2d3e",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Rooted in Scripture, Built on Grace
          </h2>
          <p className="text-lg text-text-light">
            A family-integrated church preaching the King James Bible in Jacksonville, Florida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 120}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="h-56 overflow-hidden">
                  {card.image ? (
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  ) : (
                    <svg viewBox="0 0 400 280" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="280" fill="#efe4cc" />
                      <circle cx="200" cy="140" r="70" fill={card.iconColor} opacity="0.18" />
                      <rect
                        x="150"
                        y="105"
                        width="100"
                        height="70"
                        rx="4"
                        fill={card.iconColor}
                        opacity="0.28"
                      />
                      <text
                        x="200"
                        y="250"
                        textAnchor="middle"
                        fill={card.iconColor}
                        fontSize="12"
                        fontFamily="sans-serif"
                        opacity="0.65"
                      >
                        {card.placeholder}
                      </text>
                    </svg>
                  )}
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[0.92rem] text-text-light leading-relaxed flex-1">
                    {card.text}
                  </p>
                  {card.href && (
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-gold-dark hover:text-brown-light transition-colors"
                    >
                      {card.linkLabel || "Learn More"}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
