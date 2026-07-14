"use client";

import React from "react";

/**
 * PhoneMockup — just the iPhone shell with screen, status bar, dynamic island,
 * and hardware buttons. No cards, no interactivity. Safe to embed anywhere.
 */
export default function PhoneMockup({ width = 260 }: { width?: number }) {
  return (
    <div style={{ width, flexShrink: 0 }}>
      <div className="relative w-full aspect-[1/2] rounded-[1.5rem] md:rounded-[1.9rem] min-[1800px]:rounded-[3.5rem] border-4 border-zinc-600 p-3 md:p-4 shadow-2xl bg-gradient-to-br from-zinc-700 via-zinc-900 to-zinc-800">
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[22px] md:rounded-[1.5rem] min-[1800px]:rounded-[3rem] bg-white border border-neutral-200 shadow-inner">
          {/* Status bar */}
          <div className="absolute top-3 left-0 z-20 flex w-full items-center justify-between px-5 h-7 font-medium text-black text-xs select-none">
            <div className="z-10 w-[50px] flex items-center justify-center font-semibold tracking-tight">9:41</div>
            {/* Dynamic Island */}
            <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black flex items-center justify-end shadow-sm w-20 h-6 pr-2.5">
              <div className="rounded-full bg-neutral-900 w-2.5 h-2.5" />
            </div>
            {/* Signal / Battery */}
            <div className="flex items-center gap-1 z-10">
              <svg className="fill-current w-3.5 h-3.5" viewBox="0 0 24 24">
                <path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49z" />
              </svg>
              <svg className="fill-current w-4 h-3" viewBox="0 0 24 24">
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
              </svg>
            </div>
          </div>

          {/* Empty screen content area */}
          <div className="relative z-10 flex h-full flex-col items-center justify-between pt-[29%] pb-[14%]" />

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black w-24 h-1" />
        </div>

        {/* Hardware side buttons */}
        <div className="absolute -right-1 top-1/5 w-1 h-12 rounded-r-sm bg-gradient-to-r from-zinc-700 to-zinc-500" />
        <div className="absolute -left-1 top-1/6 w-1 h-8 rounded-l-sm bg-gradient-to-l from-zinc-700 to-zinc-500" />
        <div className="absolute -left-1 top-1/4 w-1 h-8 rounded-l-sm bg-gradient-to-l from-zinc-700 to-zinc-500" />
        <div className="absolute -left-1 top-1/3 w-1 h-8 rounded-l-sm bg-gradient-to-l from-zinc-700 to-zinc-500" />
      </div>
    </div>
  );
}
