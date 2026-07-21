"use client";

import React, { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────
   CARD DATA
───────────────────────────────────────────────────────────────── */
interface CardData {
  id: string;
  name: string;
  badge: string;
  badgeBg: string;
  badgeBorder: string;
  badgeColor: string;
  gradient: string;
  textColor: string;
  subTextColor: string;
  validFor: string;
  cardNo: string;
  tagline: string;
  description: string;
  accentColor: string;
  renderSlot: () => React.ReactNode;
  renderOverlay?: () => React.ReactNode;
}

const CARDS: CardData[] = [
  {
    id: "mini",
    name: "Mini",
    badge: "MINI",
    badgeBg: "rgba(44,44,42,0.10)",
    badgeBorder: "0.5px solid rgba(44,44,42,0.22)",
    badgeColor: "#2C2C2A",
    gradient: "linear-gradient(135deg,#E8E6E1 0%,#D6D3CB 100%)",
    textColor: "#2C2C2A",
    subTextColor: "rgba(44,44,42,0.55)",
    validFor: "18h 40m",
    cardNo: "DLN-8842",
    tagline: "Start your journey",
    description: "Get instant access to 1 partner with a short-term pass.",
    accentColor: "#4b4b4a",
    renderSlot: () => (
      <div className="text-right">
        <i className="ti ti-bolt block text-lg mb-0.5" />
        <p className="text-[10px] m-0 opacity-70">1 partner slot</p>
      </div>
    ),
  },
  {
    id: "smart",
    name: "Smart",
    badge: "SMART",
    badgeBg: "rgba(255,255,255,0.16)",
    badgeBorder: "0.5px solid rgba(255,255,255,0.30)",
    badgeColor: "#fff",
    gradient: "linear-gradient(135deg,#C0102E 0%,#8A0C22 55%,#5E0716 100%)",
    textColor: "#fff",
    subTextColor: "rgba(255,255,255,0.60)",
    validFor: "6d 04h",
    cardNo: "DLN-8842",
    tagline: "Built for regulars",
    description: "Unlock 3 curated partner slots over 6 days.",
    accentColor: "#C0102E",
    renderOverlay: () => (
      <div
        className="absolute -top-10 -right-8 w-[180px] h-[180px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(255,255,255,0.18) 0%,transparent 65%)" }}
      />
    ),
    renderSlot: () => (
      <div className="text-right">
        <div className="flex gap-[5px] justify-end mb-[5px]">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-[13px] h-[13px] rounded-full inline-block"
              style={{
                background: i === 0 ? "#F4C542" : "rgba(255,255,255,0.25)",
                border: i > 0 ? "0.5px solid rgba(255,255,255,0.4)" : "none",
              }}
            />
          ))}
        </div>
        <p className="text-[10px] m-0" style={{ color: "rgba(255,255,255,0.8)" }}>
          1 of 3 partners
        </p>
      </div>
    ),
  },
  {
    id: "pro",
    name: "Pro",
    badge: "PRO",
    badgeBg: "rgba(255,255,255,0.16)",
    badgeBorder: "0.5px solid rgba(255,255,255,0.30)",
    badgeColor: "#fff",
    gradient: "linear-gradient(135deg,#8A0C22 0%,#5E0716 55%,#3A040D 100%)",
    textColor: "#fff",
    subTextColor: "rgba(255,255,255,0.60)",
    validFor: "13d 02h",
    cardNo: "DLN-8842",
    tagline: "For the power user",
    description: "Access up to 10 partner slots over 13 days.",
    accentColor: "#8A0C22",
    renderOverlay: () => (
      <div
        className="absolute -top-10 -right-8 w-[180px] h-[180px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(255,255,255,0.14) 0%,transparent 65%)" }}
      />
    ),
    renderSlot: () => (
      <div className="text-right">
        <div className="flex gap-1 justify-end mb-1">
          {[true, false].map((filled, si) => (
            <svg key={si} width="28" height="28" viewBox="-24 -24 48 48">
              <path d="M 0 0 L -5 -6.88 L 0 -22 L 5 -6.88 Z" fill={filled ? "#F4C542" : "none"} stroke={!filled ? "rgba(255,255,255,0.4)" : "none"} strokeWidth="0.75" />
              <path d="M 0 0 L 5 -6.88 L 20.92 -6.8 L 8.08 2.63 Z" fill={filled ? "#F4C542" : "none"} stroke={!filled ? "rgba(255,255,255,0.4)" : "none"} strokeWidth="0.75" />
              <path d="M 0 0 L 8.08 2.63 L 12.93 17.8 L 0 8.5 Z" fill={filled ? "#F4C542" : "none"} stroke={!filled ? "rgba(255,255,255,0.4)" : "none"} strokeWidth="0.75" />
              <path d="M 0 0 L 0 8.5 L -12.93 17.8 L -8.08 2.63 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
              <path d="M 0 0 L -8.08 2.63 L -20.92 -6.8 L -5 -6.88 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
            </svg>
          ))}
        </div>
        <p className="text-[10px] m-0" style={{ color: "rgba(255,255,255,0.8)" }}>
          3 of 10 partners
        </p>
      </div>
    ),
  },
  {
    id: "elite",
    name: "Elite",
    badge: "ELITE",
    badgeBg: "rgba(244,197,66,0.15)",
    badgeBorder: "0.5px solid rgba(244,197,66,0.5)",
    badgeColor: "#F4C542",
    gradient: "linear-gradient(135deg,#2C2C2A 0%,#141412 70%)",
    textColor: "#fff",
    subTextColor: "rgba(255,255,255,0.50)",
    validFor: "28d 11h",
    cardNo: "DLN-8842",
    tagline: "No limits. All access.",
    description: "Unlimited partner access for 28 days.",
    accentColor: "#F4C542",
    renderOverlay: () => (
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,#F4C542,transparent)" }}
      />
    ),
    renderSlot: () => (
      <div className="text-right">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center ml-auto mb-1"
          style={{ border: "1px solid #F4C542" }}
        >
          <i className="ti ti-infinity text-base" style={{ color: "#F4C542" }} />
        </div>
        <p className="text-[10px] m-0" style={{ color: "rgba(255,255,255,0.8)" }}>
          All partners
        </p>
      </div>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────────
   BREAKPOINT HELPERS
───────────────────────────────────────────────────────────────── */
interface BreakpointConfig {
  spreadMul: number;
  rotYMul: number;
  rotZMul: number;
  zDepthMul: number;
  perspective: number;
  isMobile: boolean;
  isTablet: boolean;
}

function getBreakpoint(vw: number, vh: number, dpr: number): BreakpointConfig {
  // At high zoom (125%/150%), the CSS viewport shrinks proportionally.
  // We use a continuous scale factor based on available area so the layout
  // smoothly adapts instead of jumping at arbitrary px breakpoints.
  const area = vw * vh;
  const refArea = 1920 * 1080; // reference: 1080p at 100%
  const effectiveScale = Math.min(1, Math.max(0.45, area / refArea));

  if (vw < 576) return { spreadMul: 0.45, rotYMul: 0.40, rotZMul: 0.40, zDepthMul: 0.35, perspective: 700, isMobile: true, isTablet: false };
  if (vw < 768) return { spreadMul: 0.55, rotYMul: 0.55, rotZMul: 0.55, zDepthMul: 0.50, perspective: 900, isMobile: true, isTablet: false };
  if (vw < 992) return { spreadMul: 0.65 * effectiveScale + 0.15, rotYMul: 0.70, rotZMul: 0.70, zDepthMul: 0.70, perspective: 1200, isMobile: false, isTablet: true };
  if (vw < 1200) return { spreadMul: 0.75 * effectiveScale + 0.15, rotYMul: 0.85 * effectiveScale + 0.1, rotZMul: 0.85, zDepthMul: 0.85, perspective: 1400, isMobile: false, isTablet: false };
  if (vw < 1440) return { spreadMul: 0.85 * effectiveScale + 0.1, rotYMul: 0.92 * effectiveScale + 0.05, rotZMul: 0.92, zDepthMul: 0.92, perspective: 1600, isMobile: false, isTablet: false };
  return { spreadMul: effectiveScale, rotYMul: effectiveScale, rotZMul: 1.0, zDepthMul: effectiveScale, perspective: 1800, isMobile: false, isTablet: false };
}

/* ─────────────────────────────────────────────────────────────────
   MEMBER CARD
───────────────────────────────────────────────────────────────── */
function MemberCard({ card, offset, isActive, onSelect, phoneW, bp }: {
  card: CardData; offset: number; isActive: boolean; onSelect: () => void; phoneW: number; bp: BreakpointConfig;
}) {
  const absOffset = Math.abs(offset);
  const cardW = bp.isMobile ? phoneW * 0.50 : phoneW * 0.68;
  const CARD_RATIO = 85.6 / 53.98;
  const cardH = cardW * CARD_RATIO;
  const spread = bp.isMobile ? cardW * 0.65 : cardW * 1.1 * bp.spreadMul;
  const translateX = offset * spread;
  const baseZ = phoneW * 0.12;
  const translateZ = isActive ? 2 : -absOffset * baseZ * 0.5 * bp.zDepthMul;
  const rotateY = offset * -14 * bp.rotYMul;
  const rotateZ = offset * 4 * bp.rotZMul;
  const scale = isActive ? 1 : Math.max(0.72, 1 - absOffset * 0.12);
  const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.3;

  return (
    <div
      onClick={onSelect}
      style={{
        position: "absolute", left: "50%", top: "50%",
        width: cardW, height: cardH, marginLeft: -cardW / 2, marginTop: -cardH / 2,
        cursor: isActive ? "default" : "pointer",
        transition: bp.isMobile ? "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease" : "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
        opacity, zIndex: isActive ? 10 : 10 - absOffset,
        pointerEvents: absOffset > 2 ? "none" : "auto",
      }}
    >
      <div
        className="w-full h-full relative overflow-hidden flex flex-col justify-between"
        style={{
          borderRadius: "clamp(14px, 1.6vw, 22px)", padding: "7% 8%", boxSizing: "border-box",
          background: card.gradient, color: card.textColor,
          border: card.id === "elite" ? "0.5px solid rgba(244,197,66,0.4)" : "none",
          boxShadow: isActive
            ? bp.isMobile ? "0 20px 50px rgba(0,0,0,0.28)" : "0 35px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.15)"
            : bp.isMobile ? "0 8px 20px rgba(0,0,0,0.12)" : "0 15px 35px rgba(0,0,0,0.15)",
        }}
      >
        {card.renderOverlay?.()}
        {card.id === "elite" && <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#F4C542,transparent)" }} />}
        <div className="flex justify-between items-start relative z-10">
          <span className="font-semibold" style={{ fontSize: "clamp(12px, 1.2vw, 19px)" }}>dealona</span>
          <span className="font-semibold rounded-full" style={{ fontSize: "clamp(7px, 0.65vw, 11px)", letterSpacing: "0.8px", background: card.badgeBg, border: card.badgeBorder, color: card.badgeColor, padding: "3px 10px" }}>{card.badge}</span>
        </div>
        <div className="relative z-10 my-auto py-2">
          <p className="m-0 uppercase" style={{ fontSize: "clamp(7px, 0.55vw, 11px)", letterSpacing: 1, color: card.subTextColor }}>Member</p>
          <p className="font-semibold mt-0.5 m-0" style={{ fontSize: "clamp(13px, 1.1vw, 22px)" }}>Ali Khan</p>
        </div>
        <div className="flex justify-between items-end relative z-10 mb-4 sm:mb-5">
          <div>
            <p className="m-0 uppercase" style={{ fontSize: "clamp(7px, 0.55vw, 11px)", letterSpacing: 1, color: card.subTextColor }}>Valid for</p>
            <p className="font-semibold mt-0.5 m-0" style={{ fontSize: "clamp(11px, 0.9vw, 18px)" }}>{card.validFor}</p>
          </div>
          {card.renderSlot()}
        </div>
        <span className="absolute z-10" style={{ bottom: "4%", left: "8%", fontSize: "clamp(7px, 0.55vw, 11px)", letterSpacing: 1.2, color: card.subTextColor }}>{card.cardNo}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PHONE STAGE  — exported so Hero can embed just the phone+cards
   without any wrapping <section> or background.
───────────────────────────────────────────────────────────────── */
export function PhoneStage({ activeIndex, setActiveIndex }: { activeIndex: number; setActiveIndex: React.Dispatch<React.SetStateAction<number>> }) {
  const totalSteps = CARDS.length;
  const [mounted, setMounted] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);
  const dragStartX = useRef<number>(0);

  const prevCard = () => setActiveIndex((p) => Math.max(0, p - 1));
  const nextCard = () => setActiveIndex((p) => Math.min(totalSteps - 1, p + 1));

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 45) prevCard(); else if (dx < -45) nextCard();
    touchStartX.current = null;
  };
  const handleMouseDown = (e: React.MouseEvent) => { isDragging.current = true; dragStartX.current = e.clientX; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartX.current;
    if (dx > 60) { prevCard(); isDragging.current = false; }
    else if (dx < -60) { nextCard(); isDragging.current = false; }
  };
  const handleMouseUp = () => { isDragging.current = false; };

  const wheelLock = useRef<boolean>(false);
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
      if (wheelLock.current) return;
      if (e.deltaX > 0) nextCard(); else prevCard();
      wheelLock.current = true;
      setTimeout(() => { wheelLock.current = false; }, 350);
    }
  };

  const activeCard = CARDS[activeIndex];
  const [phoneW, setPhoneW] = useState(300);
  const [viewportH, setViewportH] = useState(900);
  const [bp, setBp] = useState<BreakpointConfig>(() => getBreakpoint(1200, 900, 1));

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      // Dynamic phone width: scales with viewport but adapts to zoom
      let w: number;
      if (vw < 640) {
        // Mobile: fill most of the width
        w = Math.max(300, Math.min(vw * 0.88, 480));
      } else {
        // Desktop/tablet: use vh to also constrain so it fits vertically
        const wBased = vw * 0.42;
        const hBased = vh * 0.55;
        w = Math.max(320, Math.min(wBased, hBased, 700));
      }

      setPhoneW(w);
      setViewportH(vh);
      setBp(getBreakpoint(vw, vh, dpr));
    };
    update();
    setMounted(true);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Stage height: hug the actual rendered phone so there's no dead space above/below.
  // The phone image box is `phoneW` wide with a natural ~2:1 aspect, then visually scaled.
  // We size the stage to that visual height (width * 2 * scale) so it fits snugly.
  const mobileScale = 1.3;
  const desktopScale = 1.9;
  const stageH = bp.isMobile
    ? Math.max(360, phoneW * 2 * mobileScale * 0.5)
    : Math.max(500, Math.min(phoneW * 2 * desktopScale * 0.55, viewportH * 0.85));


  return (
    <div
      className="relative flex items-center justify-center w-full mx-auto select-none"
      style={{
        height: stageH,
        maxWidth: "min(100%, 1400px)",
        perspective: `${bp.perspective}px`,
        perspectiveOrigin: "50% 50%",
        opacity: mounted ? 1 : 0,
        transition: mounted ? "opacity 0.2s ease" : "none",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      {/* Ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: phoneW * 2.2, height: phoneW * 2.2,
          background: `radial-gradient(circle, ${activeCard.accentColor}22 0%, transparent 70%)`,
          left: "50%", top: "50%", transform: "translate(-50%, -50%)",
          transition: "background 0.7s ease", filter: `blur(${phoneW * 0.18}px)`, zIndex: 0,
        }}
      />

      {/* Phone mockup image */}
      <div className="absolute z-[2] pointer-events-none flex justify-center items-center" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: `${phoneW}px` }}>
        <img
          src="/images/mobile.png"
          alt="Deloona Mobile App"
          className="w-full h-auto object-contain drop-shadow-2xl select-none"
          style={{ transform: bp.isMobile ? "scale(1.4)" : "scale(1.9)" }}
        />
      </div>

      {/* Floating membership cards */}
      {CARDS.map((card, i) => (
        <MemberCard key={card.id} card={card} offset={i - activeIndex} isActive={i === activeIndex} onSelect={() => setActiveIndex(i)} phoneW={phoneW} bp={bp} />
      ))}

    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MEMBERSHIP SHOWCASE  — full standalone page section
   Uses flexbox column layout so header + stage always fit within
   the viewport regardless of zoom level.
───────────────────────────────────────────────────────────────── */
export default function MembershipShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    setMounted(true);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      className="relative w-full flex flex-col items-center bg-[#F7F6F4] overflow-hidden lg:min-h-screen"
      style={{
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: isMobile ? "64px" : "clamp(1.5rem, 3vh, 4rem)",
        opacity: mounted ? 1 : 0,
        transition: mounted ? "opacity 0.2s ease-in" : "none",
      }}
    >
      {/* Header */}
      <header className="shrink-0 text-center flex flex-col items-center justify-center relative z-[5] w-full pt-16 pb-2 md:pt-20 md:pb-6">
        <p className="font-bold uppercase text-[#F4C542] m-0 mb-1" style={{ fontSize: "clamp(12px, 1.1vw, 16px)", letterSpacing: "3px" }}>Dealona Membership</p>
        <h2 className="font-extrabold text-[#2C2C2A] m-0 text-2xl md:text-4xl">Choose Your Tier</h2>
        <p className="text-[#6B6A66] font-[syne] text-sm md:text-base max-w-lg m-0 mt-2 mb-4 md:mb-10">Swipe or drag the cards below to explore each membership level.</p>
      </header>

      {/* Stage: sized to hug the phone; on desktop it grows to fill remaining space */}
      <div className="w-full flex items-center justify-center min-h-0 lg:flex-1">
        <PhoneStage activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>

      {/* Indicator dots — placed in normal flow below the stage so they're always visible */}
      <div className="shrink-0 flex justify-center gap-[7px] pt-2 pb-4 md:py-6 relative z-[15]">

        {CARDS.map((c, i) => (
          <span
            key={c.id}
            onClick={() => setActiveIndex(i)}
            className="block rounded-full cursor-pointer"
            style={{
              width: i === activeIndex ? (isMobile ? 20 : "clamp(18px, 1.8vw, 30px)") : (isMobile ? 7 : "clamp(6px, 0.55vw, 8px)"),
              height: isMobile ? 7 : "clamp(6px, 0.55vw, 8px)",
              background: i === activeIndex ? (c.id === "mini" ? "#111827" : c.accentColor) : "rgba(0,0,0,0.15)",
              transition: "width 0.35s ease, background 0.35s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
