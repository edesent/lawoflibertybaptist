"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";

export default function Welcome() {
  return (
    <section id="welcome" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-cream-dark">
              <Image
                src="/pastor-headshot.png"
                alt="Pastor Adam Fannin"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-center"
              />
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
