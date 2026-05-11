import Image from "next/image";
import { Instagram, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-cream/10 bg-ink py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <div className="flex items-center gap-3">
          <Image
            src="/oclogo.png"
            alt="O'Connells' Burgers logo"
            width={64}
            height={64}
            className="h-14 w-auto"
          />
          <div>
            <p className="font-display text-lg leading-none">
              O&apos;Connells&apos; Burgers
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-cream/55">
              Estd 2025 · Smashed daily
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:07787732896"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-cream/15 bg-ink-soft px-4 text-sm text-cream/85 hover:border-cheese/40 hover:text-cheese transition"
          >
            <Phone className="size-4" /> 07787 732896
          </a>
          <a
            href="https://www.instagram.com/spuddleandco/reel/DWtKyk5DHic/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-cream/15 bg-ink-soft px-4 text-sm text-cream/85 hover:border-cheese/40 hover:text-cheese transition"
          >
            <Instagram className="size-4" /> Instagram
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-[11px] uppercase tracking-[0.22em] text-cream/35">
        © {new Date().getFullYear()} O&apos;Connells&apos; Burgers — All the
        good stuff
      </p>
    </footer>
  );
}
