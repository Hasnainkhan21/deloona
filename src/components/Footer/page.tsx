import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full font-sans text-[#2C2C2A] border-t-2 border-[#8A0C22]">
            {/* CTA banner */}
            <div className="text-center py-16 px-5">
                <h1 className="text-4xl font-bold mb-3 text-[#2C2C2A]">READY.SET.DELOONA</h1>
                <p className="text-lg mb-5 text-[#6B6A66]">Join millions that are already making great Discounts</p>
                <button className="px-6 py-3 text-base bg-[#8A0C22] text-white rounded-md hover:bg-[#5E0716] transition-colors cursor-pointer shadow-md">
                    Let&apos;s Deloona
                </button>
            </div>

            {/* Footer links panel */}
            <div className="flex flex-wrap border border-[#2C2C2A]/60 rounded-[24px] justify-between py-12 px-6 md:px-10 bg-gradient-to-br from-[#8A0C22] to-[#3A040D] text-white shadow-2xl mb-12">

                {/* Brand column */}
                <div className="flex-[2] min-w-[260px] my-3 md:mr-8">
                    <h3 className="text-2xl font-extrabold mb-4 text-[#F4C542] tracking-tight">Deloona</h3>
                    <p className="text-sm text-[#E8E6E1]/80 leading-relaxed max-w-md">
                        Deloona (Private) Limited is authorised and regulated by the State Bank of Pakistan as an Electronic Money Institution.
                    </p>
                    {/* Social icons from react-icons */}
                    <div className="flex gap-3 mt-6">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#5E0716] text-white flex items-center justify-center border border-white/15 transition-all duration-200 hover:scale-110 shadow-sm" aria-label="Facebook">
                            <FaFacebookF className="text-base" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#5E0716] text-white flex items-center justify-center border border-white/15 transition-all duration-200 hover:scale-110 shadow-sm" aria-label="LinkedIn">
                            <FaLinkedinIn className="text-base" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#5E0716] text-white flex items-center justify-center border border-white/15 transition-all duration-200 hover:scale-110 shadow-sm" aria-label="X (Twitter)">
                            <FaXTwitter className="text-base" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#5E0716] text-white flex items-center justify-center border border-white/15 transition-all duration-200 hover:scale-110 shadow-sm" aria-label="Instagram">
                            <FaInstagram className="text-base" />
                        </a>
                    </div>
                    <p className="text-xs text-[#D6D3CB] mt-6">&copy; All rights reserved by Deloona (Private) Limited</p>
                </div>

                {/* General column */}
                <div className="flex-1 min-w-[150px] my-3 mx-2">
                    <h3 className="text-xs font-bold mb-4 text-white uppercase tracking-wider">General</h3>
                    <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                        <li><a href="#" className="text-sm text-[#E8E6E1]/80 hover:text-[#F4C542] transition-colors no-underline">Help Center</a></li>
                        <li><a href="#" className="text-sm text-[#E8E6E1]/80 hover:text-[#F4C542] transition-colors no-underline">About us</a></li>
                        <li><a href="#" className="text-sm text-[#E8E6E1]/80 hover:text-[#F4C542] transition-colors no-underline">Become a Partner</a></li>
                        <li><a href="#" className="text-sm text-[#E8E6E1]/80 hover:text-[#F4C542] transition-colors no-underline">Help Center</a></li>
                    </ul>
                </div>

                {/* Connect column */}
                <div className="flex-1 min-w-[150px] my-3 mx-2">
                    <h3 className="text-xs font-bold mb-4 text-white uppercase tracking-wider">Connect</h3>
                    <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                        <li><a href="#" className="text-sm text-[#E8E6E1]/80 hover:text-[#F4C542] transition-colors no-underline">Careers</a></li>
                        <li><a href="#" className="text-sm text-[#E8E6E1]/80 hover:text-[#F4C542] transition-colors no-underline">Contact us</a></li>
                    </ul>
                </div>

                {/* Legal column */}
                <div className="flex-1 min-w-[150px] my-3 mx-2">
                    <h3 className="text-xs font-bold mb-4 text-white uppercase tracking-wider">Legal</h3>
                    <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                        <li><a href="#" className="text-sm text-[#E8E6E1]/80 hover:text-[#F4C542] transition-colors no-underline">Privacy Policy</a></li>
                        <li><a href="#" className="text-sm text-[#E8E6E1]/80 hover:text-[#F4C542] transition-colors no-underline">Terms &amp; Conditions</a></li>
                    </ul>
                    <div className="mt-4  p-2 rounded-lg inline-block shadow-sm">
                        {/* SBP Logo */}

                        <h3>logo</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
}