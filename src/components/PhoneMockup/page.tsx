"use client";

import React from "react";

/**
 * PhoneMockup — renders the mobile app picture from /images/mobile.png responsibly and large.
 */
export default function PhoneMockup({ width = 460 }: { width?: number }) {
  return (
    <div style={{ width, maxWidth: "100%", flexShrink: 0 }} className="flex justify-center items-center pointer-events-none mx-auto">
      <img
        src="/images/mobile.png"
        alt="Deloona Mobile Mockup"
        className="w-full h-auto max-h-[850px] object-contain drop-shadow-2xl select-none"
      />
    </div>
  );
}
