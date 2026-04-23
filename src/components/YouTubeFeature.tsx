"use client";

import { useState, useEffect } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

// Featured videos from the Law of Liberty YouTube channel.
// Swap these IDs to update what appears on the homepage.
const featuredVideos = [
  {
    id: "I-HbqZCtapo",
    title: "Joseph — Discreet & Wise Ruler",
    series: "Bible Heroes Series",
  },
  {
    id: "dHs8a_2t6LA",
    title: "Asaph the Prophet",
    series: "Sunday Preaching",
  },
  {
    id: "UflbJlhInKs",
    title: "Welcome to Law of Liberty Baptist Church",
    series: "About Us",
  },
];

const CHANNEL_URL = "https://www.youtube.com/@LawofLiberty";

export default function YouTubeFeature() {
  const [active, setActive] = useState<(typeof featuredVideos)[number] | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="watch" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
            </svg>
            Watch &amp; Listen
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Sermons on YouTube
          </h2>
          <p className="text-lg text-text-light">
            Every sermon is uploaded to our YouTube channel. Listen on your commute, during
            the week, or share with a friend.
          </p>
        </div>

        {/* Featured video — biggest, first */}
        <AnimateOnScroll>
          <div className="max-w-5xl mx-auto mb-10">
            <button
              onClick={() => setActive(featuredVideos[0])}
              className="group relative block w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-brown-deep"
              aria-label={`Play ${featuredVideos[0].title}`}
            >
              <img
                src={`https://img.youtube.com/vi/${featuredVideos[0].id}/maxresdefault.jpg`}
                alt={featuredVideos[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/90 via-brown-deep/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 md:w-11 md:h-11 text-brown-deep ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-light mb-2">
                  {featuredVideos[0].series}
                </p>
                <h3 className="font-serif text-xl md:text-3xl font-semibold text-white">
                  {featuredVideos[0].title}
                </h3>
              </div>
            </button>
          </div>
        </AnimateOnScroll>

        {/* Secondary videos */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {featuredVideos.slice(1).map((video, i) => (
            <AnimateOnScroll key={video.id} delay={(i + 1) * 100}>
              <button
                onClick={() => setActive(video)}
                className="group block w-full text-left"
                aria-label={`Play ${video.title}`}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-brown-deep shadow-md group-hover:shadow-xl transition-shadow">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gold/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brown-deep ml-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-gold-dark mb-1">
                    {video.series}
                  </p>
                  <h4 className="font-serif text-lg font-semibold text-text-dark group-hover:text-brown-light transition-colors">
                    {video.title}
                  </h4>
                </div>
              </button>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ff0000] text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-[#cc0000] hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-fade-up"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            </svg>
          </button>
          <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-4 text-white">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-light mb-1">
                {active.series}
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-bold">{active.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
