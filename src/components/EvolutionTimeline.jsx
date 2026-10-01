import { useState } from "react"
import inventions from "../data/inventions"
function EvolutionTimeline() {
  const [selectedYear, setSelectedYear] = useState(null)
  const selectedInvention = inventions.find(
  (item) => item.year === selectedYear
)
  return (
    <section className="px-8 py-32">

      <p className="text-xs uppercase tracking-[0.3em] text-black/40">
        The Time Machine
      </p>

      <h2 className="mt-4 text-5xl font-semibold tracking-tight">
        How Ideas Evolved.
      </h2>

      <div className="relative mt-20">

        <div className="absolute left-2 top-0 h-full w-px bg-black/10" />

        {inventions.map((item) => (
          <article
            key={item.year}
            onClick={() => setSelectedYear(item.year)}
            className={`group relative cursor-pointer border-t border-black/10 py-10 pl-10 transition-colors duration-500 ${
              selectedYear === item.year ? "bg-black/[0.03]" : ""
            }`}
          >
            <div
              className={`absolute left-0 top-10 h-4 w-4 rounded-full border border-black transition-all duration-500 ${
                selectedYear === item.year
                  ? "scale-150 bg-black"
                  : "bg-white group-hover:scale-150 group-hover:bg-black"
              }`}
            />

            <div className="grid gap-6 md:grid-cols-3">

              <div>

                <span className="text-xs uppercase tracking-[0.2em] text-black/30">
                    Archive {item.number}
                </span>
                
                <p className="mt-2 text-sm text-black/40">
                    {item.year}
                </p>

              </div>

              <h3
                className={`text-3xl font-medium transition-all duration-500 ${
                  selectedYear === item.year
                    ? "translate-x-2"
                    : "group-hover:translate-x-2"
                }`}
              >
                {item.title}
              </h3>

              <div>

                <p className="text-xs uppercase tracking-widest text-black/40">
                  {item.category}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-black/50 transition-colors duration-500 group-hover:text-black/70">
                  {item.description}
                </p>
                
              </div>

            </div>

          </article>
        ))}
      </div>

      {selectedInvention && (
        <div className="mt-12 border-t border-black/10 pt-10">

          <p className="text-xs uppercase tracking-[0.3em] text-black/40">
            Selected Archive
          </p>

          <h3 className="mt-4 text-4xl font-semibold tracking-tight">
            {selectedInvention.title}
          </h3>

          <p className="mt-3 text-sm uppercase tracking-widest text-black/40">
            {selectedInvention.category} · {selectedInvention.year}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-black/60">
            {selectedInvention.description}
          </p>
          <button
            type="button"
            onClick={() => setSelectedYear(null)}
            className="mt-8 text-xs uppercase tracking-[0.2em] underline underline-offset-4 transition-opacity hover:opacity-50"
          >
            Close Archive
          </button>

        </div>
      )}

    </section>
  )
}

export default EvolutionTimeline