"use client";

import React, { useRef } from "react";

export interface CardData {
  id: string;
  name: string;
  badge: string;
  badgeBg: string;
  badgeBorder: string;
  badgeColor?: string;
  gradient: string;
  textColor: string;
  subTextColor: string;
  member: string;
  validFor: string;
  partnerSlotText: string;
  cardNo: string;
  bottomText: string;
  boxShadow: string;
  borderStyle?: string;
  renderPartnerSlots: (isCompact?: boolean) => React.ReactNode;
  renderBackgroundOverlay?: () => React.ReactNode;
}

export const cardsData: CardData[] = [
  {
    id: "mini",
    name: "Mini",
    badge: "MINI",
    badgeBg: "rgba(44,44,42,0.08)",
    badgeBorder: "0.5px solid rgba(44,44,42,0.2)",
    badgeColor: "#2C2C2A",
    gradient: "linear-gradient(135deg,#E8E6E1 0%,#D6D3CB 100%)",
    textColor: "#2C2C2A",
    subTextColor: "rgba(44,44,42,0.55)",
    member: "Ali Khan",
    validFor: "18h 40m",
    partnerSlotText: "1 partner slot",
    cardNo: "DLN-8842",
    bottomText: "Mini",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    renderPartnerSlots: (isCompact) => (
      <div style={{ textAlign: "right" }}>
        <div style={{ marginBottom: isCompact ? "2px" : "5px" }}>
          <i className="ti ti-bolt" style={{ fontSize: isCompact ? "13px" : "16px" }} />
        </div>
        <p style={{ fontSize: isCompact ? "8.5px" : "10px", margin: 0, opacity: 0.75 }}>1 partner slot</p>
      </div>
    ),
  },
  {
    id: "smart",
    name: "Smart",
    badge: "SMART",
    badgeBg: "rgba(255,255,255,0.16)",
    badgeBorder: "0.5px solid rgba(255,255,255,0.3)",
    badgeColor: "#fff",
    gradient: "linear-gradient(135deg,#C0102E 0%,#8A0C22 55%,#5E0716 100%)",
    textColor: "#fff",
    subTextColor: "rgba(255,255,255,0.65)",
    member: "Ali Khan",
    validFor: "6d 04h",
    partnerSlotText: "1 of 3 partners locked",
    cardNo: "DLN-8842",
    bottomText: "Smart",
    boxShadow: "0 10px 25px rgba(192,16,46,0.2)",
    renderBackgroundOverlay: () => (
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-30px",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0) 65%)",
        }}
      />
    ),
    renderPartnerSlots: (isCompact) => (
      <div style={{ textAlign: "right" }}>
        <div
          style={{
            display: "flex",
            gap: isCompact ? "3px" : "5px",
            justifyContent: "flex-end",
            marginBottom: isCompact ? "2px" : "5px",
          }}
        >
          <span style={{ width: isCompact ? "11px" : "14px", height: isCompact ? "11px" : "14px", borderRadius: "50%", background: "#F4C542" }} />
          <span
            style={{
              width: isCompact ? "11px" : "14px",
              height: isCompact ? "11px" : "14px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.25)",
              border: "0.5px solid rgba(255,255,255,0.4)",
            }}
          />
          <span
            style={{
              width: isCompact ? "11px" : "14px",
              height: isCompact ? "11px" : "14px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.25)",
              border: "0.5px solid rgba(255,255,255,0.4)",
            }}
          />
        </div>
        <p style={{ fontSize: isCompact ? "8.5px" : "10px", margin: 0, color: "rgba(255,255,255,0.8)" }}>1 of 3 partners locked</p>
      </div>
    ),
  },
  {
    id: "pro",
    name: "Pro",
    badge: "PRO",
    badgeBg: "rgba(255,255,255,0.16)",
    badgeBorder: "0.5px solid rgba(255,255,255,0.3)",
    badgeColor: "#fff",
    gradient: "linear-gradient(135deg,#8A0C22 0%,#5E0716 55%,#3A040D 100%)",
    textColor: "#fff",
    subTextColor: "rgba(255,255,255,0.65)",
    member: "Ali Khan",
    validFor: "13d 02h",
    partnerSlotText: "3 of 10 partners locked",
    cardNo: "DLN-8842",
    bottomText: "Pro — two stars, ten rays, each ray one partner slot",
    boxShadow: "0 10px 25px rgba(138,12,34,0.25)",
    renderBackgroundOverlay: () => (
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-30px",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(255,255,255,0.14) 0%,rgba(255,255,255,0) 65%)",
        }}
      />
    ),
    renderPartnerSlots: (isCompact) => (
      <div style={{ textAlign: "right" }}>
        <div
          style={{
            display: "flex",
            gap: isCompact ? "2px" : "4px",
            justifyContent: "flex-end",
            marginBottom: isCompact ? "2px" : "4px",
          }}
        >
          <svg width={isCompact ? "22" : "30"} height={isCompact ? "22" : "30"} viewBox="-24 -24 48 48">
            <path d="M 0 0 L -5.0 -6.88 L 0.0 -22.0 L 5.0 -6.88 Z" fill="#F4C542" />
            <path d="M 0 0 L 5.0 -6.88 L 20.92 -6.8 L 8.08 2.63 Z" fill="#F4C542" />
            <path d="M 0 0 L 8.08 2.63 L 12.93 17.8 L 0.0 8.5 Z" fill="#F4C542" />
            <path d="M 0 0 L 0.0 8.5 L -12.93 17.8 L -8.08 2.63 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
            <path d="M 0 0 L -8.08 2.63 L -20.92 -6.8 L -5.0 -6.88 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
          </svg>
          <svg width={isCompact ? "22" : "30"} height={isCompact ? "22" : "30"} viewBox="-24 -24 48 48">
            <path d="M 0 0 L -5.0 -6.88 L 0.0 -22.0 L 5.0 -6.88 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
            <path d="M 0 0 L 5.0 -6.88 L 20.92 -6.8 L 8.08 2.63 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
            <path d="M 0 0 L 8.08 2.63 L 12.93 17.8 L 0.0 8.5 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
            <path d="M 0 0 L 0.0 8.5 L -12.93 17.8 L -8.08 2.63 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
            <path d="M 0 0 L -8.08 2.63 L -20.92 -6.8 L -5.0 -6.88 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
          </svg>
        </div>
        <p style={{ fontSize: isCompact ? "8.5px" : "10px", margin: 0, color: "rgba(255,255,255,0.8)" }}>3 of 10 partners locked</p>
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
    subTextColor: "rgba(255,255,255,0.55)",
    member: "Ali Khan",
    validFor: "28d 11h",
    partnerSlotText: "All partners",
    cardNo: "DLN-8842",
    bottomText: "Elite — infinity medallion",
    borderStyle: "0.5px solid rgba(244,197,66,0.3)",
    boxShadow: "0 10px 25px rgba(20,20,18,0.3)",
    renderBackgroundOverlay: () => (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg,transparent,#F4C542,transparent)",
        }}
      />
    ),
    renderPartnerSlots: (isCompact) => (
      <div style={{ textAlign: "right" }}>
        <div
          style={{
            width: isCompact ? "26px" : "34px",
            height: isCompact ? "26px" : "34px",
            borderRadius: "50%",
            border: "1px solid #F4C542",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            marginBottom: isCompact ? "2px" : "4px",
          }}
        >
          <i className="ti ti-infinity" style={{ fontSize: isCompact ? "14px" : "18px", color: "#F4C542" }} />
        </div>
        <p style={{ fontSize: isCompact ? "8.5px" : "10px", margin: 0, color: "rgba(255,255,255,0.8)" }}>All partners</p>
      </div>
    ),
  },
];

