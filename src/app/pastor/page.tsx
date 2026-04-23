import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Pastor Adam Fannin",
  description:
    "Meet Pastor Adam Fannin of Law of Liberty Baptist Church in Jacksonville, FL. Bible preacher, soul-winner, and shepherd to a family-integrated Independent Baptist congregation.",
};

export default function Pastor() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-warm-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              Meet Our Pastor
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Pastor Adam Fannin
            </h1>
            <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-cream-dark">
                {/* Placeholder — swap for /pastor.jpg when available */}
                <svg viewBox="0 0 400 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <rect width="400" height="500" fill="#efe4cc" />
                  <circle cx="200" cy="200" r="70" fill="#d4a84a" opacity="0.35" />
                  <path
                    d="M120 420 C 120 340, 280 340, 280 420 L 280 500 L 120 500 Z"
                    fill="#d4a84a"
                    opacity="0.25"
                  />
                </svg>
              </div>
              <p className="text-center text-sm text-text-light italic mt-3">
                Pastor Adam Fannin
              </p>
            </div>

            <div className="md:col-span-3 space-y-5 text-text-body leading-relaxed text-[1.05rem]">
              <p>
                Pastor Adam Fannin leads Law of Liberty Baptist Church with a passion
                for expository Bible preaching, soul-winning, and strengthening families
                through the Word of God.
              </p>
              <p>
                His ministry philosophy is simple: the local church should preach the
                Bible plainly, love its community, and raise up generations of families
                who know and love the Lord. Pastor Fannin&rsquo;s sermons are known for
                clear Bible teaching, practical application, and a heart for revival.
              </p>
              <p>
                He preaches from the King James Bible, rejects compromise with worldly
                trends, and calls every believer to walk worthy of their calling in
                Christ Jesus.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/#watch"
                  className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-7 py-3 rounded-full hover:bg-gold-light transition-all"
                >
                  Listen to Sermons
                </a>
                <a
                  href="/#contact"
                  className="inline-block text-brown-deep font-semibold text-sm tracking-wide uppercase px-7 py-3 rounded-full border-2 border-brown-deep/30 hover:bg-brown-deep hover:text-white hover:border-brown-deep transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <div className="relative bg-brown-deep rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brown-deep to-burgundy-dark" />
              <span
                aria-hidden="true"
                className="absolute top-6 left-8 font-serif text-[10rem] leading-none text-gold/20 select-none"
              >
                &ldquo;
              </span>
              <div className="relative z-10 px-10 py-14 md:px-16 md:py-16 text-center">
                <p className="font-serif italic text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                  Save souls, build believers, fortify families — that is the burden of
                  this ministry. We will preach the King James Bible without apology and
                  love the people God sends through our doors.
                </p>
                <div className="w-16 h-[2px] bg-gold mx-auto my-6 rounded" />
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-light">
                  — Pastor Adam Fannin
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
