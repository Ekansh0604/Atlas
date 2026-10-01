function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-black/10">
      <h1 className="text-2xl font-semibold tracking-[0.3em]">ATLAS</h1>

      <div className="flex gap-8">
        <a href="#" className="text-sm uppercase tracking-widset transition-opacity duration-300 hover:opacity-50">
          Explore
        </a>
        <a href="#" className="text-sm uppercase tracking-widset transition-opacity duration-300 hover:opacity-50">
          Timeline
        </a>
        <a href="#" className="text-sm uppercase tracking-widset transition-opacity duration-300 hover:opacity-50">
          About
        </a>
      </div>
    </nav>
  );
}

export default Navbar