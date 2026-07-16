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

  // Scroll-driven card animation
  const cardTranslateX = Math.min(120, -110 + scrollY * 0.45);
  const cardRotateDeg = Math.min(8, -12 + scrollY * 0.04);
  const cardTransform = `translate(-50%, -50%) translateX(${cardTranslateX * 1.25}px) rotate(${cardRotateDeg}deg) translateZ(-30px)`;

  return (
    <section className="relative w-full flex items-center px-4 sm:px-8 lg:px-16 pb-6 pt-40 lg:pt-8 select-none overflow-hidden bg-[#8A0C22]">

      {/* Subtle dark gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141412]/30 via-transparent to-[#141412]/40 z-0 pointer-events-none" />

      {/* Two-column layout container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-6">

        {/* ── LEFT COLUMN — Content ── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-md">
            MAKE EVERY MEAL MORE <span className="text-[#F4C542]">REWARDING</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl leading-relaxed drop-shadow-sm font-normal">
            From quick lunches to family dinners and weekend outings, discover exclusive restaurant deals, save on every meal, and enjoy great food for less.
          </p>

          {/* CTA Button */}
          <button className="bg-[#141412] hover:bg-[#2C2C2A] transition-colors w-[150px] rounded-[10px] h-[50px] font-semibold text-white shadow-lg cursor-pointer">
            Get Started
          </button>
        </div>

        {/* ── RIGHT COLUMN — Phone + Card ── */}
        <div
          className="flex-1 flex justify-center lg:justify-end items-center relative w-full mt-4 lg:mt-0"
          style={{ perspective: "1200px" }}
        >
          {/* Outer container — phone + card stacked, here you can change size of phone */}
          <div
            className="relative flex items-center justify-center w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[55vw] lg:max-w-[470px]"
            style={{ minHeight: "clamp(400px, 90vw, 780px)" }}
          >

            {/* ── Membership Card (behind phone, z-0) ── */}
            <div
              className="absolute z-0 shadow-2xl transition-transform duration-150 ease-out flex flex-col justify-between rounded-[20px] p-5 box-border text-white will-change-transform"
              style={{
                width: "clamp(180px, 24vw, 220px)",
                height: "clamp(285px, 38vw, 340px)",
                background: "linear-gradient(135deg,#C0102E 0%,#8A0C22 55%,#5E0716 100%)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.55), 0 0 0 1.5px rgba(255,255,255,0.22) inset",
                top: "50%",
                left: "50%",
                transform: cardTransform,
              }}
            >
              {/* Card radial highlight */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  top: -50, right: -40, width: 230, height: 230,
                  background: "radial-gradient(circle,rgba(255,255,255,0.22) 0%,transparent 65%)",
                }}
              />

              {/* Top row */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold tracking-tight">dealona</span>
                <span className="text-[10px] font-semibold tracking-widest bg-white/20 border border-white/35 rounded-full px-3 py-1">SMART</span>
              </div>

              {/* Middle — Member info */}
              <div className="my-4">
                <p className="text-[10px] uppercase tracking-widest text-white/65 m-0">Member</p>
                <p className="text-lg font-semibold mt-1">Ali Khan</p>
              </div>

              {/* Bottom section */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-white/65 m-0">Valid for</p>
                    <p className="text-sm font-semibold mt-1">6d 04h</p>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-1 justify-end mb-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="inline-block w-2.5 h-2.5 rounded-full"
                          style={{
                            background: i === 0 ? "#F4C542" : "rgba(255,255,255,0.25)",
                            border: i > 0 ? "0.5px solid rgba(255,255,255,0.4)" : "none",
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-[9px] text-white/85 m-0">1 of 3 partners</p>
                  </div>
                </div>

                {/* Card number */}
                <div className="flex justify-between items-center border-t border-white/15 pt-2">
                  <span className="text-[11px] tracking-widest text-white/65 font-mono">•••• •••• 8842</span>
                  <span className="text-[9px] text-white/55">DLN</span>
                </div>
              </div>
            </div>

            {/* ── Phone image (in front, z-10) ── */}
            <div
              className="relative z-10 flex justify-center items-center pointer-events-none w-full"
              style={{ transform: "translateZ(0px)" }}
            >
              <img
                src="/images/mobile.png"
                alt="Deloona Mobile App"
                className="w-full h-auto object-contain drop-shadow-2xl select-none"
                style={{ transform: "scale(1.4)", transition: "transform 0.2s ease-in-out" }}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
