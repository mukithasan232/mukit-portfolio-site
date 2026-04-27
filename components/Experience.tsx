"use client";

import { DATA } from "@/lib/data";

export function Experience() {
    return (
        <section
            id="experience"
            className="section-padding"
            style={{
                background: "linear-gradient(180deg, #080d1a 0%, #0a0f1e 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient glow */}
            <div
                className="glow-blob glow-blob-cyan"
                style={{ width: 400, height: 400, right: "10%", top: "20%", opacity: 0.08 }}
            />

            <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                {/* Section header */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span className="section-label">My Journey</span>
                    <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
                        Experience &{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Education
                        </span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        From student to founder — building real products that solve real problems.
                    </p>
                </div>

                {/* Timeline */}
                <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
                    {/* Vertical line */}
                    <div
                        style={{
                            position: "absolute",
                            left: 20,
                            top: 0,
                            bottom: 0,
                            width: 1,
                            background: "linear-gradient(180deg, #6366f1, rgba(99,102,241,0.1))",
                        }}
                    />

                    <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                        {DATA.experience.map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    gap: 28,
                                    alignItems: "flex-start",
                                    paddingLeft: 0,
                                }}
                            >
                                {/* Timeline dot */}
                                <div
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))",
                                        border: "2px solid rgba(99,102,241,0.5)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        fontSize: 14,
                                        boxShadow: "0 0 20px rgba(99,102,241,0.2)",
                                        zIndex: 1,
                                        position: "relative",
                                    }}
                                >
                                    {i === 0 ? "🚀" : i === 1 ? "🎓" : "💼"}
                                </div>

                                {/* Content */}
                                <div
                                    style={{
                                        flex: 1,
                                        background: "rgba(15, 23, 42, 0.6)",
                                        backdropFilter: "blur(12px)",
                                        border: "1px solid rgba(99,102,241,0.15)",
                                        borderRadius: 16,
                                        padding: "22px 24px",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.35)";
                                        (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.06)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.15)";
                                        (e.currentTarget as HTMLElement).style.background = "rgba(15,23,42,0.6)";
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            flexWrap: "wrap",
                                            gap: 8,
                                            marginBottom: 8,
                                        }}
                                    >
                                        <div>
                                            <h3
                                                style={{
                                                    fontSize: 17,
                                                    fontWeight: 700,
                                                    color: "#f0f4ff",
                                                    fontFamily: "'Outfit', sans-serif",
                                                    marginBottom: 2,
                                                }}
                                            >
                                                {item.role}
                                            </h3>
                                            <div
                                                style={{
                                                    fontSize: 14,
                                                    color: "#6366f1",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {item.company}
                                            </div>
                                        </div>
                                        <span
                                            style={{
                                                fontSize: 12,
                                                fontWeight: 600,
                                                padding: "4px 12px",
                                                background: "rgba(99,102,241,0.1)",
                                                border: "1px solid rgba(99,102,241,0.2)",
                                                borderRadius: 20,
                                                color: "#a5b4fc",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {item.year}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65 }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
