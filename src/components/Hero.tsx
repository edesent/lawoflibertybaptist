export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Jacksonville bridge photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/jacksonville-background.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Transparent blue gradient overlay — keeps the brand feel + ensures text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,40,73,0.75) 0%, rgba(30,122,210,0.55) 45%, rgba(12,61,120,0.85) 100%)",
        }}
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-brown-deep/40 via-transparent to-brown-deep/40" />

      {/* Content */}
      <div className="relative z-[2] text-center max-w-4xl px-5 py-10">
        <p className="mt-10 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-white/75 mb-8 animate-fade-up animation-delay-200">
          Welcome to
        </p>

        <h1 className="animate-fade-up animation-delay-400 mb-8">
          <span className="sr-only">Law of Liberty Baptist Church</span>
          <img
            src="/law-of-liberty-logo.png"
            alt="Law of Liberty Baptist Church"
            className="mx-auto w-full max-w-sm md:max-w-md drop-shadow-[0_4px_30px_rgba(255,255,255,0.25)]"
          />
        </h1>

        <div className="w-24 h-[2px] bg-white/40 mx-auto mb-7 rounded animate-fade-up animation-delay-600" />

        <p className="font-serif text-lg md:text-2xl italic text-white leading-relaxed max-w-2xl mx-auto mb-2 animate-fade-up animation-delay-800 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          &ldquo;So speak ye, and so do, as they that shall be judged by the law of liberty.&rdquo;
        </p>
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-10 animate-fade-up animation-delay-900">
          — James 2:12
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-fade-up animation-delay-1000">
          <a
            href="#services"
            className="inline-block bg-white text-brown font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-cream-dark hover:-translate-y-0.5 hover:shadow-xl transition-all shadow-lg"
          >
            Join Us This Sunday
          </a>
          <a
            href="#about"
            className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-white/60 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] animate-fade-up animation-delay-1300">
        <a
          href="#welcome"
          className="flex flex-col items-center gap-2 text-white/70 text-xs tracking-[0.15em] uppercase"
        >
          <span>Scroll</span>
          <div className="w-5 h-5 border-r-2 border-b-2 border-white/60 rotate-45 animate-scroll-bounce" />
        </a>
      </div>
    </header>
  );
}
