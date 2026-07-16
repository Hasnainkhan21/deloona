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

function getBreakpoint(vw: number): BreakpointConfig {
  if (vw >= 1440) return { spreadMul: 1.0, rotYMul: 1.0, rotZMul: 1.0, zDepthMul: 1.0, perspective: 1800, isMobile: false, isTablet: false };
  if (vw >= 1200) return { spreadMul: 0.92, rotYMul: 0.92, rotZMul: 0.92, zDepthMul: 0.92, perspective: 1600, isMobile: false, isTablet: false };
  if (vw >= 992) return { spreadMul: 0.82, rotYMul: 0.85, rotZMul: 0.85, zDepthMul: 0.85, perspective: 1400, isMobile: false, isTablet: false };
  if (vw >= 768) return { spreadMul: 0.70, rotYMul: 0.70, rotZMul: 0.70, zDepthMul: 0.70, perspective: 1200, isMobile: false, isTablet: true };
  if (vw >= 576) return { spreadMul: 0.55, rotYMul: 0.55, rotZMul: 0.55, zDepthMul: 0.50, perspective: 900, isMobile: true, isTablet: false };
  return { spreadMul: 0.45, rotYMul: 0.40, rotZMul: 0.40, zDepthMul: 0.35, perspective: 700, isMobile: true, isTablet: false };
}

