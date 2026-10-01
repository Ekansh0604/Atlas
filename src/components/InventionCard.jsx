function InventionCard({ 
  number,
  title, 
  year, 
  category, 
  description, 
  type,
  onViewDetails,
}) {
  return (
    <article className="group border-t border-black/10 pt-6 transition-transform duration-500 hover:-translate-y-2">
      
      <div className="flex items-start justify-between">

        <span className="text-xs text-black/40">
          {number}
        </span>

        <span className="text-xs text-black/40">
          {year}
        </span>

      </div>

      <div className="mt-16">

        <div className="relative flex h-72 w-full items-center justify-center overflow-hidden border border-black/10 bg-black/5 transition-colors duration-500 group-hover:bg-black/10">

          <div className="absolute inset-0 flex items-center justify-center">

            {type === "camera" &&(
              <div className="h-32 w-32 rounded-full border border-black/20 transition-transform duration-500 group-hover:scale-110">
                <div className="m-6 h-20 w-20 rounded-full border border-black/20">
                  <div className="m-6 h-8 w-8 rounded-full bg-black" />
                </div>
              </div>

            )}
            {type === "automobile" &&(
              <div className="h-24 w-40 border border-black/20 transition-transform duration-500 group-hover:scale-110">
                <div className="mt-16 flex justify-between px-4">
                  <div className="h-6 w-6 rounded-full bg-black" />
                  <div className="h-6 w-6 rounded-full bg-black" />
                </div>
              </div>

            )}
            {type === "spacecraft" &&(
              <div className="relative h-32 w-32 rounded-full border border-black/20 transition-transform duration-500 group-hover:scale-110">
                <div className="absolute left-1/2 top-1/2 h-3 w-16 -translate-x-1/2 -translate-y-1/2 bg-black" />
              </div>

            )}

          </div>

        </div>

        <div className="archive-info transition-transform duration-500 group-hover:translate-x-2">

          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            {category}
          </p>

          <h3 className="mt-6 text-3xl font-medium transition-transform duration-500 group-hover:translate-x-1">
            {title}
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-relaxed text-black/50">
            {description}
          </p>
          <button
            onClick={()=>
              onViewDetails()
            }
            type="button"
            className="mt-6 text-xs uppercase tracking-[0.2em] underline underline-offset-4 transition-opacity hover:opacity-50"
          >
            View Details
          </button>

        </div>
        
      </div>

    </article>
  )
}

export default InventionCard