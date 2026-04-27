"use client";

import { DATA } from "@/lib/data";

export function Testimonials() {
    return (
        <section
            id="testimonials"
            className="section-padding"
            style={{
                background: "linear-gradient(180deg, #080d1a 0%, #0a0f1e 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient glow */}
            <div
                className="glow-blob glow-blob-blue"
                style={{ width: 500, height: 500, right: "-100px", top: "50%", transform: "translateY(-50%)", opacity: 0.06 }}
            />

            <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                {/* Section header */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span className="section-label">Client Feedback</span>
                    <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
                        What Clients{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Say
                        </span>
                    </h2>
                </div>

                {/* Testimonials grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 20,
                    }}
                >
                    {DATA.testimonials.map((t, i) => (
                        <div
                            key={i}
                            style={{
                                background: "rgba(15, 23, 42, 0.7)",
                                backdropFilter: "blur(16px)",
                                border: "1px solid rgba(99, 102, 241, 0.15)",
                                borderRadius: 20,
                                padding: "28px 28px",
                                transition: "all 0.3s ease",
                                position: "relative",
                                overflow: "hidden",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99, 102, 241, 0.35)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(99, 102, 241, 0.12)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99, 102, 241, 0.15)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                            }}
                        >
                            {/* Quote mark */}
                            <div
                                style={{
                                    fontSize: 72,
                                    lineHeight: 1,
                                    color: "rgba(99,102,241,0.15)",
                                    fontFamily: "Georgia, serif",
                                    position: "absolute",
                                    top: 10,
                                    right: 20,
                                    userSelect: "none",
                                }}
                            >
                                &ldquo;
                            </div>

                            {/* Stars */}
                            <div style={{ color: "#f59e0b", fontSize: 14, marginBottom: 16, letterSpacing: 2 }}>
                                ★★★★★
                            </div>

                            {/* Content */}
                            <p
                                style={{
                                    fontSize: 15,
                                    color: "#94a3b8",
                                    lineHeight: 1.75,
                                    marginBottom: 24,
                                    fontStyle: "italic",
                                }}
                            >
                                &ldquo;{t.content}&rdquo;
                            </p>

                            {/* Author */}
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <div
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 14,
                                        fontWeight: 800,
                                        color: "#fff",
                                        fontFamily: "'Outfit', sans-serif",
                                        flexShrink: 0,
                                    }}
                                >
                                    {t.avatar || t.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                                </div>
                                <div>
                                    <div style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0" }}>{t.name}</div>
                                    <div style={{ fontSize: 12, color: "#475569" }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
