"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      setIsMobile(w < 640);
      setIsMobileOrTablet(w < 1024);
      setIsCompactViewport(w >= 768 && h <= 820 && dpr >= 1.45);
    };
    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Scroll-driven & Hover-driven card animation
  const maxTranslateX = isMobile ? 50 : isCompactViewport ? 62 : 90;
  const maxRotate = 8;

  const scrollTranslateX = isMobile
    ? Math.min(50, -50 + scrollY * 0.22)
    : isCompactViewport
      ? Math.min(75, -70 + scrollY * 0.32)
      : Math.min(120, -110 + scrollY * 0.45) * 1.25;
  const scrollRotateDeg = Math.min(8, -12 + scrollY * 0.06);

  const activeHover = isHovered && !isMobileOrTablet;
  const cardTranslateX = activeHover ? maxTranslateX : scrollTranslateX;
  const cardRotateDeg = activeHover ? maxRotate : scrollRotateDeg;

  const cardTransform = `translate(-50%, -50%) translateX(${cardTranslateX}px) rotate(${cardRotateDeg}deg) translateZ(-30px)`;
  const heroTitleStyle: React.CSSProperties | undefined = isCompactViewport
    ? { fontSize: "clamp(2.4rem, 4vw, 3.5rem)" }
    : undefined;
  const phoneStageMinHeight = isCompactViewport ? "clamp(430px, 68svh, 620px)" : "clamp(400px, 90vw, 780px)";
  const phoneStageMaxWidth = isCompactViewport ? "min(50vw, 440px)" : undefined;
  const phoneImageStyle: React.CSSProperties = {
    // Reduced scales slightly so it doesn't overflow at 125% zoom
    transform: isCompactViewport ? "scale(1.56)" : "scale(1.3)",
    transition: "transform 0.2s ease-in-out",
    ...(isCompactViewport ? { height: "min(68svh, 650px)", width: "auto", maxWidth: "100%" } : {}),
  };
  // Increased card width clamp values to make the card bigger
  const cardWidth = isCompactViewport ? "clamp(150px, 18vw, 180px)" : "clamp(150px, 28vw, 230px)";
  // On mobile/tablet, align content to the top (with generous top padding) so the
  // heading never sits behind the fixed navbar. On desktop keep it vertically centered.
  const sectionClassName = `relative w-full min-h-[100dvh] flex items-start lg:items-center px-4 sm:px-8 lg:px-16 pb-6 ${isCompactViewport ? "pt-24" : "pt-28 sm:pt-32 lg:pt-16"} select-none overflow-hidden bg-[#4C7A5E]`;

  return (
    <section className={sectionClassName}>
      {/* Two-column layout container */}
      <div className="relative z-10 w-full  max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-6">

        {/* ── LEFT COLUMN — Content ── */}
        <div className={`flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl ${isCompactViewport ? "gap-4" : "gap-6"}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1] drop-shadow-md" style={heroTitleStyle}>
            MAKE EVERY MEAL MORE <span className="text-[#F4C542] font-extrabold">REWARDING</span>
          </h1>

          <p className="text-base  sm:text-lg md:text-xl text-white/90 max-w-xl leading-relaxed drop-shadow-sm font-[syne]">
            From quick lunches to family dinners and weekend outings, discover exclusive restaurant deals, save on every meal, and enjoy great food for less.
          </p>

          {/* CTA Button */}
          <button className="bg-[#F4C542] hover:bg-[#E2B330] transition-colors w-[150px] rounded-[10px] h-[50px] font-semibold text-[#141412] shadow-lg cursor-pointer">
            Get Deloona
          </button>
        </div>

        {/* ── RIGHT COLUMN — Phone + Card ── */}
        <div
          className="flex-1 flex justify-center lg:justify-end items-center relative w-full mt-4 lg:mt-15"
          style={{ perspective: "1200px" }}
        >
          {/* Outer container — phone + card stacked, here you can change size of phone */}
          <div
            // Removed border-2 and increased lg:max-w to 550px to give the larger elements more room
            className={`relative flex items-center justify-center w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[55vw] lg:max-w-[550px] ${isMobileOrTablet ? "" : "cursor-pointer"}`}
            style={{ minHeight: phoneStageMinHeight, maxWidth: phoneStageMaxWidth }}
            onMouseEnter={() => !isMobileOrTablet && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            {/* ── Membership Card (behind phone, z-0) ── */}
            <div
              className="absolute z-0 shadow-2xl transition-transform duration-700 ease-out flex flex-col justify-between rounded-[20px] p-5 box-border text-white will-change-transform"
              style={{
                width: cardWidth,
                height: "auto",
                aspectRatio: "53.98 / 85.6", // Exact physical card ratio (85.6 mm by 53.98 mm)
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
                style={phoneImageStyle}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
