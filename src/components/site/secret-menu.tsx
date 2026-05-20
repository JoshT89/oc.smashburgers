"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, Flame, Sparkles, AlertCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

type SecretItem = {
  name: string;
  tagline: string;
  desc: string;
  specs: string[];
  heatLevel: number;
};

const secretBurgers: SecretItem[] = [
  {
    name: "The Triple Threat Jam Smash",
    tagline: "You need a napkin, possibly a bib.",
    desc: "Three premium hand-smashed patties, triple dripping cheddar melt, caramelized sweet bacon jam, black pepper garlic aioli, and crispy crown onions.",
    specs: ["Triple Beef", "Sweet Bacon Jam", "Triple Cheddar", "Garlic Aioli"],
    heatLevel: 1,
  },
  {
    name: "The PB&J Flame Smash",
    tagline: "Bizarre combination, total revelation.",
    desc: "Two smashed beef patties, pepper jack melt, charred jalapeños, thick warm peanut butter, and red-hot sweet chili jelly. Unbelievably messy and savory.",
    specs: ["Double Beef", "Warm Peanut Butter", "Charred Jalapeños", "Sweet Chili Jelly"],
    heatLevel: 3,
  },
  {
    name: "The Black Truffle Beast",
    tagline: "The classiest burger to eat in a car park.",
    desc: "Two hand-smashed beef patties, premium melted Swiss cheese, caramelized wild buttered mushrooms, shaved truffles, and house truffle garlic aioli.",
    specs: ["Double Beef", "Swiss Cheese Melt", "Wild Buttered Mushrooms", "Truffle Garlic Aioli"],
    heatLevel: 0,
  },
];

