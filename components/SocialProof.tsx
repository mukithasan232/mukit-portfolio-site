"use client";

import { DATA } from "@/lib/data";

const brands = [
    "Next.js", "Node.js", "React", "PostgreSQL", "Prisma", "Tailwind CSS",
    "Gemini API", "TypeScript", "Firebase", "Vercel", "Docker",
];

export function SocialProof() {
    return (
        <section
            style={{
                background: "#080d1a",
                borderTop: "1px solid rgba(99, 102, 241, 0.08)",
                borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
                padding: "28px 0",
                overflow: "hidden",
            }}
        >
            <div style={{ display: "flex", gap: 0, overflow: "hidden", position: "relative" }}>
                {/* Left fade */}
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 120,
                        background: "linear-gradient(90deg, #080d1a, transparent)",
                        zIndex: 2,
                        pointerEvents: "none",
                    }}
                />
                {/* Right fade */}
                <div
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: 120,
                        background: "linear-gradient(270deg, #080d1a, transparent)",
                        zIndex: 2,
                        pointerEvents: "none",
                    }}
                />

                {/* Scrolling content — doubled for seamless loop */}
                <div
                    style={{
                        display: "flex",
                        gap: 48,
                        alignItems: "center",
                        animation: "marquee-scroll 30s linear infinite",
                        whiteSpace: "nowrap",
                        paddingLeft: 48,
                    }}
                >
                    {[...brands, ...brands].map((brand, i) => (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "6px 0",
                                color: "#374151",
                                fontSize: 14,
                                fontWeight: 600,
                                letterSpacing: "0.5px",
                                whiteSpace: "nowrap",
                                transition: "color 0.2s",
                                cursor: "default",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "#6366f1";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "#374151";
                            }}
                        >
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "rgba(99,102,241,0.4)",
                                    display: "inline-block",
                                    flexShrink: 0,
                                }}
                            />
                            {brand}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
