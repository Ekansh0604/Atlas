import { useState } from "react"
import InventionCard from "./InventionCard"
import inventions from "../data/inventions"

function ExploreSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedInvention, setSelectedInvention] = useState(null)

  const filteredInventions =
    selectedCategory === "All"
      ? inventions
      : inventions.filter(
          (invention) => invention.category === selectedCategory
        )
  return (
    <section className="px-8 py-24">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-black/40">
          Explore The Archive
        </p>

        <h2 className="mt-4 text-5xl font-semibold tracking-tight">
          Discover Human Invention.
        </h2>

        <div className="mt-12 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`border px-5 py-3 text-xs uppercase tracking-widest transition-colors ${
              selectedCategory === "All"
              ? "border-black bg-black text-white"
              : "border-black/10 hover:bg-black hover:text-white"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setSelectedCategory("Photography")}
            className={`border px-5 py-3 text-xs uppercase tracking-widest transition-colors ${
              selectedCategory === "Photography"
              ? "border-black bg-black text-white"
              : "border-black/10 hover:bg-black hover:text-white"
            }`}
          >
            Photography
          </button>

          <button
            onClick={() => setSelectedCategory("Transportation")}
            className={`border px-5 py-3 text-xs uppercase tracking-widest transition-colors ${
              selectedCategory === "Transportation"
              ? "border-black bg-black text-white"
              : "border-black/10 hover:bg-black hover:text-white"
            }`}
          >
            Transportation
          </button>

          <button
            onClick={() => setSelectedCategory("Space")}
            className={`border px-5 py-3 text-xs uppercase tracking-widest transition-colors ${
              selectedCategory === "Space"
              ? "border-black bg-black text-white"
              : "border-black/10 hover:bg-black hover:text-white"
            }`}
          >
            Space
          </button>

        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {filteredInventions.map((invention) => (
            <InventionCard 
              key={invention.number}
              number={invention.number}
              title={invention.title}
              year={invention.year}
              category={invention.category}
              description={invention.description}
              type={invention.type}
              onViewDetails={() => setSelectedInvention(invention)}
            />
          ))}
        </div>

        {selectedInvention &&(
            <div className="mt-20 border-t border-black/10 pt-12 transition-opacity duration-500">

              <div className="grid gap-12 md:grid-cols-2">

                {/*Invention Visual*/}

                {selectedInvention.type === "camera" && (
                <div className="h-48 w-48 rounded-full border border-black/20">
                  <div className="m-8 h-32 w-32 rounded-full border border-black/20">
                    <div className="m-12 h-8 w-8 rounded-full bg-black" />
                  </div>
                </div>
              )}

              {selectedInvention.type === "automobile" && (
                <div className="h-32 w-56 border border-black/20">
                  <div className="mt-24 flex justify-between px-6">
                    <div className="h-8 w-8 rounded-full bg-black" />
                    <div className="h-8 w-8 rounded-full bg-black" />
                  </div>
                </div>
              )}

              {selectedInvention.type === "spacecraft" && (
                <div className="relative h-40 w-40 rounded-full border border-black/20">
                  <div className="absolute left-1/2 top-1/2 h-3 w-24 -translate-x-1/2 -translate-y-1/2 bg-black" />
                </div>
              )}

                {/* {Invention Information} */}
                <div className="flex flex-col justify center">

                  <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                    {selectedInvention.category}
                  </p>

                  <h3 className="mt-4 text-5xl font-semibold tracking-tight">
                    {selectedInvention.title}
                  </h3>

                  <p className="mt-4 text-sm text-black/40">
                    {selectedInvention.year}
                  </p>

                  <p className="mt-8 max-w-lg text-base leading-relaxed text-black/60">
                    {selectedInvention.description}
                  </p>

                  <button
                    type="button"
                    onClick={()=>selectedInvention(null)}
                    className="mt-8 w-fit text-xs uppercase tracking-[0.2em] underline underline-offset-4 transition-opacity hover:opacity-50"
                  >
                    Close Details
                  </button>
                </div>
              </div>

            </div>
          )}
      </div>
    </section>
  )
}

export default ExploreSection