export function SecretMenu() {
  const [dialCode, setDialCode] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const rotateDial = () => {
    if (unlocked) return;
    setDialCode((prev) => (prev + 1) % 10);
    setErrorMsg(false);
  };

  const attemptUnlock = () => {
    if (dialCode === 7) {
      setUnlocked(true);
    } else {
      setErrorMsg(true);
      setTimeout(() => setErrorMsg(false), 2000);
    }
  };

  return (
    <section id="secret" className="relative py-24 md:py-32 bg-gradient-to-b from-ink to-ink-soft overflow-hidden">
      
      {/* Visual background steam grids */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_white_1px,_transparent_1px)] bg-[size:32px_32px] -z-10" />

      <div className="mx-auto max-w-6xl px-5 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-950/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-400 font-semibold animate-pulse">
            <Lock className="size-3" />
            Classified Grills
          </span>
          <h2 className="mt-3 font-display text-[2.5rem] sm:text-5xl md:text-6xl text-cream-bright">
            The <span className="text-red-500 text-glow-red">secret</span> vault.
          </h2>
          <p className="mt-4 text-cream/70 text-base">
            O&apos;Connells&apos; hidden culinary archives. Crack the combination lock dial to slide open the vault doors and reveal our high-end secret menu.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!unlocked ? (
            /* Locked Dial Interface */
            <motion.div
              key="locked-vault"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="max-w-md mx-auto p-8 rounded-3xl border border-red-950/40 bg-ink-soft/60 backdrop-blur flex flex-col items-center justify-center text-center shadow-[0_20px_50px_-20px_rgba(239,68,68,0.15)]"
            >
              <div className="mb-6 font-display text-xs uppercase tracking-widest text-red-400/70">
                Grill Vault Security Dial
              </div>

              {/* Rotary SVG Vault Dial */}
              <div className="relative size-48 mb-8 flex items-center justify-center">
                {/* Vault Wheel Outer Rim */}
                <div className="absolute inset-0 rounded-full border-[4px] border-neutral-700 bg-neutral-800 shadow-inner" />
                
                {/* Rotating SVG Wheel Dial */}
                <motion.div
                  animate={{ rotate: dialCode * 36 }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  onClick={rotateDial}
                  className="absolute size-40 rounded-full border-2 border-neutral-600 bg-neutral-900 shadow-2xl cursor-pointer flex items-center justify-center select-none active:scale-95 transition-transform"
                >
                  {/* Wheel handle lines */}
                  <div className="absolute w-full h-1.5 bg-neutral-700" />
                  <div className="absolute h-full w-1.5 bg-neutral-700" />
                  
                  {/* Outer numbers */}
                  {Array.from({ length: 10 }).map((_, n) => (
                    <div
                      key={`num-${n}`}
                      className="absolute font-mono text-xs font-bold text-neutral-400"
                      style={{
                        transform: `rotate(${n * 36}deg) translateY(-60px)`,
                      }}
                    >
                      {n}
                    </div>
                  ))}

                  {/* Inner Metal Center */}
                  <div className="size-20 rounded-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 border-2 border-neutral-600 shadow flex items-center justify-center">
                    <span className="font-mono text-2xl font-bold text-red-500 tracking-tighter">
                      {dialCode}
                    </span>
                  </div>
                </motion.div>
                
                {/* Indicator notch */}
                <div className="absolute top-0 w-2.5 h-4 bg-red-500 rounded-b" />
              </div>

              <div className="space-y-4 w-full">
                <p className="text-xs text-cream/55 leading-relaxed">
                  <span className="text-red-400 font-semibold">Hint:</span> Rotate the wheel dial to O&apos;Connells lucky number from their contact details (the first digit after the country mobile prefix).
                </p>

                <div className="flex gap-3 mt-4">
                  <Button
                    onClick={rotateDial}
                    className="flex-1 h-11 rounded-xl bg-ink-ridge border border-red-500/20 text-cream hover:bg-ink text-xs font-bold"
                  >
                    🔄 Rotate Dial (+1)
                  </Button>
                  <Button
                    onClick={attemptUnlock}
                    className="flex-1 h-11 rounded-xl bg-red-600 hover:bg-red-500 text-ink font-bold text-xs"
                  >
                    🔓 Pull Handle
                  </Button>
                </div>

                <AnimatePresence>
                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex items-center gap-1.5 justify-center text-xs text-red-400 bg-red-950/20 border border-red-500/20 py-2 px-3 rounded-lg mt-3"
                    >
                      <AlertCircle className="size-3.5" /> Alarm: Incorrect Vault Combo Code!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            /* Unlocked Secret Menu Items */
            <motion.div
              key="unlocked-vault"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="w-full"
            >
              <div className="flex items-center justify-center gap-3 mb-10 text-center">
                <span className="p-2 bg-lettuce/15 rounded-full border border-lettuce/30 text-lettuce animate-pulse">
                  <Unlock className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-lettuce">Vault Decryption Successful</h3>
                  <p className="text-xs uppercase tracking-widest text-cream/45 mt-0.5">Hydraulics engaged · Secret items loaded</p>
                </div>
              </div>

              {/* Secret Menu Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {secretBurgers.map((item, idx) => (
                  <motion.article
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-red-500/20 bg-ink-soft/40 p-6 shadow-xl transition-all duration-300 hover:border-red-500/40 hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(239,68,68,0.2)]"
                  >
                    {/* Glowing Accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 via-transparent to-transparent -z-10" />

                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-red-950/30 border border-red-500/30 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-red-400">
                          Secret Recipe
                        </span>
                        
                        <div className="flex gap-0.5">
                          {Array.from({ length: 3 }).map((_, starIdx) => (
                            <Flame
                              key={`flame-${starIdx}`}
                              className={`size-3.5 ${
                                starIdx < item.heatLevel 
                                  ? "text-red-500 fill-red-500" 
                                  : "text-neutral-700"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <h4 className="font-display text-2xl text-cream-bright leading-tight group-hover:text-red-400 transition-colors">
                        {item.name}
                      </h4>
                      <p className="mt-1 font-script text-lg text-red-400 leading-none">
                        &quot;{item.tagline}&quot;
                      </p>
                      
                      <p className="mt-4 text-xs text-cream/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-cream/5">
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {item.specs.map((spec) => (
                          <span
                            key={spec}
                            className="text-[9px] uppercase tracking-wider bg-ink/75 border border-cream/10 text-cream/80 px-2 py-0.5 rounded-md"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      <Button
                        asChild
                        className="w-full h-10 rounded-xl bg-red-600 text-ink hover:bg-red-500 font-bold text-xs flex items-center justify-center gap-2 group-hover:btn-shine"
                      >
                        <a href="tel:07787732896">
                          <PhoneCall className="size-3.5" />
                          Order Secret Build
                        </a>
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Warning tag */}
              <div className="mt-12 max-w-xl mx-auto flex items-start gap-3 p-4 rounded-xl border border-dashed border-red-500/20 bg-red-950/5 text-center justify-center">
                <span className="p-1 rounded bg-red-500/10 text-red-500 shrink-0">
                  <AlertCircle className="size-4" />
                </span>
                <p className="text-[11px] text-cream/60 leading-relaxed text-left">
                  <span className="text-red-400 font-semibold">Important Vault Note:</span> These combinations require specific prep times and low-demand grill states. Speak directly to the van chef when ringing inside opening hours to verify ingredient availability!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
