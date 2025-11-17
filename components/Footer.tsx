export default function Footer() {
  return (
    <footer className="section py-10 text-sm text-neutral-400">
      <div className="glass px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-6 rounded-md bg-gradient-to-tr from-primary/80 to-primary/40" />
          <span className="font-medium text-white">Agentic</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#get-started" className="hover:text-white transition">Get started</a>
          <a href="https://vercel.com" target="_blank" className="hover:text-white transition">Powered by Vercel</a>
        </div>
        <div className="text-neutral-500">? {new Date().getFullYear()} Agentic. All rights reserved.</div>
      </div>
    </footer>
  );
}
