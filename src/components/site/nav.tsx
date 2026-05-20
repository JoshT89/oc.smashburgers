"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#tracker", label: "Grill Tracker" },
  { href: "#menu", label: "Menu" },
  { href: "#builder", label: "Smash Builder" },
  { href: "#story", label: "Our Story" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Live Open/Closed Status Logic
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
      const hour = now.getHours();
      // Mock open Wednesday to Saturday, 5pm to 10pm (17:00 to 22:00)
      const isWeekDay = day >= 3 && day <= 6;
      const isWithinHours = hour >= 17 && hour < 22;
      setIsOpen(isWeekDay && isWithinHours);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-lg border-b border-cream/10 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-6">
          <a href="#top" className="flex items-center gap-2 group">
            <Image
              src="/oclogo.png"
              alt="O'Connells' Burgers"
              width={56}
              height={56}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          {/* Pulsing Live Dot */}
          <div className="hidden lg:flex items-center gap-2 rounded-full border border-cream/10 bg-ink-ridge/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cream/80">
            <span className={`relative flex h-2 w-2`}>
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? "bg-lettuce" : "bg-red-500"}`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? "bg-lettuce" : "bg-red-500"}`} />
            </span>
            <span>{isOpen ? "Smashing Live" : "Resting Grills"}</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-cream/70 hover:text-cheese transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-cheese after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="bg-cheese text-ink hover:bg-cheese-hot font-bold rounded-full btn-shine shadow-[0_0_15px_rgba(245,165,36,0.25)] transition duration-300 px-5"
          >
            <a href="tel:07787732896" className="gap-2">
              <Phone className="size-4" />
              <span className="hidden sm:inline">07787 732896</span>
              <span className="sm:hidden">Call Van</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

