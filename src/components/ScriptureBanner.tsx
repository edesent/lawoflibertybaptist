export default function ScriptureBanner() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <svg viewBox="0 0 1920 400" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="sbg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2a1118" />
              <stop offset="100%" stopColor="#4a1a26" />
            </linearGradient>
          </defs>
          <rect width="1920" height="400" fill="url(#sbg)" />
          {/* Soft decorative arches */}
          <path
            d="M0 400 C 480 240, 960 240, 1440 400 L 1920 400 L 1920 0 L 0 0 Z"
            fill="rgba(212,168,74,0.04)"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-brown-deep/85 to-burgundy/80" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-gold mx-auto mb-6" fill="none">
          <path
            d="M12 16 C 12 11, 16 10, 18 10 L 18 14 C 16 14, 14 15, 14 17 L 18 17 L 18 28 L 10 28 L 10 17 Z M 24 16 C 24 11, 28 10, 30 10 L 30 14 C 28 14, 26 15, 26 17 L 30 17 L 30 28 L 22 28 L 22 17 Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <p className="font-serif text-2xl md:text-3xl italic text-white leading-relaxed mb-5">
            So speak ye, and so do, as they that shall be judged by the law of liberty.
          </p>
          <cite className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-light not-italic">
            — James 2:12
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