export function CardView({
  card,
  isCompact = false,
  isSelected = false,
  onClick,
}: {
  card: CardData;
  isCompact?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: isCompact ? "4px" : "8px" }}
      onClick={onClick}
    >
      <div
        style={{
          width: "100%",
          maxWidth: isCompact ? "100%" : "360px",
          aspectRatio: "1.586",
          borderRadius: isCompact ? "12px" : "16px",
          padding: isCompact ? "12px 14px" : "20px",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
          background: card.gradient,
          color: card.textColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: card.borderStyle || (isSelected && !isCompact ? "2px solid #034ea2" : "none"),
          boxShadow: isSelected && !isCompact ? "0 15px 30px rgba(3, 78, 162, 0.25)" : card.boxShadow,
        }}
      >
        {card.renderBackgroundOverlay && card.renderBackgroundOverlay()}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
          <span style={{ fontSize: isCompact ? "13px" : "16px", fontWeight: 500 }}>dealona</span>
          <span
            style={{
              fontSize: isCompact ? "9px" : "11px",
              fontWeight: 500,
              letterSpacing: isCompact ? "0.5px" : "1px",
              background: card.badgeBg,
              border: card.badgeBorder,
              color: card.badgeColor || card.textColor,
              borderRadius: "20px",
              padding: isCompact ? "2px 8px" : "4px 12px",
            }}
          >
            {card.badge}
          </span>
        </div>
        <div style={{ position: "relative" }}>
          <p style={{ fontSize: isCompact ? "8px" : "10px", letterSpacing: "1px", margin: 0, color: card.subTextColor }}>MEMBER</p>
          <p style={{ fontSize: isCompact ? "14px" : "18px", fontWeight: 500, margin: "2px 0 0" }}>{card.member}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", position: "relative" }}>
          <div>
            <p style={{ fontSize: isCompact ? "8px" : "10px", letterSpacing: "1px", margin: 0, color: card.subTextColor }}>VALID FOR</p>
            <p style={{ fontSize: isCompact ? "12px" : "15px", fontWeight: 500, margin: "2px 0 0" }}>{card.validFor}</p>
          </div>
          {card.renderPartnerSlots(isCompact)}
        </div>
        <span
          style={{
            position: "absolute",
            bottom: isCompact ? "6px" : "8px",
            left: isCompact ? "14px" : "20px",
            fontSize: isCompact ? "7.5px" : "9px",
            letterSpacing: "1px",
            color: card.subTextColor,
          }}
        >
          {card.cardNo}
        </span>
      </div>
      {!isCompact && (
        <p style={{ fontSize: "11px", color: "var(--text-muted, #71717a)", margin: 0, textAlign: "center" }}>
          {card.bottomText}
        </p>
      )}
    </div>
  );
}

