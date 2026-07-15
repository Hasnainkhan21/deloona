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
          background: "rgba(255, 255, 255, 0.45)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-xl md:text-3xl font-extrabold tracking-tight text-blue-700 select-none"
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
                className="text-sm md:text-lg font-medium text-zinc-700 hover:text-blue-600 transition-colors duration-200 select-none"
                style={{ textDecoration: "none" }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="bg-blue-400 hover:bg-blue-500 transition-colors w-[150px] rounded-[10px] h-[50px] font-semibold text-white shadow-lg cursor-pointer select-none">
          Get Started
        </button>
      </nav>
    </header>
  );
}
