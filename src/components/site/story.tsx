import Image from "next/image";
import { Reveal } from "./reveal";

const pillars = [
  {
    n: "01",
    title: "Hand-smashed",
    body: "Loose-ground beef, pressed thin and hard on a screaming flat-top so every edge gets that crispy crust.",
  },
  {
    n: "02",
    title: "Made to order",
    body: "Nothing sits under a heat lamp. You order, we cook, you eat. That's the whole shape of it.",
  },
  {
    n: "03",
    title: "Van life",
    body: "We're a black van in a car park. No tables, no menus laminated within an inch of their life. Just burgers.",
  },
];

export function Story() {
  return (
    <section id="story" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-cream/15 shadow-2xl">
              <Image
                src="/ocvan.png"
                alt="The O'Connells' Burgers van"
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="font-script text-3xl text-cream-bright leading-none">
                    The van
                  </p>
                  <p className="text-xs uppercase tracking-[0.22em] text-cream/70 mt-1">
                    spot it · order · feast
                  </p>
                </div>
                <span className="rounded-full bg-cheese px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
                  Open most days
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-cheese">
                The story
              </p>
              <h2 className="mt-4 font-display text-[2.25rem] leading-[1.05] sm:text-4xl md:text-5xl">
                Small van.{" "}
                <span className="text-cheese">Big burger.</span>{" "}
                <span className="font-script text-cream/90">
                  No nonsense.
                </span>
              </h2>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-cream/75">
                O&apos;Connells&apos; started with one rule:{" "}
                <span className="text-cream-bright font-semibold">
                  cook the burger you&apos;d want to eat
                </span>
                . That meant no frozen pucks, no shortcuts, and no menu so
                long you forget what you came for. Just smashed patties on
                soft buns with the kind of toppings that get sauce on your
                wrists.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.08}>
                  <div className="group relative h-full rounded-2xl border border-cream/10 bg-ink-soft p-5 transition hover:border-cheese/40 hover:-translate-y-0.5">
                    <span className="font-display text-xs text-cheese">
                      {p.n}
                    </span>
                    <h3 className="mt-2 font-display text-xl">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/65">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
