"use client";

import { useRef } from "react";

const REELS = [
    { id: 1, label: "Reel 1", src: "/reels/reel1.mp4" },
    { id: 2, label: "Reel 2", src: "/reels/reel2.mp4" },
    { id: 3, label: "Reel 3", src: "/reels/reel3.mp4" },
    { id: 4, label: "Reel 4", src: "/reels/reel4.mp4" },
    { id: 5, label: "Reel 5", src: "/reels/reel5.mp4" },
];

const CARD_WIDTH = 280; // px — width of one reel card
const SCROLL_AMOUNT = CARD_WIDTH + 24; // card + gap

export default function InstaReels() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    };

    return (
        <section className="flex flex-col lg:flex-row items-center min-h-[100vh] gap-10 box-border overflow-hidden py-16 lg:py-0 px-4 lg:px-0 bg-[#F7F6F4]">
            {/* ── Left: Heading ── */}
            <div className="shrink-0 w-full lg:w-[40%] flex items-center justify-center lg:justify-start">
                <h2 style={{ fontSize: "36px", fontWeight: 500, lineHeight: 1.15, color: "#2C2C2A" }}>
                    Follow us on <br /> <span style={{ color: "#8A0C22" }}>Insta</span>
                </h2>
            </div>

            {/* ── Right: Scrollable Reel Carousel ── */}
            <div className="flex-1 w-full overflow-hidden relative">
                {/* Scroll track */}
                <div
                    ref={scrollRef}
                    className="no-scrollbar"
                    style={{
                        display: "flex",
                        gap: "24px",
                        overflowX: "auto",
                        scrollBehavior: "smooth",
                        paddingBottom: "8px",
                        cursor: "grab",
                        WebkitOverflowScrolling: "touch",
                    }}
                    /* Optional drag-to-scroll */
                    onMouseDown={(e) => {
                        const el = scrollRef.current;
                        if (!el) return;
                        el.style.cursor = "grabbing";
                        const startX = e.pageX - el.offsetLeft;
                        const scrollStart = el.scrollLeft;
                        const onMove = (ev: MouseEvent) => {
                            const x = ev.pageX - el.offsetLeft;
                            el.scrollLeft = scrollStart - (x - startX);
                        };
                        const onUp = () => {
                            el.style.cursor = "grab";
                            window.removeEventListener("mousemove", onMove);
                            window.removeEventListener("mouseup", onUp);
                        };
                        window.addEventListener("mousemove", onMove);
                        window.addEventListener("mouseup", onUp);
                    }}
                >
                    {REELS.map((reel) => (
                        <div
                            key={reel.id}
                            style={{
                                flexShrink: 0,
                                width: `${CARD_WIDTH}px`,
                                height: "520px",
                                borderRadius: "36px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <video
                                src={reel.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
