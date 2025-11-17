export default function Navbar() {
  return (
    <header className="section py-6">
      <nav className="flex items-center justify-between glass px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-gradient-to-tr from-primary/80 to-primary/40 animate-float" />
          <span className="font-semibold tracking-tight">Agentic</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#get-started" className="hover:text-white transition">Get started</a>
          <a href="https://github.com" target="_blank" className="hover:text-white transition">GitHub</a>
        </div>
        <a href="#get-started" className="md:inline-block hidden px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 transition">Launch</a>
      </nav>
    </header>
  );
}
