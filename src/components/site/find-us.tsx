import { Phone, Clock, MapPin, Instagram } from "lucide-react";
import { Reveal } from "./reveal";
import { Button } from "@/components/ui/button";

export function FindUs() {
  return (
    <section id="find" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-cheese">
              Come find us
            </p>
            <h2 className="mt-3 font-display text-[2.25rem] leading-[1.05] sm:text-4xl md:text-6xl">
              We&apos;re the
              <br />
              <span className="text-cheese">black van</span>{" "}
              <span className="font-script text-cream/90">in the corner.</span>
            </h2>
            <p className="mt-5 max-w-prose text-lg text-cream/75">
              Look for the white line-art down the side, the smell of
              browned butter, and the small queue of people grinning.
              Locations and hours move with us — easiest is to ring or check
              the latest reel.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-cheese px-7 text-base font-semibold text-ink hover:bg-cheese-hot"
              >
                <a href="tel:07787732896" className="gap-2">
                  <Phone className="size-4" />
                  07787 732896
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-cream/30 bg-transparent px-7 text-base text-cream-bright hover:bg-cream/10 hover:text-cream-bright"
              >
                <a
                  href="https://www.instagram.com/spuddleandco/reel/DWtKyk5DHic/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="gap-2"
                >
                  <Instagram className="size-4" />
                  Watch the latest reel
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-3xl border border-cream/10 bg-ink-soft p-1">
              <div className="rounded-[1.4rem] bg-ink p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-lettuce shadow-[0_0_12px_2px_rgba(132,204,22,0.6)]" />
                  <span className="text-xs uppercase tracking-[0.22em] text-cream/60">
                    Today
                  </span>
                </div>

                <p className="mt-3 font-display text-3xl">
                  Catch us at the van
                </p>
                <p className="mt-1 text-cream/65">
                  Pop-up locations announced via Instagram &amp; phone.
                </p>

                <ul className="mt-6 space-y-4">
                  <Row
                    icon={<MapPin className="size-4 text-cheese" />}
                    label="Where"
                    value="The car park, look for the black van"
                    sub="Drop us a ring for today's spot"
                  />
                  <Row
                    icon={<Clock className="size-4 text-cheese" />}
                    label="When"
                    value="Lunchtime onwards · most days"
                    sub="Closed when the patties run out"
                  />
                  <Row
                    icon={<Phone className="size-4 text-cheese" />}
                    label="Order ahead"
                    value="07787 732896"
                    sub="Skip the queue, walk up and grab"
                  />
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-cream/15 bg-ink-ridge">
        {icon}
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-cream/55">
          {label}
        </p>
        <p className="mt-0.5 font-display text-lg leading-tight">{value}</p>
        {sub && (
          <p className="mt-0.5 text-sm text-cream/55">{sub}</p>
        )}
      </div>
    </li>
  );
}
