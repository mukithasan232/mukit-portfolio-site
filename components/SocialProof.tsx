"use client";

import { DATA } from "@/lib/data";

export function SocialProof() {
    return (
        <section className="font-sans" style={{ background: "#d4d0c8", borderBottom: "2px solid #808080", padding: "16px 0" }}>
            <div className="container-standard">
                <div className="win-panel font-sans" style={{ maxWidth: 860, margin: "0 auto" }}>
                    <div className="win-titlebar font-sans">
                        <span style={{ fontSize: 11, fontWeight: "bold" }}>📊 System Monitor — Stats</span>
                        <div style={{ display: "flex", gap: 2 }}>
                            <button className="win-titlebar-btn" aria-label="Minimize">_</button>
                            <button className="win-titlebar-btn" aria-label="Close">✕</button>
                        </div>
                    </div>
                    <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 12, background: "#d4d0c8" }}>
                        {DATA.stats.map((stat, index) => (
                            <div
                                key={index}
                                className="win-inset font-sans"
                                style={{ textAlign: "center", padding: "10px 20px", minWidth: 100, background: "#fff" }}
                            >
                                <div style={{ fontWeight: "bold", fontSize: 28, color: "#000080", fontFamily: "Courier New, monospace" }}>
                                    {stat.value}
                                </div>
                                <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 1, color: "#444", marginTop: 2 }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