/* ─────────────────────────────────────────────────────────────────
   MEMBER CARD
───────────────────────────────────────────────────────────────── */
function MemberCard({ card, offset, isActive, onSelect, phoneW, bp }: {
  card: CardData; offset: number; isActive: boolean; onSelect: () => void; phoneW: number; bp: BreakpointConfig;
}) {
  const absOffset = Math.abs(offset);
  const cardW = phoneW * 0.86;
  const spread = cardW * 1.1 * bp.spreadMul;
  const translateX = offset * spread;
  const baseZ = phoneW * 0.16;
  const translateZ = isActive ? 2 : -absOffset * baseZ * 0.5 * bp.zDepthMul;
  const rotateY = offset * -14 * bp.rotYMul;
  const rotateZ = offset * 4 * bp.rotZMul;
  const scale = isActive ? 1 : Math.max(0.6, 1 - absOffset * .10);
  const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.3;

  return (
    <div
      onClick={onSelect}
      style={{
        position: "absolute", left: "50%", top: "50%",
        width: cardW, marginLeft: -cardW / 2, marginTop: -(cardW / 1.586) * 0.5,
        cursor: isActive ? "default" : "pointer",
        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
        opacity, zIndex: isActive ? 10 : 10 - absOffset,
        pointerEvents: absOffset > 2 ? "none" : "auto",
      }}
    >
      <div
        className="w-full relative overflow-hidden flex flex-col justify-between"
        style={{
          aspectRatio: "1.586", borderRadius: "5%", padding: "6% 7%", boxSizing: "border-box",
          background: card.gradient, color: card.textColor,
          border: card.id === "elite" ? "0.5px solid rgba(244,197,66,0.4)" : "none",
          boxShadow: isActive
            ? bp.isMobile ? "0 20px 50px rgba(0,0,0,0.28)" : "0 35px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.15)"
            : bp.isMobile ? "0 8px 20px rgba(0,0,0,0.12)" : "0 15px 35px rgba(0,0,0,0.15)",
        }}
      >
        {card.renderOverlay?.()}
        {card.id === "elite" && <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#F4C542,transparent)" }} />}
        <div className="flex justify-between items-start relative">
          <span className="font-semibold" style={{ fontSize: "clamp(11px, 1.1vw, 18px)" }}>dealona</span>
          <span className="font-semibold rounded-full" style={{ fontSize: "clamp(7px, 0.65vw, 11px)", letterSpacing: "0.8px", background: card.badgeBg, border: card.badgeBorder, color: card.badgeColor, padding: "3px 10px" }}>{card.badge}</span>
        </div>
        <div className="relative">
          <p className="m-0 uppercase" style={{ fontSize: "clamp(6px, 0.5vw, 10px)", letterSpacing: 1, color: card.subTextColor }}>Member</p>
          <p className="font-semibold mt-0.5 m-0" style={{ fontSize: "clamp(12px, 1vw, 21px)" }}>Ali Khan</p>
        </div>
        <div className="flex justify-between items-end relative">
          <div>
            <p className="m-0 uppercase" style={{ fontSize: "clamp(6px, 0.5vw, 10px)", letterSpacing: 1, color: card.subTextColor }}>Valid for</p>
            <p className="font-semibold mt-0.5 m-0" style={{ fontSize: "clamp(10px, 0.85vw, 17px)" }}>{card.validFor}</p>
          </div>
          {card.renderSlot()}
        </div>
        <span className="absolute" style={{ bottom: "5%", left: "7%", fontSize: "clamp(6px, 0.45vw, 9.5px)", letterSpacing: 1, color: card.subTextColor }}>{card.cardNo}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PHONE STAGE  — exported so Hero can embed just the phone+cards
   without any wrapping <section> or background.
───────────────────────────────────────────────────────────────── */
export function PhoneStage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSteps = CARDS.length;

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
  const [bp, setBp] = useState<BreakpointConfig>(() => getBreakpoint(1200));

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const w = Math.max(210, Math.min(vw * 0.23, vh * 0.36, 380));
      setPhoneW(w);
      setBp(getBreakpoint(vw));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const phoneH = phoneW * 2;
  const stageH = Math.max(340, phoneH * (bp.isMobile ? 1.05 : 1.12));

  return (
    <div
      className="relative flex items-center justify-center w-full mx-auto select-none"
      style={{ height: stageH, maxWidth: "min(100%, 1400px)", perspective: `${bp.perspective}px`, perspectiveOrigin: "50% 50%" }}
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

      {/* Phone mockup */}
      <div className="absolute z-[2] pointer-events-none" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: `${phoneW}px` }}>
        <div className="relative w-full aspect-[1/2] rounded-[1.5rem] md:rounded-[1.9rem] min-[1800px]:rounded-[3.5rem] border-4 border-zinc-600 p-3 md:p-4 shadow-2xl bg-gradient-to-br from-zinc-700 via-zinc-900 to-zinc-800">
          <div className="relative h-full w-full overflow-hidden rounded-[22px] md:rounded-[1.5rem] min-[1800px]:rounded-[3rem] bg-white border border-neutral-200 shadow-inner">
            <div className="absolute top-3 left-0 z-20 flex w-full items-center justify-between px-5 h-7 font-medium text-black text-xs md:text-sm select-none">
              <div className="z-10 w-[50px] flex items-center justify-center font-semibold tracking-tight">9:41</div>
              <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black flex items-center justify-end shadow-sm w-20 md:w-22 h-6 pr-2.5">
                <div className="rounded-full bg-neutral-900 w-2.5 h-2.5"></div>
              </div>
              <div className="flex items-center gap-1 z-10">
                <svg className="fill-current w-3.5 h-3.5 md:w-4 md:h-4" viewBox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49z" /></svg>
                <svg className="fill-current w-4 h-3 md:w-5 md:h-3.5" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" /></svg>
              </div>
            </div>
            <div className="relative z-10 flex h-full flex-col items-center justify-between pt-[29%] pb-[14%]"></div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black w-24 md:w-32 h-1 md:h-1.5"></div>
          </div>
          <div className="absolute -right-1 top-1/5 w-1 h-12 rounded-r-sm bg-gradient-to-r from-zinc-700 to-zinc-500" />
          <div className="absolute -left-1 top-1/6 w-1 h-8 rounded-l-sm bg-gradient-to-l from-zinc-700 to-zinc-500" />
          <div className="absolute -left-1 top-1/4 w-1 h-8 rounded-l-sm bg-gradient-to-l from-zinc-700 to-zinc-500" />
          <div className="absolute -left-1 top-1/3 w-1 h-8 rounded-l-sm bg-gradient-to-l from-zinc-700 to-zinc-500" />
        </div>
      </div>

      {/* Floating membership cards */}
      {CARDS.map((card, i) => (
        <MemberCard key={card.id} card={card} offset={i - activeIndex} isActive={i === activeIndex} onSelect={() => setActiveIndex(i)} phoneW={phoneW} bp={bp} />
      ))}

      {/* Indicator dots */}
      <div className="absolute flex gap-[7px] justify-center z-[15]" style={{ bottom: bp.isMobile ? 10 : 16, left: 0, right: 0 }}>
        {CARDS.map((c, i) => (
          <span
            key={c.id}
            onClick={() => setActiveIndex(i)}
            className="block rounded-full cursor-pointer"
            style={{
              width: i === activeIndex ? (bp.isMobile ? 20 : "clamp(18px, 1.8vw, 30px)") : (bp.isMobile ? 7 : "clamp(6px, 0.55vw, 8px)"),
              height: bp.isMobile ? 7 : "clamp(6px, 0.55vw, 8px)",
              background: i === activeIndex ? (c.id === "mini" ? "#111827" : c.accentColor) : "rgba(0,0,0,0.15)",
              transition: "width 0.35s ease, background 0.35s ease",
            }}
          />
        ))}
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MEMBERSHIP SHOWCASE  — full standalone page section
───────────────────────────────────────────────────────────────── */
export default function MembershipShowcase() {
  return (
    <section
      className="relative w-full flex flex-col items-center overflow-x-hidden select-none min-h-svh pb-12 pt-16 bg-[#F7F6F4]"
      style={{ paddingLeft: "5%", paddingRight: "5%" }}
    >
      <style>{`
        @keyframes heroFadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .hero-title { animation: heroFadeUp 0.4s ease both; }
      `}</style>
      <header className="shrink-0 text-center gap-3 flex flex-col items-center justify-center relative z-[5] w-full mb-4">
        <p className="font-bold uppercase text-[#8A0C22] m-0" style={{ fontSize: "12px", letterSpacing: "3px" }}>Dealona Membership</p>
        <h2 className="font-extrabold text-[#2C2C2A] m-0 text-2xl md:text-4xl">Choose Your Tier</h2>
        <p className="text-[#6B6A66] text-sm md:text-base max-w-lg m-0">Swipe or drag the cards below to explore each membership level.</p>
      </header>
      <PhoneStage />
    </section>
  );
}
