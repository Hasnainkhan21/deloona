"use client";

const navItems = ["Deals", "Explore", "About us"];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav
        className="flex items-center justify-between w-full px-6 md:px-12 transition-all duration-300"
        style={{
          height: "80px", // <-- ADJUST NAVBAR HEIGHT HERE (e.g., "70px", "90px", "100px")
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

        {/* Simple Inline Tailwind CTA Button */}
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold rounded-full px-6 py-2.5 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer select-none"
        >
          Get started
        </button>
      </nav>
    </header>
  );
}
