import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "The mission of Law of Liberty Baptist Church in Jacksonville, FL: Save Souls, Build Believers, Fortify Families. Bible preaching, soul-winning, and discipleship for every generation.",
};

const pillars = [
  {
    title: "Save Souls",
    verse: "Mark 16:15",
    body: "We preach the Gospel that Jesus Christ died for our sins, was buried, and rose again. Every week we call men, women, and children to trust Christ — on Sundays at church, on Saturdays in the neighborhoods of Jacksonville, and online wherever the Lord sends the message.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 text-gold">
        <path d="M32 8 C 18 20, 14 34, 32 56 C 50 34, 46 20, 32 8 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="32" cy="28" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Build Believers",
    verse: "Ephesians 4:12",
    body: "We disciple Christians through verse-by-verse Bible teaching, Sunday School, Wednesday night Bible study, and fellowship with godly men and women. The goal: every believer grounded in Scripture, walking in holiness, and useful in the work of the ministry.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 text-gold">
        <path d="M14 12h28a4 4 0 0 1 4 4v40H14z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M14 52h32" stroke="currentColor" strokeWidth="2.5" />
        <path d="M30 22v14M23 29h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fortify Families",
    verse: "Deuteronomy 6:6-7",
    body: "We equip parents to lead their homes in the fear of the Lord. Our services are family-integrated — children worship alongside their parents — and we intentionally build a church culture that strengthens marriages and raises up the next generation.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 text-gold">
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="44" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="40" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M10 40c0-6 5-10 10-10s10 4 10 10M34 40c0-6 5-10 10-10s10 4 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Mission() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-warm-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              Why We Exist
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Our Mission
            </h1>
            <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
            <p className="text-lg text-text-light max-w-2xl mx-auto italic font-serif">
              Save Souls. Build Believers. Fortify Families.
            </p>
          </div>

          <div className="space-y-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-brown-deep/[.04] hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">{p.icon}</div>
                  <div>
                    <div className="flex items-baseline flex-wrap gap-x-3 mb-3">
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark">
                        {p.title}
                      </h2>
                      <span className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark">
                        {p.verse}
                      </span>
                    </div>
                    <p className="text-text-body leading-relaxed text-[1.05rem]">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/#contact"
              className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-gold-light transition-all"
            >
              Plan a Visit
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
