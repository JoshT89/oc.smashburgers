"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative grain isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
    >
      <Glow />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative z-10 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-cheese/40 bg-cheese/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cheese"
            >
              <span className="size-1.5 rounded-full bg-cheese animate-pulse" />
              Smashed fresh · Estd 2025
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-[2.6rem] leading-[0.95] tracking-tight text-cream-bright sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              Banging
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-cheese">smashburgers</span>
                <svg
                  aria-hidden
                  viewBox="0 0 300 18"
                  className="absolute -bottom-2 left-0 w-full text-cheese/70"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 12 C 60 2, 140 16, 298 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="font-script text-cream/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                from the back of a van.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-cream/80 lg:mx-0"
            >
              Find the black van. Order a smashed double with crispy onions
              and proper melt. Walk away changed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="group h-12 rounded-full bg-cheese px-7 text-base font-semibold text-ink hover:bg-cheese-hot"
              >
                <a href="#menu">
                  See the menu
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-cream/30 bg-transparent px-7 text-base font-semibold text-cream-bright hover:bg-cream/10 hover:text-cream-bright"
              >
                <a href="#find">
                  <MapPin className="size-4" />
                  Find the van
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.22em] text-cream/50 lg:justify-start"
            >
              <span>Hand-smashed</span>
              <span className="size-1 rounded-full bg-cream/30" />
              <span>No microwaves</span>
              <span className="size-1 rounded-full bg-cream/30" />
              <span>Local love</span>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto aspect-square w-[min(100%,560px)]"
            >
              <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cheese/30 via-char/20 to-transparent blur-3xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-cream/15 bg-ink-soft shadow-[0_30px_120px_-30px_rgba(245,165,36,0.4)]">
                <Image
                  src="/burger1.png"
                  alt="A smashed double burger with crispy onions"
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
              </div>

              <motion.div
                className="absolute -right-3 -top-4 hidden md:block float-slow"
                aria-hidden
              >
                <div className="rotate-[8deg] rounded-full bg-cheese px-4 py-2 font-display text-xs uppercase tracking-wide text-ink shadow-lg">
                  Hot · Today
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-4 -left-2 rotate-[-4deg] rounded-2xl border border-cream/15 bg-ink-soft/95 backdrop-blur px-4 py-3 shadow-xl md:-left-6"
              >
                <p className="font-script text-2xl leading-none text-cheese">
                  &quot;Best burger I&apos;ve had in years&quot;
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-cream/60">
                  — a very happy customer
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Glow() {
  return (
    <>
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 size-[680px] -translate-x-1/2 rounded-full bg-cheese/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 size-[420px] translate-x-1/3 rounded-full bg-char/20 blur-[120px]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,236,216,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(244,236,216,0.7) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />
    </>
  );
}
