const items = [
  "Smashed daily",
  "Hand-pressed patties",
  "Crispy onion crowns",
  "Proper melted cheese",
  "Estd 2025",
  "Made fresh to order",
  "Local love",
  "No microwaves",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-cream/10 bg-cheese py-4 text-ink">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-xl uppercase tracking-wider md:text-2xl">
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{t}</span>
            <Star />
          </span>
        ))}
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="shrink-0"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.783 1.402 8.173L12 19.273l-7.336 3.893 1.402-8.173L.132 9.21l8.2-1.192z" />
    </svg>
  );
}