export default function MembershipCards({
  selectedCardId,
  onSelectCard,
}: {
  selectedCardId: string;
  onSelectCard: (id: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-7xl px-4 z-10">
      {/* Carousel Header & Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 mb-4">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#034ea2]">
            Membership Tiers Carousel
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Slide and click any membership card below to display it live on the phone screen
          </p>
        </div>

        {/* Carousel Buttons and Dots */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-sm hover:bg-[#034ea2] hover:text-white transition-all text-neutral-700 cursor-pointer"
            aria-label="Previous card"
          >
            <i className="ti ti-chevron-left text-lg" />
          </button>

          <div className="flex gap-1.5 px-2">
            {cardsData.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => onSelectCard(c.id)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${selectedCardId === c.id ? "w-7 bg-[#034ea2]" : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                aria-label={`Select ${c.name}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-sm hover:bg-[#034ea2] hover:text-white transition-all text-neutral-700 cursor-pointer"
            aria-label="Next card"
          >
            <i className="ti ti-chevron-right text-lg" />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 w-full max-w-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cardsData.map((card) => {
          const isSelected = selectedCardId === card.id;
          return (
            <div
              key={card.id}
              className="snap-center shrink-0 w-[300px] sm:w-[350px] cursor-pointer relative group transition-all duration-300"
              onClick={() => onSelectCard(card.id)}
            >
              <div
                className={`rounded-2xl transition-all duration-300 p-2 ${isSelected
                  ? "bg-gradient-to-r from-[#034ea2] via-blue-500 to-[#F4C542] shadow-xl scale-[1.03]"
                  : "hover:scale-[1.01] hover:shadow-md bg-transparent"
                  }`}
              >
                <CardView card={card} isSelected={isSelected} />
              </div>

              {/* Status Pill below Card */}
              <div className="mt-2 text-center flex items-center justify-center gap-1.5">
                <span
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${isSelected
                    ? "bg-[#034ea2] text-white shadow-md scale-105"
                    : "bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200"
                    }`}
                >
                  {isSelected ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-[#F4C542] animate-pulse" /> Displayed on Phone Screen
                    </>
                  ) : (
                    "Click to Display on Phone"
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
