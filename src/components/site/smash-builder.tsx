"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Clipboard, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SmashBuilder() {
  const [patties, setPatties] = useState(2);
  const [bacon, setBacon] = useState(true);
  const [onions, setOnions] = useState(true);
  const [pickles, setPickles] = useState(true);
  const [sauce, setSauce] = useState(true);
  const [copied, setCopied] = useState(false);

  const resetBuilder = () => {
    setPatties(2);
    setBacon(true);
    setOnions(true);
    setPickles(true);
    setSauce(true);
  };

  // Stats calculation
  const drippiness = Math.min(100, patties * 18 + (sauce ? 30 : 0) + (onions ? 15 : 0));
  const crispiness = Math.min(100, patties * 10 + (bacon ? 40 : 0) + (onions ? 10 : 0));
  const savory = Math.min(100, patties * 25 + (bacon ? 20 : 0) + (sauce ? 5 : 0));

  const getCustomBuildText = () => {
    const pattyNames = ["Single", "Double", "Triple", "Quad-Stacker"];
    const pattyName = pattyNames[patties - 1] || `${patties}-Patty`;
    const toppings = [];
    if (bacon) toppings.push("Crispy Bacon");
    if (onions) toppings.push("Grilled Onions");
    if (pickles) toppings.push("Tangy Pickles");
    if (sauce) toppings.push("House Smash Sauce");
    
    const toppingsStr = toppings.length > 0 ? `with ${toppings.join(", ")}` : "plain";
    return `Hey O'Connells! Can I get a custom ${pattyName} Smash ${toppingsStr}? Smashed fresh! 🍔🔥`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getCustomBuildText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="builder" className="relative py-24 md:py-32 bg-ink-soft/40 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-cheese/5 via-transparent to-transparent" />
      
      <div className="mx-auto max-w-6xl px-5 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cheese/30 bg-cheese/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cheese">
            <Sparkles className="size-3" />
            Interactive Lab
          </span>
          <h2 className="mt-3 font-display text-[2.5rem] sm:text-5xl md:text-6xl">
            Build your <span className="text-cheese">smash</span>.
          </h2>
          <p className="mt-4 text-cream/70 text-base">
            Stack your patties, throw on the crispy bacon, melt the cheddar, and design your ultimate combination. Watch it stack live, then copy your custom order code to call it in!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Stack Canvas */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 rounded-3xl border border-cream/10 bg-ink/60 h-[480px] relative glow-cheese shadow-2xl">
            <div className="absolute top-4 left-4 text-xs font-mono uppercase text-cream/40 tracking-wider">
              Live Stack View
            </div>
            
            {/* Reset Action */}
            <button
              onClick={resetBuilder}
              className="absolute top-4 right-4 text-cream/40 hover:text-cheese transition-colors p-1.5 rounded-lg hover:bg-ink-soft"
              title="Reset Burger"
            >
              <RotateCcw className="size-4" />
            </button>

            {/* Stacking Burger Container */}
            <div className="relative w-full max-w-[320px] flex flex-col justify-end items-center h-[340px] pt-12 pb-6">
              
              {/* Ground Shadow */}
              <div className="absolute bottom-4 w-56 h-3 rounded-full bg-black/60 blur-[6px] -z-10" />

              <div className="flex flex-col-reverse items-center justify-end w-full relative">
                
                {/* 1. Bottom Bun */}
                <motion.div
                  layout
                  className="w-48 h-8 rounded-b-xl rounded-t-sm bg-gradient-to-t from-orange-800 to-amber-700 border-b border-orange-950/40 relative flex justify-center -mb-1 z-10"
                >
                  {/* Grill crust detail */}
                  <div className="absolute inset-x-4 top-0 h-1 bg-amber-900/30 rounded-full" />
                </motion.div>

                {/* 2. House Sauce (Bottom Layer) */}
                {sauce && (
                  <motion.div
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    className="w-44 h-2.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 relative -mb-1.5 z-20 overflow-hidden"
                  >
                    <div className="absolute inset-x-8 top-0.5 h-1 bg-white/25 rounded-full" />
                  </motion.div>
                )}

                {/* 3. Dynamic Patty & Cheese Stacks */}
                {Array.from({ length: patties }).map((_, idx) => (
                  <motion.div
                    key={`patty-stack-${idx}`}
                    layout
                    className="w-full flex flex-col items-center relative -mb-3 z-30"
                  >
                    {/* Cheese draped over patty */}
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0, y: -20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, type: "spring", stiffness: 200, damping: 18 }}
                      className="w-[172px] h-3 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-lg relative -mb-2.5 z-10 flex justify-between px-3 overflow-visible"
                    >
                      {/* Melted Cheese drips */}
                      <span className="w-2.5 h-5 bg-orange-400 rounded-b-full translate-y-1.5 translate-x-2" />
                      <span className="w-3.5 h-6 bg-yellow-400 rounded-b-full translate-y-2 -translate-x-1" />
                      <span className="w-2 h-4.5 bg-orange-400 rounded-b-full translate-y-1.5 translate-x-4" />
                    </motion.div>

                    {/* Smash Beef Patty (Textured, rough edges) */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0, y: -40 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04, type: "spring", stiffness: 180, damping: 14 }}
                      className="w-52 h-7 bg-gradient-to-r from-neutral-900 via-stone-800 to-neutral-900 border-y border-neutral-950/70 rounded-full relative flex items-center justify-center overflow-hidden"
                      style={{
                        clipPath: "polygon(0% 15%, 5% 5%, 15% 12%, 25% 4%, 35% 15%, 45% 6%, 55% 14%, 65% 5%, 75% 16%, 85% 6%, 95% 14%, 100% 20%, 98% 85%, 90% 95%, 80% 88%, 70% 96%, 60% 86%, 50% 94%, 40% 85%, 30% 95%, 20% 87%, 10% 94%, 0% 80%)",
                      }}
                    >
                      {/* Sear lines/textures */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.6)_80%)]" />
                      <div className="w-full h-px bg-neutral-950/20 top-2 absolute" />
                      <div className="w-full h-px bg-stone-700/30 bottom-2 absolute" />
                    </motion.div>
                  </motion.div>
                ))}

                {/* 4. Tangy Pickles */}
                {pickles && (
                  <motion.div
                    initial={{ y: -100, scale: 0.7, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    exit={{ y: -100, scale: 0.7, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 160, damping: 15 }}
                    className="w-40 flex justify-center gap-6 relative -mb-2 z-40"
                  >
                    <div className="w-11 h-3.5 bg-gradient-to-b from-green-700 to-emerald-900 rounded-full border border-green-950/50 shadow relative overflow-hidden flex items-center justify-center">
                      <div className="size-6 border border-dashed border-green-600/30 rounded-full" />
                    </div>
                    <div className="w-11 h-3.5 bg-gradient-to-b from-green-700 to-emerald-900 rounded-full border border-green-950/50 shadow relative overflow-hidden flex items-center justify-center rotate-[6deg]">
                      <div className="size-6 border border-dashed border-green-600/30 rounded-full" />
                    </div>
                  </motion.div>
                )}

                {/* 5. Caramelized Onions */}
                {onions && (
                  <motion.div
                    initial={{ y: -120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -120, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 140, damping: 14 }}
                    className="w-44 h-3 bg-transparent relative -mb-2.5 z-45 flex justify-center items-center gap-1.5"
                  >
                    {/* Onions shapes */}
                    <span className="w-6 h-1.5 bg-amber-500/80 rounded-full rotate-[12deg] translate-y-0.5" />
                    <span className="w-8 h-2 bg-yellow-600/90 rounded-full -rotate-[8deg] -translate-x-1" />
                    <span className="w-7 h-1.5 bg-amber-600/80 rounded-full rotate-[4deg] translate-x-1" />
                    <span className="w-6 h-2 bg-yellow-600/90 rounded-full -rotate-[15deg] translate-y-0.5" />
                  </motion.div>
                )}

                {/* 6. Crispy Bacon */}
                {bacon && (
                  <motion.div
                    initial={{ y: -160, rotate: -8, opacity: 0 }}
                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: -160, rotate: -8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 130, damping: 13 }}
                    className="w-48 flex justify-center gap-1 relative -mb-2 z-50 overflow-visible"
                  >
                    {/* Two crispy overlapping waves of bacon */}
                    <div className="w-24 h-4 bg-gradient-to-r from-red-950 via-red-800 to-red-950 border border-red-950/60 rounded relative flex items-center overflow-hidden rotate-[-5deg] origin-center shadow">
                      <div className="absolute inset-x-2 inset-y-1 bg-amber-600/35 rounded-full blur-[1px]" />
                    </div>
                    <div className="w-24 h-4 bg-gradient-to-r from-red-950 via-red-800 to-red-950 border border-red-950/60 rounded relative flex items-center overflow-hidden rotate-[8deg] origin-center -translate-x-3 -translate-y-0.5 shadow">
                      <div className="absolute inset-x-2 inset-y-1 bg-amber-600/35 rounded-full blur-[1px]" />
                    </div>
                  </motion.div>
                )}

                {/* 7. Top Bun (Glazed, shiny dome with sesame seeds) */}
                <motion.div
                  layout
                  className="w-[188px] h-20 bg-gradient-to-b from-amber-600 via-amber-700 to-orange-800 border-t border-amber-500/50 rounded-t-[5rem] rounded-b-[1.2rem] shadow-md relative z-[60] flex items-end justify-center pb-2 group"
                >
                  {/* Bun Glaze highlight */}
                  <div className="absolute top-2 left-6 right-6 h-6 bg-white/10 rounded-full blur-[2px] pointer-events-none" />
                  
                  {/* Sesame seeds (small white dots) */}
                  <div className="absolute inset-x-8 top-3 h-8 pointer-events-none opacity-85">
                    <span className="absolute size-0.5 bg-cream rounded-full top-1 left-2 rotate-12" />
                    <span className="absolute size-0.5 bg-cream rounded-full top-3 left-6 -rotate-12" />
                    <span className="absolute size-0.5 bg-cream rounded-full top-2 left-12 rotate-45" />
                    <span className="absolute size-0.5 bg-cream rounded-full top-5 left-16 -rotate-45" />
                    <span className="absolute size-0.5 bg-cream rounded-full top-1 left-20 rotate-12" />
                    <span className="absolute size-0.5 bg-cream rounded-full top-4 left-24 -rotate-12" />
                    <span className="absolute size-0.5 bg-cream rounded-full top-2 left-28 rotate-45" />
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

          {/* Control & Statistics Panel */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="rounded-3xl border border-cream/10 bg-ink-soft p-6 md:p-8">
              
              {/* patties Selector */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-display text-xl text-cream-bright flex items-center gap-2">
                    <span className="text-cheese">01.</span> Patty Stack
                  </h3>
                  <span className="font-display text-lg text-cheese">
                    {patties} {patties === 1 ? "Patty" : patties === 4 ? "Quad (Legend)" : "Patties"}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => setPatties((prev) => Math.max(1, prev - 1))}
                    disabled={patties <= 1}
                    className="size-11 rounded-full border border-cream/15 bg-ink text-cream hover:bg-cream/10 disabled:opacity-40"
                    size="icon"
                  >
                    -
                  </Button>
                  
                  <div className="flex-1 h-3 rounded-full bg-ink relative px-1 flex items-center">
                    <motion.div
                      layout
                      className="h-2.5 rounded-full bg-cheese glow-cheese"
                      style={{ width: `${(patties / 4) * 100}%` }}
                    />
                  </div>
                  
                  <Button
                    onClick={() => setPatties((prev) => Math.min(4, prev + 1))}
                    disabled={patties >= 4}
                    className="size-11 rounded-full border border-cream/15 bg-ink text-cream hover:bg-cream/10 disabled:opacity-40"
                    size="icon"
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Toppings Checklist */}
              <div className="mb-8 border-t border-cream/5 pt-6">
                <h3 className="font-display text-xl text-cream-bright mb-4">
                  <span className="text-cheese">02.</span> Smashed Add-ons
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CheckboxCard
                    id="bacon"
                    label="Crispy Bacon"
                    desc="Smoked oak & crispy"
                    checked={bacon}
                    onChange={setBacon}
                  />
                  <CheckboxCard
                    id="onions"
                    label="Grilled Onions"
                    desc="Sweet & caramelized"
                    checked={onions}
                    onChange={setOnions}
                  />
                  <CheckboxCard
                    id="pickles"
                    label="Tangy Pickles"
                    desc="Crunchy dill spears"
                    checked={pickles}
                    onChange={setPickles}
                  />
                  <CheckboxCard
                    id="sauce"
                    label="House Sauce"
                    desc="Secret pepper mayo"
                    checked={sauce}
                    onChange={setSauce}
                  />
                </div>
              </div>

              {/* Live Stat Meters */}
              <div className="border-t border-cream/5 pt-6 mb-8">
                <h3 className="font-display text-sm uppercase tracking-wider text-cream/45 mb-4">
                  Burger Chemistry
                </h3>
                
                <div className="space-y-4">
                  <StatProgress label="Drippiness 💦" value={drippiness} color="bg-amber-500" />
                  <StatProgress label="Crispiness 🥓" value={crispiness} color="bg-red-500" />
                  <StatProgress label="Savoury Depth 🍖" value={savory} color="bg-cheese" />
                </div>
              </div>

              {/* Order Preparation */}
              <div className="bg-ink rounded-2xl p-4 border border-cream/5">
                <div className="text-[10px] uppercase tracking-wider text-cream/50 mb-1">
                  Drafting order message
                </div>
                <div className="font-mono text-xs text-cream/80 line-clamp-2 select-all break-words leading-relaxed mb-4">
                  &quot;{getCustomBuildText()}&quot;
                </div>
                
                <Button
                  onClick={copyToClipboard}
                  className={`w-full h-12 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition duration-300 ${
                    copied
                      ? "bg-lettuce text-ink hover:bg-lettuce"
                      : "bg-cheese text-ink hover:bg-cheese-hot btn-shine"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="size-4" />
                      Order Copied!
                    </>
                  ) : (
                    <>
                      <Clipboard className="size-4" />
                      Copy & Grab Smash
                    </>
                  )}
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckboxCard({
  id,
  label,
  desc,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  desc: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition ${
        checked
          ? "border-cheese/40 bg-cheese/5 text-cream-bright shadow-[0_0_15px_-4px_rgba(245,165,36,0.15)]"
          : "border-cream/10 bg-ink hover:border-cream/25 text-cream/70"
      }`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <div className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition ${
        checked
          ? "border-cheese bg-cheese text-ink"
          : "border-cream/25 bg-ink-soft text-transparent"
      }`}>
        <Check className="size-3.5 stroke-[3]" />
      </div>
      <div>
        <div className="font-display text-sm">{label}</div>
        <div className="text-[10px] text-cream/45 mt-0.5 leading-none">{desc}</div>
      </div>
    </label>
  );
}

function StatProgress({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-xs font-semibold mb-1.5">
        <span className="text-cream/80">{label}</span>
        <span className="text-cream-bright">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-ink relative px-0.5 flex items-center overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-1.5 rounded-full ${color}`}
        />
      </div>
    </div>
  );
}
