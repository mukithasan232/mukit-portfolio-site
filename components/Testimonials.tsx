"use client";

import { DATA } from "@/lib/data";

export function Testimonials() {
    return (
        <section id="testimonials" className="section-padding font-sans scroll-mt-20" style={{ background: "#c0c0c0" }}>
            <div className="container-standard">
                <div className="win-panel font-sans" style={{ maxWidth: 860, margin: "0 auto" }}>
                    <div className="win-titlebar font-sans">
                        <span style={{ fontSize: 11, fontWeight: "bold" }}>💬 WordPad — Client Testimonials</span>
                        <div style={{ display: "flex", gap: 2 }}>
                            <button className="win-titlebar-btn" aria-label="Minimize">_</button>
                            <button className="win-titlebar-btn" aria-label="Maximize">□</button>
                            <button className="win-titlebar-btn" aria-label="Close">✕</button>
                        </div>
                    </div>
                    <div className="win-menubar font-sans">
                        {["File", "Edit", "View", "Insert", "Format", "Help"].map((m) => (
                            <span key={m} className="win-menubar-item">{m}</span>
                        ))}
                    </div>

                    <div style={{ padding: 16, background: "#d4d0c8" }}>
                        <p style={{ fontWeight: "bold", fontSize: 13, marginBottom: 4 }}>Kind Words from Clients</p>
                        <p style={{ fontSize: 11, color: "#444", marginBottom: 12 }}>
                            Trusted by founders and companies for delivering high-quality, professional-grade web solutions.
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 10 }}>
                            {DATA.testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="win-inset font-sans"
                                    style={{ padding: 12, background: "#fff", position: "relative" }}
                                >
                                    {/* Stars */}
                                    <div style={{ display: "flex", gap: 2, marginBottom: 6 }}>
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} style={{ color: "#ffc000", fontSize: 12 }}>★</span>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p style={{ fontSize: 11, lineHeight: 1.6, fontStyle: "italic", color: "#222", marginBottom: 10, fontFamily: "Times New Roman, serif" }}>
                                        &quot;{testimonial.content}&quot;
                                    </p>

                                    {/* Author */}
                                    <div style={{ borderTop: "1px solid #d4d0c8", paddingTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
                                        <div
                                            style={{
                                                width: 28,
                                                height: 28,
                                                background: "#000080",
                                                color: "#fff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: "bold",
                                                fontSize: 11,
                                                flexShrink: 0,
                                                fontFamily: "Tahoma, Arial, sans-serif",
                                            }}
                                        >
                                            {testimonial.name.split(" ").map((n: string) => n[0]).join("")}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: "bold", fontSize: 11, display: "flex", alignItems: "center", gap: 5 }}>
                                                {testimonial.name}
                                                <span style={{ fontSize: 9, background: "#008000", color: "#fff", padding: "1px 4px" }}>Verified</span>
                                            </div>
                                            <div style={{ fontSize: 10, color: "#444", textTransform: "uppercase", letterSpacing: 0.5 }}>
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="win-statusbar font-sans">
                        <div className="win-inset font-sans" style={{ flex: 1, padding: "1px 6px", fontSize: 10 }}>
                            {DATA.testimonials.length} testimonial(s)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
