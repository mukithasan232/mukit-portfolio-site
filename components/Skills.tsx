"use client";

import { DATA } from "@/lib/data";

export function Skills() {
    return (
        <section
            id="skills"
            className="section-padding"
            style={{
                background: "linear-gradient(180deg, #0a0f1e 0%, #080d1a 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background glow */}
            <div
                className="glow-blob glow-blob-blue"
                style={{ width: 600, height: 600, left: "-200px", top: "50%", transform: "translateY(-50%)", opacity: 0.1 }}
            />

            <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                {/* Section header */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span className="section-label">What I Work With</span>
                    <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
                        Tech{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Stack
                        </span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        A curated set of technologies I use to architect and ship production-grade applications.
                    </p>
                </div>

                {/* Tech Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
                        gap: 12,
                        marginBottom: 72,
                    }}
                >
                    {DATA.techStack.map((tech, i) => (
                        <div
                            key={i}
                            style={{
                                background: "rgba(15, 23, 42, 0.7)",
                                border: "1px solid rgba(99, 102, 241, 0.15)",
                                borderRadius: 14,
                                padding: "20px 16px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 10,
                                cursor: "default",
                                transition: "all 0.3s ease",
                                backdropFilter: "blur(8px)",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99, 102, 241, 0.4)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(99, 102, 241, 0.15)";
                                (e.currentTarget as HTMLElement).style.background = "rgba(99, 102, 241, 0.08)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99, 102, 241, 0.15)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                (e.currentTarget as HTMLElement).style.background = "rgba(15, 23, 42, 0.7)";
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 28,
                                    fontWeight: 700,
                                    color: tech.color,
                                    fontFamily: "'Outfit', sans-serif",
                                    lineHeight: 1,
                                }}
                            >
                                {tech.icon}
                            </span>
                            <span
                                style={{
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: "#94a3b8",
                                    textAlign: "center",
                                    lineHeight: 1.3,
                                }}
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Skills with progress bars */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 48,
                    }}
                    className="skills-grid"
                >
                    {/* Frontend */}
                    <div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                marginBottom: 28,
                            }}
                        >
                            <div
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 10,
                                    background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))",
                                    border: "1px solid rgba(99,102,241,0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 16,
                                }}
                            >
                                🎨
                            </div>
                            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e2e8f0" }}>Frontend</h3>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            {DATA.skills.frontend.map((skill, i) => (
                                <div key={i}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginBottom: 8,
                                        }}
                                    >
                                        <span style={{ fontSize: 14, fontWeight: 500, color: "#94a3b8" }}>
                                            {skill.name}
                                        </span>
                                        <span style={{ fontSize: 13, color: "#6366f1", fontWeight: 600 }}>
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="skill-bar-track">
                                        <div
                                            className="skill-bar-fill"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                marginBottom: 28,
                            }}
                        >
                            <div
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 10,
                                    background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(99,102,241,0.15))",
                                    border: "1px solid rgba(6,182,212,0.25)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 16,
                                }}
                            >
                                ⚙️
                            </div>
                            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e2e8f0" }}>Backend & AI</h3>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            {DATA.skills.backend.map((skill, i) => (
                                <div key={i}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginBottom: 8,
                                        }}
                                    >
                                        <span style={{ fontSize: 14, fontWeight: 500, color: "#94a3b8" }}>
                                            {skill.name}
                                        </span>
                                        <span style={{ fontSize: 13, color: "#8b5cf6", fontWeight: 600 }}>
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="skill-bar-track">
                                        <div
                                            className="skill-bar-fill"
                                            style={{
                                                width: `${skill.level}%`,
                                                background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @media (max-width: 768px) {
                    .skills-grid {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                }
            `}</style>
        </section>
    );
}
