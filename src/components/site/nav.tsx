"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#find", label: "Find Us" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-cream/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/oclogo.png"
            alt="O'Connells' Burgers"
            width={56}
            height={56}
            className="h-12 w-auto"
            priority
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-cream/80 hover:text-cheese transition"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button
          asChild
          size="sm"
          className="bg-cheese text-ink hover:bg-cheese-hot font-semibold shadow-[0_0_0_2px_rgba(0,0,0,1),0_0_0_3px_rgba(245,165,36,0.4)]"
        >
          <a href="tel:07787732896" className="gap-2">
            <Phone className="size-4" />
            <span className="hidden sm:inline">07787 732896</span>
            <span className="sm:hidden">Call</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
