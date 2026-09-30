function HeroSection() {
  return (
    <section className="hero-section min-h-[calc(100vh-90px)] grid grid-cols-1 items-center gap-12 px-8 py-16 md:grid-cols-2">

      {/* LEFT: Hero Content */}
      <div className="hero-content">

        <p className="hero-eyebrow text-xs uppercase tracking-[0.3em] text-black/50">
          THE EVOLUTION OF EVERYTHING
        </p>

        <h2 className="hero-title mt-6 text-6xl font-semibold leading-none tracking-tight md:text-8xl">
          Explore
          <br />
          Human Innovation
        </h2>

        <p className="hero-description mt-8 max-w-md text-base leading-relaxed text-black/60 md:text-lg">
          From the first camera to the spacecraft -
          discover how our ideas evolved.
        </p>

      </div>


      {/* RIGHT: Featured Archive */}
      <div className="hero-visual group relative h-[420px] w-full overflow-hidden bg-black/5 p-6 border border-black/10 transition-transform duration-500 hover:scale-[1.02]">

        {/* Archive Header */}
        <div className="archive-header flex items-start justify-between">

          <span className="text-xs uppercase tracking-[0.3em] text-black/40">
            Featured Archive
          </span>

          <span className="text-xs text-black/40">
            01
          </span>

        </div>


        {/* Camera Lens */}
        <div className="camera-lens absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/20 transition-transform duration-500 group-hover:scale-110">

          <div className="absolute inset-6 rounded-full border border-black/20">

            <div className="absolute inset-6 rounded-full bg-black"></div>

          </div>

        </div>


        {/* Archive Information */}
        <div className="archive-info absolute bottom-6 left-6">

          <p className="text-sm uppercase tracking-widest text-black/50">
            The Camera
          </p>

          <p className="mt-2 text-3xl font-medium">
            Capturing Time
          </p>

        </div>

      </div>

    </section>
  )
}

export default HeroSection