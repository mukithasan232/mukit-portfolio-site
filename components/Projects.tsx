"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DATA } from "@/lib/data";

interface Project {
    title: string;
    problem: string;
    solution: string;
    result: string;
    tech: string[];
    live: string;
    github: string;
    images: string[];
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [minimized, setMinimized] = useState(false);

    return (
        <>
            <div className="win-panel font-sans" style={{ display: "flex", flexDirection: "column" }}>
                {/* Title bar */}
                <div className="win-titlebar font-sans">
                    <span style={{ fontSize: 11, fontWeight: "bold" }}>📄 {project.title}</span>
                    <div style={{ display: "flex", gap: 2 }}>
                        <button className="win-titlebar-btn" onClick={() => setMinimized(!minimized)} aria-label="Minimize">_</button>
                        <button className="win-titlebar-btn" aria-label="Maximize">□</button>
                        <button className="win-titlebar-btn" aria-label="Close">✕</button>
                    </div>
                </div>

                {!minimized && (
                    <>
                        {/* Image area */}
                        <div
                            className="win-inset font-sans"
                            style={{ margin: "6px 6px 0", cursor: "pointer", height: 120, overflow: "hidden", position: "relative" }}
                            onClick={() => project.images?.length > 0 && setIsLightboxOpen(true)}
                        >
                            {project.images?.length > 0 ? (
                                <img
                                    src={project.images[currentImage]}
                                    alt={project.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            ) : (
                                <div style={{ width: "100%", height: "100%", background: "#808080", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff" }}>
                                    No Preview Available
                                </div>
                            )}
                            {project.images?.length > 1 && (
                                <div style={{ position: "absolute", bottom: 4, right: 4, display: "flex", gap: 3 }}>
                                    {project.images.map((_: string, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                                            style={{
                                                width: 8,
                                                height: 8,
                                                background: idx === currentImage ? "#000080" : "#c0c0c0",
                                                border: "1px solid #000",
                                                padding: 0,
                                                cursor: "pointer",
                                            }}
                                            aria-label={`Image ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Details */}
                        <div style={{ padding: "8px 8px 6px", fontSize: 11, flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                            <div>
                                <span style={{ fontWeight: "bold" }}>Problem: </span>
                                <span style={{ color: "#444" }}>{project.problem}</span>
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold" }}>Solution: </span>
                                <span style={{ color: "#444" }}>{project.solution}</span>
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold" }}>Result: </span>
                                <span style={{ color: "#444" }}>{project.result}</span>
                            </div>

                            {/* Tech tags */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginTop: 4 }}>
                                {project.tech.map((t: string) => (
                                    <span
                                        key={t}
                                        className="win-inset font-sans"
                                        style={{ fontSize: 10, padding: "1px 5px", background: "#fff" }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div style={{ borderTop: "1px solid #808080", padding: "6px 8px", display: "flex", gap: 6 }}>
                            <Link
                                href={project.live}
                                target="_blank"
                                className="win-btn-primary font-sans"
                                style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 3, fontSize: 11, padding: "3px 10px" }}
                            >
                                <ExternalLink size={10} /> Live Demo
                            </Link>
                            <Link
                                href={project.github}
                                target="_blank"
                                className="win-btn font-sans"
                                style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 3, fontSize: 11, padding: "3px 10px" }}
                            >
                                <Github size={10} /> GitHub
                            </Link>
                        </div>
                    </>
                )}
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center" }}
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <div className="win-panel font-sans" style={{ maxWidth: "90vw", maxHeight: "90vh" }} onClick={(e) => e.stopPropagation()}>
                        <div className="win-titlebar font-sans">
                            <span style={{ fontSize: 11, fontWeight: "bold" }}>🖼 {project.title} — Image Viewer</span>
                            <button className="win-titlebar-btn" onClick={() => setIsLightboxOpen(false)} aria-label="Close">✕</button>
                        </div>
                        <div style={{ padding: 8 }}>
                            <img
                                src={project.images[currentImage]}
                                alt={project.title}
                                style={{ maxWidth: "80vw", maxHeight: "70vh", display: "block" }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export function Projects() {
    return (
        <section id="projects" className="section-padding font-sans scroll-mt-20" style={{ background: "#d4d0c8" }}>
            <div className="container-standard">
                {/* Section header window */}
                <div className="win-panel font-sans" style={{ marginBottom: 16 }}>
                    <div className="win-titlebar font-sans">
                        <span style={{ fontSize: 11, fontWeight: "bold" }}>💼 My Portfolio — Windows Explorer</span>
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
                    <div style={{ padding: "8px 12px", fontSize: 11 }}>
                        <p style={{ fontWeight: "bold", marginBottom: 2 }}>More Projects</p>
                        <p style={{ color: "#444" }}>
                            Explore my complete portfolio of web applications showcasing various technologies and problem-solving skills.
                        </p>
                    </div>
                </div>

                {/* Project cards grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                    {DATA.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <div style={{ marginTop: 12, display: "flex", justifyContent: "center" }}>
                    <Link
                        href="https://github.com/mukithasan232"
                        className="win-btn font-sans"
                        style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, textDecoration: "none" }}
                    >
                        <Github size={12} />
                        View more on GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}
