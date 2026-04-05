"use client";

import { DATA } from "@/lib/data";

function WinProgressBar({ value }: { value: number }) {
    const blocks = Math.round(value / 5); // 0-20 filled blocks
    return (
        <div
            className="win-inset font-sans"
            style={{ height: 16, overflow: "hidden", display: "flex", alignItems: "center", padding: "1px 2px", gap: 1 }}
        >
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    style={{
                        width: 8,
                        height: 12,
                        background: i < blocks ? "#000080" : "transparent",
                        flexShrink: 0,
                    }}
                />
            ))}
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="section-padding font-sans scroll-mt-20" style={{ background: "#c0c0c0" }}>
            <div className="container-standard">
                <div className="win-panel font-sans" style={{ maxWidth: 860, margin: "0 auto" }}>
                    <div className="win-titlebar font-sans">
                        <span style={{ fontSize: 11, fontWeight: "bold" }}>⚙️ System Properties — Skills</span>
                        <div style={{ display: "flex", gap: 2 }}>
                            <button className="win-titlebar-btn" aria-label="Minimize">_</button>
                            <button className="win-titlebar-btn" aria-label="Maximize">□</button>
                            <button className="win-titlebar-btn" aria-label="Close">✕</button>
                        </div>
                    </div>

                    {/* Tab strip */}
                    <div style={{ display: "flex", paddingTop: 6, paddingLeft: 8, borderBottom: "2px solid #808080", background: "#d4d0c8" }}>
                        {["Frontend & UI", "Backend & Logic", "Power Moves"].map((tab, i) => (
                            <div key={tab} className={`win-tab font-sans${i === 0 ? " active" : ""}`}>
                                {tab}
                            </div>
                        ))}
                    </div>

                    <div style={{ padding: 16, background: "#d4d0c8" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                            {/* Frontend */}
                            <div className="win-groupbox font-sans">
                                <span className="win-groupbox-label">Frontend &amp; UI</span>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    {DATA.skills.frontend.map((skill) => (
                                        <div key={skill.name}>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2, fontSize: 11 }}>
                                                <span>{skill.name}</span>
                                                <span style={{ color: "#808080" }}>{skill.level}%</span>
                                            </div>
                                            <WinProgressBar value={skill.level} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="win-groupbox font-sans">
                                <span className="win-groupbox-label">Backend &amp; Logic</span>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    {DATA.skills.backend.map((skill) => (
                                        <div key={skill.name}>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2, fontSize: 11 }}>
                                                <span>{skill.name}</span>
                                                <span style={{ color: "#808080" }}>{skill.level}%</span>
                                            </div>
                                            <WinProgressBar value={skill.level} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Soft skills */}
                            <div className="win-groupbox font-sans">
                                <span className="win-groupbox-label">Power Moves</span>
                                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                    {[
                                        { name: "Problem Solving", tag: "Analytical" },
                                        { name: "Rapid Prototyping", tag: "Fast" },
                                        { name: "Technical SEO", tag: "Growth" },
                                        { name: "Team Collaboration", tag: "Communicative" },
                                        { name: "Continuous Learning", tag: "Modern" },
                                    ].map((skill, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: "3px 5px",
                                                fontSize: 11,
                                                background: index % 2 === 0 ? "#c8c4bc" : "#d4d0c8",
                                            }}
                                        >
                                            <span>{skill.name}</span>
                                            <span
                                                style={{
                                                    fontSize: 9,
                                                    fontWeight: "bold",
                                                    background: "#000080",
                                                    color: "#fff",
                                                    padding: "1px 5px",
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                {skill.tag}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ borderTop: "1px solid #808080", padding: "8px 12px", display: "flex", justifyContent: "flex-end", gap: 8, background: "#d4d0c8" }}>
                        <button className="win-btn-primary font-sans" style={{ padding: "4px 14px", fontSize: 11 }}>OK</button>
                        <button className="win-btn font-sans">Cancel</button>
                        <button className="win-btn font-sans">Apply</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
