"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const ADDRESS = "485 Halsema Rd N, Jacksonville, FL 32220";
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`;
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

type FormState = "idle" | "submitting" | "sent" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");
    // Wire to your backend / email service later (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 700));
    setState("sent");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
            Come Visit Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Plan Your Visit
          </h2>
          <p className="text-lg text-text-light">
            We can&rsquo;t wait to meet you. Here&rsquo;s everything you need to know.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Contact Info */}
          <div>
            <AnimateOnScroll>
              <div className="flex gap-5 py-6 border-b border-brown-deep/[.06]">
                <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 flex-shrink-0 text-brown-light">
                  <path d="M24 4C16 4 10 10.5 10 18c0 10 14 26 14 26s14-16 14-26c0-7.5-6-14-14-14z" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="24" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text-dark mb-1">Our Location</h3>
                  <p className="text-text-light">
                    485 Halsema Rd N<br />
                    Jacksonville, FL 32220
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="flex gap-5 py-6 border-b border-brown-deep/[.06]">
                <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 flex-shrink-0 text-brown-light">
                  <path d="M10 10h10l4 10-5 3a18 18 0 0 0 10 10l3-5 10 4v10a2 2 0 0 1-2 2A32 32 0 0 1 8 12a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text-dark mb-1">Phone</h3>
                  <p>
                    <a
                      href="tel:+19043644050"
                      className="text-brown-light font-semibold hover:text-gold-dark transition-colors"
                    >
                      (904) 364-4050
                    </a>
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="flex gap-5 py-6 border-b border-brown-deep/[.06]">
                <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 flex-shrink-0 text-brown-light">
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M24 12v12l8 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text-dark mb-1">Service Hours</h3>
                  <p className="text-text-light">
                    Sunday: 10 AM, 11 AM &amp; 5 PM<br />
                    Wednesday: 7 PM
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mt-8 p-7 bg-cream rounded-xl border-l-4 border-gold">
                <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">What to Expect</h3>
                <p className="text-[0.92rem] text-text-light leading-relaxed">
                  When you visit, you&rsquo;ll be greeted by friendly faces in a welcoming atmosphere.
                  Come as you are — whether in your Sunday best or casual clothes. Our services
                  include traditional hymns, heartfelt prayer, and verse-by-verse Bible preaching.
                  Families sit together; children are welcome in every service.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Map + Form */}
          <div className="space-y-8">
            <AnimateOnScroll delay={150}>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-cream-dark">
                <iframe
                  src={MAP_EMBED}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map to Law of Liberty Baptist Church"
                  className="border-0"
                />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-4 bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Get Directions
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll delay={250}>
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-brown-deep/[.06] rounded-2xl p-7 shadow-sm"
              >
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-1">
                  Send us a message
                </h3>
                <p className="text-sm text-text-light mb-5">
                  Have a question? Want prayer? We&rsquo;d love to hear from you.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-cream/50 border border-brown-deep/[.08] rounded-lg text-sm text-text-dark placeholder:text-text-muted focus:outline-none focus:border-gold focus:bg-white transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email address"
                    className="w-full px-4 py-3 bg-cream/50 border border-brown-deep/[.08] rounded-lg text-sm text-text-dark placeholder:text-text-muted focus:outline-none focus:border-gold focus:bg-white transition-all"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  className="w-full px-4 py-3 mb-3 bg-cream/50 border border-brown-deep/[.08] rounded-lg text-sm text-text-dark placeholder:text-text-muted focus:outline-none focus:border-gold focus:bg-white transition-all"
                />
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we pray for you, or what can we answer?"
                  className="w-full px-4 py-3 mb-4 bg-cream/50 border border-brown-deep/[.08] rounded-lg text-sm text-text-dark placeholder:text-text-muted focus:outline-none focus:border-gold focus:bg-white transition-all resize-none"
                />

                <button
                  type="submit"
                  disabled={state === "submitting" || state === "sent"}
                  className="w-full bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none"
                >
                  {state === "submitting" ? "Sending…" : state === "sent" ? "Thank you! We&rsquo;ll be in touch." : "Send Message"}
                </button>
                {state === "error" && (
                  <p className="text-sm text-burgundy mt-3 text-center">
                    Something went wrong. Please call us at (904) 364-4050.
                  </p>
                )}
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
