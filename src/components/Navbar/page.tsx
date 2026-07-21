"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
      <nav className="pointer-events-auto flex items-center border mx-4 max-md:w-full max-md:justify-between border-[#3A3A3A] px-6 py-3.5 rounded-full text-white text-sm bg-[#141412]/90 backdrop-blur-md shadow-2xl transition-all duration-300">

        {/* Logo with 4 circles SVG */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="4.706" r="4.706" fill="#F4C542" />
            <circle cx="16.001" cy="27.294" r="4.706" fill="#8A0C22" />
            <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
          </svg>
          <span className="font-extrabold text-lg text-white tracking-tight select-none">Dealona</span>
        </a>

        {/* Desktop Links with Vertical Hover Slide */}
        <div className="hidden md:flex items-center gap-6 ml-7">
          <a href="#" className="relative overflow-hidden h-5 group no-underline text-white">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Products</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-[#F4C542]">Products</span>
          </a>
          <a href="#" className="relative overflow-hidden h-5 group no-underline text-white">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Stories</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-[#F4C542]">Stories</span>
          </a>
          <a href="#" className="relative overflow-hidden h-5 group no-underline text-white">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Pricing</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-[#F4C542]">Pricing</span>
          </a>
          <a href="#" className="relative overflow-hidden h-5 group no-underline text-white">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Docs</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-[#F4C542]">Docs</span>
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden ml-14 md:flex items-center gap-4">
          <button className="border border-[#6B6A66] hover:bg-[#3A3A3A] px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer">
            Contact
          </button>
          <button className="bg-[#F4C542] hover:shadow-[#F4C542]/50 shadow-[#F4C542]/50 text-[#141412] px-4 py-2 rounded-full text-sm font-bold hover:bg-[#E2B330] transition duration-300 cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#D6D3CB] hover:text-white cursor-pointer p-1"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 mx-4 bg-[#141412] border border-[#3A3A3A] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-2xl md:hidden z-50">
            <a onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4C542] transition-colors no-underline text-white py-1" href="#">
              Products
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4C542] transition-colors no-underline text-white py-1" href="#">
              Customer Stories
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4C542] transition-colors no-underline text-white py-1" href="#">
              Pricing
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4C542] transition-colors no-underline text-white py-1" href="#">
              Docs
            </a>
            <div className="flex flex-col gap-3 w-full mt-2 pt-4 border-t border-[#3A3A3A]">
              <button onClick={() => setIsMobileMenuOpen(false)} className="border border-[#6B6A66] hover:bg-[#3A3A3A] w-full py-2.5 rounded-full text-sm font-medium transition cursor-pointer text-white">
                Contact
              </button>
              <button onClick={() => setIsMobileMenuOpen(false)} className="bg-[#F4C542] shadow-[#F4C542]/40 text-[#141412] w-full py-2.5 rounded-full text-sm font-bold hover:bg-[#E2B330] transition duration-300 cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

