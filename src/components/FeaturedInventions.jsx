import InventionCard from "./InventionCard"
import inventions from "../data/inventions"
function FeaturedInventions() {
  return (
    <section className="px-8 py-24">

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-black/40">
          Featured Archive
        </p>

        <h2 className="mt-4 text-5xl font-semibold tracking-tight">
          Ideas That Changed Everything.
        </h2>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {inventions.map((invention)=>(
          <InventionCard
            key={invention.number}
            number={invention.number}
            title={invention.title}
            year={invention.year}
            category={invention.category}
            description={invention.description}
            type={invention.type}
          />
        ))}
      </div>

    </section>
  )
}

export default FeaturedInventions