import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import Testimonials from '../components/Testimonials';

export default function Page() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="section pt-20 md:pt-28 pb-12 relative">
        <div className="absolute inset-0 -z-10 bg-glow" />
        <div className="flex flex-col items-center text-center gap-8">
          <span className="px-4 py-1 rounded-full text-sm glass">Introducing Agentic</span>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Build delightful experiences with
            <br />
            <span className="gradient-text">modern aesthetics</span>
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl">
            A gorgeous, responsive landing page you can deploy instantly. Powered by Next.js and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#get-started" className="px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset] hover:opacity-95 transition">
              Get started
            </a>
            <a href="#features" className="px-6 py-3 rounded-xl glass font-medium hover:bg-white/10 transition">
              Learn more
            </a>
          </div>
          <div className="relative w-full mt-8">
            <div className="glass border-white/5 shadow-2xl/50 shadow-primary/10 mx-auto max-w-5xl overflow-hidden">
              <div className="aspect-[16/9] bg-grid [background-size:24px_24px] relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent animate-gradient-x" />
                <div className="absolute inset-6 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">
                  <div className="text-neutral-300 text-center px-6">
                    <div className="text-6xl md:text-7xl mb-4">?</div>
                    <p className="text-lg md:text-xl">Crafted with care. Ready to impress.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            title="Elegant design"
            description="Thoughtful spacing, subtle glass, soft gradients, and tasteful motion."
            icon="??"
          />
          <FeatureCard
            title="Production-ready"
            description="Next.js app router, TypeScript, Tailwind CSS?optimized out of the box."
            icon="??"
          />
        <FeatureCard
            title="Responsive by default"
            description="Looks fantastic on phones, tablets, and desktops without extra work."
            icon="??"
          />
        </div>
      </section>

      {/* Showcase */}
      <section className="section py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="glass p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-3">Sleek hero sections</h3>
            <p className="text-neutral-300">Combine gradient text, subtle glows, and tasteful depth for memorable first impressions.</p>
          </div>
          <div className="glass p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-3">Beautiful cards</h3>
            <p className="text-neutral-300">Cards with soft borders and gentle blur make content feel refined and approachable.</p>
          </div>
          <div className="glass p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-3">Accessible and fast</h3>
            <p className="text-neutral-300">Optimized semantics and performance ensure great UX for everyone.</p>
          </div>
          <div className="glass p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-3">Easy to customize</h3>
            <p className="text-neutral-300">Change colors, sections, and content quickly to fit your brand.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section id="get-started" className="section py-16 md:py-24">
        <div className="glass p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">Make a stunning first impression</h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Deploy this site in minutes and start delighting visitors with beautiful design and smooth UX.
          </p>
          <a href="https://vercel.com/new" target="_blank" className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:opacity-95 transition">
            Deploy now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
