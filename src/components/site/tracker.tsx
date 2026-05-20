"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Clock, Flame, Info, MapPin, Phone, RefreshCw, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Tracker() {
  const [isOpen, setIsOpen] = useState(true);
  const [pattyStock, setPattyStock] = useState(24);
  const [grillTemp, setGrillTemp] = useState(482);
  const [salesCount, setSalesCount] = useState(176);

  // Auto-oscillate grill temperature slightly for dynamic feeling
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setGrillTemp((prev) => {
        const delta = Math.floor(Math.random() * 7) - 3;
        const next = prev + delta;
        return next > 495 ? 495 : next < 465 ? 465 : next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const simulateSale = () => {
    if (pattyStock > 0) {
      setPattyStock((prev) => prev - 1);
      setSalesCount((prev) => prev + 1);
    }
  };

  const restock = () => {
    setPattyStock(60);
  };

  return (
    <section id="tracker" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.22em] text-cheese font-semibold">
              <span className="size-1.5 rounded-full bg-cheese animate-pulse" />
              Live Dashboard
            </span>
            <h2 className="mt-3 font-display text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl">
              Grill <span className="text-cheese">tracker</span>.
            </h2>
            <p className="mt-4 max-w-xl text-cream/70 text-base">
              See what’s sizzling in real-time. Toggle the simulation switches below to experience both open & sold-out statuses of our mobile kitchen!
            </p>
          </div>

          {/* Interactive Simulation Controls Panel */}
          <div className="flex flex-wrap items-center gap-3 p-3 rounded-2xl border border-cream/10 bg-ink-soft/80 backdrop-blur-md self-start">
            <div className="text-[10px] uppercase font-bold tracking-wider text-cream/55 px-2">
              SIMULATOR CONTROLS:
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition duration-300 ${
                isOpen
                  ? "bg-lettuce/15 text-lettuce border border-lettuce/30"
                  : "bg-red-500/15 text-red-400 border border-red-500/30"
              }`}
            >
              Toggle Open/Closed
            </button>
            {isOpen && (
              <button
                onClick={simulateSale}
                disabled={pattyStock === 0}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-cheese text-ink hover:bg-cheese-hot transition disabled:opacity-40"
              >
                🍔 Sell Burger
              </button>
            )}
            {pattyStock < 10 && (
              <button
                onClick={restock}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-ink-ridge border border-cream/15 text-cream hover:bg-ink transition flex items-center gap-1"
              >
                <RefreshCw className="size-3" /> Restock
              </button>
            )}
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Status Panel */}
          <div className="lg:col-span-8 flex flex-col justify-between p-8 rounded-3xl border border-cream/10 bg-ink-soft/40 relative overflow-hidden shadow-xl min-h-[380px]">
            {/* Background Glows */}
            <div className={`absolute top-0 right-0 size-[280px] rounded-full blur-[100px] pointer-events-none -z-10 transition-colors duration-1000 ${
              isOpen ? "bg-cheese/10" : "bg-red-950/20"
            }`} />
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    isOpen 
                      ? "bg-lettuce/10 border border-lettuce/30 text-lettuce"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}>
                    <span className={`size-1.5 rounded-full ${isOpen ? "bg-lettuce animate-pulse" : "bg-red-400"}`} />
                    {isOpen ? "Sizzling Now" : "Grills Cold"}
                  </span>

                  {isOpen && pattyStock <= 10 && pattyStock > 0 && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 border border-red-500/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-400 animate-bounce">
                      <AlertTriangle className="size-3" /> Low Stock
                    </span>
                  )}
                </div>
                
                <h3 className="mt-4 font-display text-3xl sm:text-4xl text-cream-bright leading-tight">
                  {isOpen 
                    ? "Currently Smashing at the Grange Car Park!" 
                    : "Van is Currently Parked & Grills Rested"
                  }
                </h3>
                <p className="mt-2 text-cream/65 text-sm max-w-prose">
                  {isOpen
                    ? "Our massive flat-top is fired up. Smell the browned butter, walk up, and grab yours before the patties run dry!"
                    : "Grills are clean and beef is cooling. We smash Wednesdays through Saturdays, starting at 5pm. Pop back then!"
                  }
                </p>
              </div>

              {/* Countdown or Operating Schedule */}
              <div className="shrink-0 p-4 rounded-2xl border border-cream/5 bg-ink/50 text-center w-full md:w-auto">
                {isOpen ? (
                  <>
                    <p className="text-[10px] uppercase tracking-wider text-cream/45 mb-1">Estimated closing</p>
                    <p className="font-display text-2xl text-cheese">10:00 PM</p>
                    <p className="text-[10px] text-cream/55 mt-1">Or when sold out</p>
                  </>
                ) : (
                  <>
                    <p className="text-[10px] uppercase tracking-wider text-cream/45 mb-1">Next Popup</p>
                    <p className="font-display text-2xl text-cream-bright">Wed 5:00 PM</p>
                    <p className="text-[10px] text-cheese mt-1">Grange Corner Spot</p>
                  </>
                )}
              </div>
            </div>

            {/* Gauges Section */}
            <div className="mt-12 border-t border-cream/5 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Patty Stock Meter */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-cream/60 uppercase tracking-wider">Patty Reserve</span>
                  <span className={`font-display text-lg ${
                    pattyStock === 0 ? "text-red-400" : pattyStock <= 10 ? "text-cheese" : "text-lettuce"
                  }`}>
                    {pattyStock > 0 ? `${pattyStock} Left` : "SOLD OUT!"}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-ink overflow-hidden p-0.5 flex items-center">
                  <motion.div
                    animate={{ width: `${(pattyStock / 60) * 100}%` }}
                    className={`h-1 rounded-full ${
                      pattyStock === 0 ? "bg-red-500" : pattyStock <= 10 ? "bg-cheese" : "bg-lettuce animate-pulse"
                    }`}
                  />
                </div>
                <p className="text-[10px] text-cream/45 mt-1.5">
                  {pattyStock > 20 
                    ? "Healthy stock levels. No rush!" 
                    : pattyStock > 0 
                      ? "Selling rapidly. Call ahead recommended!" 
                      : "We're clean out of beef today!"
                  }
                </p>
              </div>

              {/* Sizzle Temp Meter */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-cream/60 uppercase tracking-wider flex items-center gap-1">
                    <Flame className="size-3 text-cheese" /> Grill Temp
                  </span>
                  <span className="font-display text-lg text-cream-bright">
                    {isOpen ? `${grillTemp}°F` : "Off (Rested)"}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-ink overflow-hidden p-0.5 flex items-center">
                  <motion.div
                    animate={{ width: isOpen ? `${(grillTemp / 500) * 100}%` : "0%" }}
                    className="h-1 rounded-full bg-gradient-to-r from-cheese to-char"
                  />
                </div>
                <p className="text-[10px] text-cream/45 mt-1.5">
                  {isOpen ? "Perfect caramelization heat." : "Cooled down to ambient temp."}
                </p>
              </div>

              {/* Smashed Count Counter */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-cream/60 uppercase tracking-wider flex items-center gap-1">
                    <TrendingUp className="size-3 text-lettuce" /> Total Smashed
                  </span>
                  <span className="font-display text-lg text-cheese">
                    {salesCount} Patties
                  </span>
                </div>
                <div className="h-2 rounded-full bg-ink overflow-hidden p-0.5 flex items-center">
                  <motion.div
                    animate={{ width: "100%" }}
                    className="h-1 rounded-full bg-ink-ridge"
                  />
                </div>
                <p className="text-[10px] text-cream/45 mt-1.5">
                  Hand-formed & smashed today.
                </p>
              </div>

            </div>
          </div>

          {/* Quick-Info / Contact Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Spot Finder Glass Card */}
            <div className="p-6 rounded-3xl border border-cream/10 bg-ink/40 flex flex-col justify-between flex-1 relative overflow-hidden">
              <div>
                <h4 className="font-display text-xl text-cream-bright flex items-center gap-2 mb-4">
                  <MapPin className="size-5 text-cheese" /> Spot Finder
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-cream/50">Current Pit-Stop</span>
                    <p className="font-display text-lg text-cheese mt-0.5">The Grange Corner</p>
                    <p className="text-xs text-cream/60 mt-0.5">Quiet carpark, opposite the park gates.</p>
                  </div>
                  
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-cream/50">Next Expected Spot</span>
                    <p className="font-display text-lg text-cream-bright mt-0.5">Market Square Popup</p>
                    <p className="text-xs text-cream/60 mt-0.5">Saturday Lunch, 11:30 AM onwards.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-cream/5 pt-6 flex flex-col gap-3">
                <Button
                  asChild
                  className="w-full h-11 rounded-xl bg-cheese text-ink hover:bg-cheese-hot font-bold btn-shine flex items-center justify-center gap-2"
                >
                  <a href="tel:07787732896">
                    <Phone className="size-4" />
                    Call & Order Ahead
                  </a>
                </Button>
                <div className="text-[9px] text-center text-cream/40 uppercase tracking-wider">
                  skip the queue · walk up & grab
                </div>
              </div>
            </div>

            {/* Quick Live Tips Banner */}
            <div className="p-5 rounded-2xl border border-dashed border-cream/15 bg-ink-soft/40 flex gap-4 items-start">
              <span className="p-2 rounded-xl bg-cheese/10 border border-cheese/20 text-cheese shrink-0">
                <Info className="size-4" />
              </span>
              <div>
                <h5 className="font-display text-sm text-cream-bright">Van Rule of Thumb</h5>
                <p className="text-xs text-cream/60 mt-1 leading-relaxed">
                  No microwaves, no warming racks. Once we stack the grills, your burger is hand-smashed on site. High wind or low stock can shift spots, so call if in doubt!
                </p>
              </div>
            </div>

          </div>
          
        </div>
        
      </div>
    </section>
  );
}
