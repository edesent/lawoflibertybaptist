"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Welcome() {
  return (
    <section id="welcome" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-cream-dark">
              {/* Placeholder — swap for /pastor.jpg when available */}
              <svg viewBox="0 0 400 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="500" fill="#d9ecfb" />
                <circle cx="200" cy="200" r="70" fill="#1e7ad2" opacity="0.35" />
                <path
                  d="M120 420 C 120 340, 280 340, 280 420 L 280 500 L 120 500 Z"
                  fill="#1e7ad2"
                  opacity="0.3"
                />
                <text
                  x="200"
                  y="470"
                  textAnchor="middle"
                  fill="#0c3d78"
                  fontSize="14"
                  fontFamily="serif"
                  opacity="0.65"
                >
                  Pastor Adam Fannin
                </text>
              </svg>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                A Message From Our Pastor
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-6">
                You&rsquo;re Invited to{" "}
                <em className="text-brown-light italic">Worship With Us</em>
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-4">
                At Law of Liberty Baptist Church, we believe the local church should feel
                like home — a place where families grow together, the Bible is preached plainly,
                and every visitor is welcomed like a friend.
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                Under the leadership of <strong className="text-text-body">Pastor Adam Fannin</strong>,
                our church family is committed to a simple mission:
                <em> Save Souls, Build Believers, Fortify Families.</em>
              </p>
              <p className="text-text-light leading-relaxed mb-7">
                The King James Bible is our textbook. Our services are family-integrated —
                children worship alongside their parents — and the music is traditional,
                rooted in the great hymns of the faith. Come as you are; we&rsquo;re saving
                you a seat.
              </p>
              <a
                href="/pastor"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Meet Pastor Fannin
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
