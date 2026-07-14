const navItems = ["Deals", "Explore", "About us"];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="flex items-center justify-between border border-[#034ea2]/20 bg-white/55 px-4 py-3  backdrop-blur-xl md:px-6">
        <a
          href="#"
          className="text-lg font-extrabold tracking-tight text-[#034ea2] md:text-[30px]"
        >
          Deloona
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <button
                type="button"
                className="rounded-full px-4 py-2 text-md font-medium text-[#034ea2] transition-colors hover:bg-[#034ea2]/10"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-full bg-[#034ea2] px-4 py-2 text-md font-semibold text-white transition-colors hover:bg-[#033a79] md:px-5"
        >
          Get started
        </button>
      </nav>
    </header>
  );
}
