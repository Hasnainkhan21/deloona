"use client";

const navItems = ["Deals", "Explore", "About us"];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav
        className="flex items-center justify-between w-full px-6 md:px-12 py-3.5 md:py-4 transition-all duration-300"
        style={{
          background: "rgba(255, 255, 255, 0.45)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-xl md:text-2xl font-extrabold tracking-tight text-[#034ea2] select-none"
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
                className="text-sm md:text-base font-medium text-zinc-700 hover:text-[#034ea2] transition-colors duration-200 select-none"
                style={{ textDecoration: "none" }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Aesthetic CTA Button */}
        <button
          type="button"
          className="relative overflow-hidden font-semibold rounded-full transition-all duration-200 active:scale-95 cursor-pointer select-none"
          style={{
            fontSize: "clamp(13px, 1vw, 15px)",
            padding: "0.55rem 1.4rem",
            background: "linear-gradient(135deg, #034ea2 0%, #0066cc 60%, #1a7fe0 100%)",
            color: "white",
            border: "none",
            boxShadow:
              "0 4px 14px -2px rgba(3, 78, 162, 0.35), inset 0 1px 0.5px rgba(255, 255, 255, 0.3)",
            letterSpacing: "-0.01em",
          }}
          onMouseEnter={(e) => {
            const btn = e.currentTarget;
            btn.style.boxShadow =
              "0 6px 20px -2px rgba(3, 78, 162, 0.50), inset 0 1px 1px rgba(255, 255, 255, 0.4)";
            btn.style.transform = "translateY(-1.5px)";
          }}
          onMouseLeave={(e) => {
            const btn = e.currentTarget;
            btn.style.boxShadow =
              "0 4px 14px -2px rgba(3, 78, 162, 0.35), inset 0 1px 0.5px rgba(255, 255, 255, 0.3)";
            btn.style.transform = "translateY(0)";
          }}
        >
          <span className="relative z-10">Get started</span>
          {/* Subtle Angled Shine Reflection Layer */}
          <span
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.22) 50%, transparent 60%)",
            }}
          />
        </button>
      </nav>
    </header>
  );
}
