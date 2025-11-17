export default function Testimonials() {
  return (
    <section className="section py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {[
          {
            quote:
              'This design feels premium out of the box. The details are on point.',
            author: 'Alex M.',
            role: 'Product Designer',
          },
          {
            quote:
              'Deploying was effortless and the site looks fantastic on mobile.',
            author: 'Priya K.',
            role: 'Founder',
          },
          {
            quote:
              'Clean code, clean visuals. Great foundation for a modern brand.',
            author: 'Jordan R.',
            role: 'Frontend Engineer',
          },
        ].map((t) => (
          <figure key={t.author} className="glass p-6 md:p-8">
            <blockquote className="text-neutral-200">?{t.quote}?</blockquote>
            <figcaption className="mt-4 text-sm text-neutral-400">
              <span className="text-white font-medium">{t.author}</span> ? {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
