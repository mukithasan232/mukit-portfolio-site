"use client";

import { DATA } from "@/lib/data";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

export const RecentProjectHighlight = () => {
    const recentProjects = [...DATA.projects].reverse().slice(0, 2);

    return (
        <section className="section-padding font-sans" style={{ background: "#c0c0c0" }}>
            <div className="container-standard">
                <div className="win-panel font-sans" style={{ maxWidth: 860, margin: "0 auto" }}>
                    <div className="win-titlebar font-sans">
                        <span style={{ fontSize: 11, fontWeight: "bold" }}>🏆 Windows Explorer — Recent Highlights</span>
                        <div style={{ display: "flex", gap: 2 }}>
                            <button className="win-titlebar-btn" aria-label="Minimize">_</button>
                            <button className="win-titlebar-btn" aria-label="Maximize">□</button>
                            <button className="win-titlebar-btn" aria-label="Close">✕</button>
                        </div>
                    </div>
                    <div className="win-menubar font-sans">
                        {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((m) => (
                            <span key={m} className="win-menubar-item">{m}</span>
                        ))}
                    </div>

                    <div style={{ padding: 16, background: "#d4d0c8" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                            <div>
                                <p style={{ fontSize: 10, fontWeight: "bold", color: "#000080", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>Showcase</p>
                                <p style={{ fontWeight: "bold", fontSize: 16 }}>Recent Highlights</p>
                            </div>
                            <Link href="#projects" className="win-btn font-sans" style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, textDecoration: "none" }}>
                                View All <ArrowRight size={10} />
                            </Link>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {recentProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="win-inset font-sans"
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "200px 1fr",
                                        background: "#fff",
                                        minHeight: 140,
                                    }}
                                >
                                    {/* Image */}
                                    <div style={{ overflow: "hidden", height: "100%" }}>
                                        {project.images?.length > 0 ? (
                                            <img
                                                src={project.images[0]}
                                                alt={project.title}
                                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                                            />
                                        ) : (
                                            <div style={{ width: "100%", height: "100%", background: "#808080", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff" }}>
                                                No Preview
                                            </div>
                                        )}
                                    </div>

                                    {/* Details */}
                                    <div style={{ padding: "10px 12px", fontSize: 11 }}>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 6 }}>
                                            {project.tech.slice(0, 4).map((t: string) => (
                                                <span
                                                    key={t}
                                                    className="win-inset font-sans"
                                                    style={{ fontSize: 9, padding: "1px 5px", background: "#fff" }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <p style={{ fontWeight: "bold", fontSize: 13, marginBottom: 4 }}>
                                            {project.title.split(" - ")[0]}
                                        </p>
                                        <p style={{ color: "#444", marginBottom: 8, lineHeight: 1.5 }}>{project.solution}</p>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 8 }}>
                                            <div className="win-inset font-sans" style={{ padding: "5px 7px", background: "#fff" }}>
                                                <p style={{ fontWeight: "bold", fontSize: 10, marginBottom: 2 }}>Challenge</p>
                                                <p style={{ fontSize: 10, color: "#444", lineHeight: 1.4 }}>{project.problem.slice(0, 80)}...</p>
                                            </div>
                                            <div className="win-inset font-sans" style={{ padding: "5px 7px", background: "#fff" }}>
                                                <p style={{ fontWeight: "bold", fontSize: 10, marginBottom: 2 }}>Result</p>
                                                <p style={{ fontSize: 10, color: "#444", lineHeight: 1.4 }}>{project.result.slice(0, 80)}...</p>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", gap: 6 }}>
                                            <Link href={project.github} target="_blank" className="win-btn font-sans" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 3, fontSize: 10, padding: "2px 8px" }}>
                                                <Github size={10} /> Source
                                            </Link>
                                            <Link href={project.live} target="_blank" className="win-btn-primary font-sans" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 3, fontSize: 10, padding: "2px 8px" }}>
                                                <ExternalLink size={10} /> Live
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
