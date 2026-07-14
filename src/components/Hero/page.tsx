"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate card position and rotation based on scroll position
  // Starts on the left (-110px) when at top (scrollY = 0)
  // Moves across to the right up to a specific maximum point (+120px) and stops there
  const cardTranslateX = Math.min(120, -110 + scrollY * 0.45);
  const cardRotateDeg = Math.min(8, -12 + scrollY * 0.04);

  return (
    <section
      className="relative w-full flex flex-col gap-12 items-center bg-cover bg-center bg-no-repeat px-6 select-none overflow-hidden"
      style={{
        backgroundImage: 'url("/images/hero-bg.jpg")',
        paddingTop: "160px", /* Increased padding so H1 heading has ample breathing room below the navbar */
        paddingBottom: "100px",
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto gap-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-md">
          MAKE EVERY MEAL MORE <span className="text-[#4da6ff]">REWARDING</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-sm font-normal">
          From quick lunches to family dinners and weekend outings, discover exclusive restaurant deals, save on every meal, and enjoy great food for less.
        </p>

        {/* CTA Button */}
        <button className="bg-blue-400 hover:bg-blue-500 transition-colors w-[150px] rounded-[10px] h-[50px] font-semibold text-white shadow-lg cursor-pointer">
          Get Started
        </button>
      </div>

      {/* Phone + Scroll-Animated Portrait Card behind it */}
      <div className="relative z-10 mt-8 flex justify-center" style={{ perspective: "1200px" }}>
        {/* Outer relative container that holds both phone and card */}
        <div className="relative flex items-center justify-center" style={{ width: 360, height: 660 }}>

          {/* Animated portrait membership card — sits BEHIND the phone (lower z-index) */}
          <div
            className="absolute shadow-2xl transition-transform duration-150 ease-out"
            style={{
              width: 230,
              height: 365, /* Portrait orientation (height > width) */
              borderRadius: "20px",
              background: "linear-gradient(135deg,#C0102E 0%,#8A0C22 55%,#5E0716 100%)",
              boxShadow: "0 30px 70px rgba(0,0,0,0.6), 0 0 0 1.5px rgba(255,255,255,0.18) inset",
              zIndex: 0,
              top: "50%",
              left: "50%",
              marginLeft: -115,
              marginTop: -182,
              padding: "22px 20px",
              boxSizing: "border-box",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: `translateX(${cardTranslateX}px) rotate(${cardRotateDeg}deg) translateZ(-40px)`,
              willChange: "transform",
            }}
          >
            {/* Card radial highlight */}
            <div style={{ position: "absolute", top: -50, right: -40, width: 190, height: 190, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.22) 0%,transparent 65%)", pointerEvents: "none" }} />

            {/* Top row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.6px" }}>dealona</span>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "1px", background: "rgba(255,255,255,0.18)", border: "0.5px solid rgba(255,255,255,0.35)", borderRadius: 20, padding: "3.5px 12px" }}>SMART</span>
            </div>

            {/* Middle Section: Member & Chip */}
            <div style={{ margin: "20px 0" }}>
              {/* EMV Chip graphic simulation */}
              <div style={{ width: 40, height: 30, borderRadius: 6, background: "linear-gradient(135deg, #ffd700 0%, #cca625 100%)", border: "0.5px solid rgba(0,0,0,0.3)", marginBottom: 20, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 0.5, background: "rgba(0,0,0,0.3)" }} />
                <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 0.5, background: "rgba(0,0,0,0.3)" }} />
              </div>

              <p style={{ fontSize: 10, letterSpacing: 1.4, margin: 0, color: "rgba(255,255,255,0.65)", textTransform: "uppercase" }}>Member</p>
              <p style={{ fontSize: 20, fontWeight: 600, margin: "4px 0 0" }}>Ali Khan</p>
            </div>

            {/* Bottom Section */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <p style={{ fontSize: 9, letterSpacing: 1.2, margin: 0, color: "rgba(255,255,255,0.65)", textTransform: "uppercase" }}>Valid for</p>
                  <p style={{ fontSize: 15, fontWeight: 600, margin: "3px 0 0" }}>6d 04h</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ display: "flex", gap: 5, justifyContent: "flex-end", marginBottom: 5 }}>
                    {[0, 1, 2].map((i) => (
                      <span key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: i === 0 ? "#F4C542" : "rgba(255,255,255,0.25)", border: i > 0 ? "0.5px solid rgba(255,255,255,0.4)" : "none", display: "inline-block" }} />
                    ))}
                  </div>
                  <p style={{ fontSize: 9, margin: 0, color: "rgba(255,255,255,0.85)" }}>1 of 3 partners</p>
                </div>
              </div>

              {/* Card number at very bottom */}
              <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.15)", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, letterSpacing: 1.8, color: "rgba(255,255,255,0.65)", fontFamily: "monospace" }}>•••• •••• 8842</span>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.55)" }}>DLN</span>
              </div>
            </div>
          </div>

          {/* Phone shell — on top (higher z-index, scaled up to width: 320px) */}
          <div className="absolute z-10" style={{ width: 320, top: 0, left: "50%", marginLeft: -160 }}>
            <div className="relative w-full aspect-[1/2] rounded-[2.8rem] border-[5px] border-zinc-600 p-4 shadow-2xl bg-gradient-to-br from-zinc-700 via-zinc-900 to-zinc-800">
              <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-white border border-neutral-200 shadow-inner">
                {/* Status bar */}
                <div className="absolute top-3.5 left-0 z-20 flex w-full items-center justify-between px-5 h-7 text-black text-xs select-none">
                  <div className="font-semibold tracking-tight w-[50px] flex items-center justify-center  text-xs">9:41</div>
                  <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black flex items-center justify-end w-22 h-6 pr-2.5 shadow-sm">
                    <div className="rounded-full bg-neutral-900 w-2.5 h-2.5" />
                  </div>
                  <div className="flex items-center gap-3 w-[50px]">
                    <svg className="fill-current w-3.5 h-3.5" viewBox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49z" /></svg>
                    <svg className="fill-current w-4 h-3" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" /></svg>
                  </div>
                </div>
                {/* Empty screen */}
                <div className="h-full" />
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black w-24 h-1.5" />
              </div>
              {/* Side buttons */}
              <div className="absolute -right-[5px] top-1/5 w-1.5 h-14 rounded-r-sm bg-gradient-to-r from-zinc-700 to-zinc-500" />
              <div className="absolute -left-[5px] top-1/6 w-1.5 h-9 rounded-l-sm bg-gradient-to-l from-zinc-700 to-zinc-500" />
              <div className="absolute -left-[5px] top-1/4 w-1.5 h-9 rounded-l-sm bg-gradient-to-l from-zinc-700 to-zinc-500" />
              <div className="absolute -left-[5px] top-1/3 w-1.5 h-9 rounded-l-sm bg-gradient-to-l from-zinc-700 to-zinc-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
