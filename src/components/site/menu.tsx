import Image from "next/image";
import { Flame } from "lucide-react";
import { Reveal } from "./reveal";

type Item = {
  name: string;
  tagline: string;
  ingredients: string[];
  image?: string;
  badge?: string;
};

const items: Item[] = [
  {
    name: "The O'Connell",
    tagline: "Our flagship double-smash.",
    ingredients: [
      "Two hand-smashed patties",
      "American melt",
      "Crispy onion crowns",
      "House sauce",
      "Toasted brioche",
    ],
    image: "/burger1.png",
    badge: "Signature",
  },
  {
    name: "Classic Smash",
    tagline: "Where it all begins.",
    ingredients: [
      "Single smashed patty",
      "American melt",
      "Pickles",
      "Mustard + ketchup",
      "Soft bun, golden top",
    ],
    image: "/burger2.png",
  },
  {
    name: "The Hot One",
    tagline: "Bring napkins. Possibly two.",
    ingredients: [
      "Double smash",
      "Pepper jack",
      "Jalapeños, fresh + pickled",
      "Chipotle mayo",
      "Crispy onions",
    ],
    badge: "Spicy",
  },
];

const sides = [
  "Skin-on chips",
  "Cheese-loaded chips",
  "Pickle spears",
  "Fresh-squeezed lemonade",
];

export function Menu() {
  return (
    <section id="menu" className="relative py-24 md:py-32 bg-ink-soft/60">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cheese/40 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-cheese">
            On the chalkboard
          </p>
          <h2 className="mt-3 font-display text-[2.5rem] sm:text-5xl md:text-6xl">
            The <span className="text-cheese">menu</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Small, focused, and changes when we feel like it. Pop down to the
            van for today&apos;s specials &amp; prices.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cream/10 bg-ink transition hover:-translate-y-1 hover:border-cheese/40 hover:shadow-[0_25px_60px_-20px_rgba(245,165,36,0.35)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-ink-ridge to-ink">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center">
                      <BurgerSilhouette />
                    </div>
                  )}
                  {item.badge && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-cheese px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
                      {item.badge === "Spicy" && (
                        <Flame className="size-3" />
                      )}
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl leading-tight">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-script text-xl text-cheese leading-none">
                    {item.tagline}
                  </p>
                  <ul className="mt-5 space-y-1.5 text-sm text-cream/70">
                    {item.ingredients.map((ing) => (
                      <li key={ing} className="flex items-start gap-2">
                        <span
                          aria-hidden
                          className="mt-2 size-1 shrink-0 rounded-full bg-cheese"
                        />
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-dashed border-cream/15 bg-ink/60 px-6 py-6 md:flex-row md:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cheese">
                On the side
              </p>
              <p className="mt-2 font-display text-2xl">
                Because chips are a love language.
              </p>
            </div>
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {sides.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-cream/15 bg-ink-soft px-4 py-1.5 text-sm text-cream/80"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BurgerSilhouette() {
  return (
    <svg
      viewBox="0 0 120 80"
      className="size-24 text-cheese/40"
      fill="currentColor"
      aria-hidden
    >
      <path d="M60 8c-22 0-40 12-44 24h88C100 20 82 8 60 8Z" />
      <rect x="14" y="38" width="92" height="6" rx="3" />
      <rect x="14" y="50" width="92" height="6" rx="3" />
      <path d="M16 60c4 8 18 12 44 12s40-4 44-12H16Z" />
    </svg>
  );
}
