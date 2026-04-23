export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — SVG placeholder. Swap to <img src="/hero.jpg" /> or <video /> when assets arrive. */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1920 1080"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="heroGrad" cx="50%" cy="40%" r="80%">
              <stop offset="0%" stopColor="#5a2334" />
              <stop offset="60%" stopColor="#2a1118" />
              <stop offset="100%" stopColor="#1a0b10" />
            </radialGradient>
            <pattern id="stars" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="30" r="0.8" fill="rgba(234,212,154,0.35)" />
              <circle cx="70" cy="60" r="0.5" fill="rgba(234,212,154,0.25)" />
              <circle cx="40" cy="85" r="0.6" fill="rgba(234,212,154,0.3)" />
              <circle cx="85" cy="15" r="0.4" fill="rgba(234,212,154,0.2)" />
            </pattern>
          </defs>
          <rect width="1920" height="1080" fill="url(#heroGrad)" />
          <rect width="1920" height="1080" fill="url(#stars)" />
          {/* Silhouette of a church roofline at the bottom */}
          <path
            d="M0 880 L300 880 L320 820 L360 820 L360 770 L420 770 L420 820 L460 820 L480 880 L900 880 L940 760 L980 760 L1000 700 L1060 700 L1080 760 L1120 760 L1160 880 L1920 880 L1920 1080 L0 1080 Z"
            fill="rgba(10,4,8,0.75)"
          />
        </svg>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-deep/55 via-brown-deep/40 to-brown-deep/80 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center text-white max-w-3xl px-5 py-10">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold-light mb-3 animate-fade-up animation-delay-200">
          Welcome to
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-5 animate-fade-up animation-delay-400">
          Law of Liberty
          <span className="block text-2xl md:text-3xl font-normal italic text-gold-light mt-3">
            Baptist Church
          </span>
        </h1>
        <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded animate-fade-up animation-delay-600" />
        <p className="font-serif text-lg md:text-xl italic text-white/85 leading-relaxed max-w-xl mx-auto mb-2 animate-fade-up animation-delay-800">
          &ldquo;So speak ye, and so do, as they that shall be judged by the law of liberty.&rdquo;
        </p>
        <p className="text-sm text-gold-light mb-9 animate-fade-up animation-delay-900">
          — James 2:12
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-up animation-delay-1000">
          <a
            href="#services"
            className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-gold hover:bg-gold-light hover:border-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Join Us This Sunday
          </a>
          <a
            href="#about"
            className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-white/50 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] animate-fade-up animation-delay-1300">
        <a
          href="#welcome"
          className="flex flex-col items-center gap-2 text-white/50 text-xs tracking-[0.15em] uppercase"
        >
          <span>Scroll</span>
          <div className="w-5 h-5 border-r-2 border-b-2 border-white/40 rotate-45 animate-scroll-bounce" />
        </a>
      </div>
    </header>
  );
}
