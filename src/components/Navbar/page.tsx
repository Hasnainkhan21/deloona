"use client";

const navItems = ["Deals", "Explore", "About us"];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav
        className="flex items-center justify-between w-full transition-all duration-300"
        style={{
          height: "80px",
          paddingLeft: "clamp(24px, 6vw, 80px)",
          paddingRight: "clamp(24px, 6vw, 80px)",
          boxSizing: "border-box",
          background: "rgba(247, 246, 244, 0.60)",  /* ink-50 tinted glass */
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(214, 211, 203, 0.55)",  /* ink-300 hairline */
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-xl md:text-3xl font-extrabold tracking-tight select-none text-[#8A0C22]"
          style={{ textDecoration: "none" }}
        >
          Deloona
        </a>

        {/* Nav Items */}
        <ul className="hidden md:flex items-center gap-8 m-0 p-0 list-none">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-sm md:text-lg font-medium text-[#2C2C2A] hover:text-[#8A0C22] transition-colors duration-200 select-none"
                style={{ textDecoration: "none" }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="bg-[#8A0C22] hover:bg-[#5E0716] transition-colors w-[150px] rounded-[10px] h-[50px] font-semibold text-white shadow-lg cursor-pointer select-none">
          Get Started
        </button>
      </nav>
    </header>
  );
}
