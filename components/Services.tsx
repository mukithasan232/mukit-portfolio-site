"use client";

import { DATA } from "@/lib/data";
import { Code, Layout, Smartphone, Zap } from "lucide-react";

const icons = [Code, Layout, Smartphone, Zap];

export function Services() {
    return (
        <section id="services" className="section-padding font-sans scroll-mt-20" style={{ background: "#c0c0c0" }}>
            <div className="container-standard">
                <div className="win-panel font-sans" style={{ maxWidth: 860, margin: "0 auto" }}>
                    <div className="win-titlebar font-sans">
                        <span style={{ fontSize: 11, fontWeight: "bold" }}>🔧 Control Panel — Expert Services</span>
                        <div style={{ display: "flex", gap: 2 }}>
                            <button className="win-titlebar-btn" aria-label="Minimize">_</button>
                            <button className="win-titlebar-btn" aria-label="Maximize">□</button>
                            <button className="win-titlebar-btn" aria-label="Close">✕</button>
                        </div>
                    </div>

                    <div className="win-menubar font-sans">
                        {["File", "View", "Help"].map((m) => (
                            <span key={m} className="win-menubar-item">{m}</span>
                        ))}
                    </div>

                    <div style={{ padding: 16, background: "#d4d0c8" }}>
                        <p style={{ fontSize: 11, color: "#444", marginBottom: 12 }}>
                            I specialize in building high-conversion, performance-driven web solutions tailored to your unique business needs.
                        </p>

                        {/* Service cards in icon view (like control panel applets) */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 8 }}>
                            {DATA.services.map((service, index) => {
                                const Icon = icons[index % icons.length];
                                return (
                                    <div
                                        key={index}
                                        className="win-panel font-sans"
                                        style={{ padding: "10px 12px", cursor: "default" }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                                            <div
                                                className="win-inset font-sans"
                                                style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                                            >
                                                <Icon size={16} color="#000080" />
                                            </div>
                                            <span style={{ fontWeight: "bold", fontSize: 11 }}>{service.title}</span>
                                        </div>
                                        <p style={{ fontSize: 10, color: "#444", lineHeight: 1.5 }}>{service.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* How I work */}
                        <div style={{ marginTop: 16 }}>
                            <div className="win-groupbox font-sans">
                                <span className="win-groupbox-label">How I Work</span>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8 }}>
                                    {[
                                        { step: "01", title: "Strategy", desc: "Understanding goals & planning the architecture." },
                                        { step: "02", title: "Design", desc: "Crafting pixel-perfect, modern UI/UX components." },
                                        { step: "03", title: "Develop", desc: "Building with clean code and high performance." },
                                        { step: "04", title: "Launch", desc: "Thorough testing and seamless deployment." },
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ fontSize: 11 }}>
                                            <div style={{ fontWeight: "bold", color: "#000080", marginBottom: 2 }}>
                                                Step {item.step}: {item.title}
                                            </div>
                                            <div style={{ color: "#444", fontSize: 10 }}>{item.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ borderTop: "1px solid #808080", padding: "8px 12px", display: "flex", justifyContent: "flex-end", gap: 8, background: "#d4d0c8" }}>
                        <button className="win-btn-primary font-sans" style={{ padding: "4px 14px", fontSize: 11 }}>OK</button>
                        <button className="win-btn font-sans">Close</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
