"use client";

import Link from "next/link";
import Image from "next/image";
import { DATA } from "@/lib/data";

export function About() {
    return (
        <section id="about" className="section-padding font-sans scroll-mt-20" style={{ background: "#d4d0c8" }}>
            <div className="container-standard">
                {/* Win2K window */}
                <div className="win-panel font-sans" style={{ maxWidth: 860, margin: "0 auto" }}>
                    <div className="win-titlebar font-sans">
                        <span style={{ fontSize: 11, fontWeight: "bold" }}>📁 About Me — File Properties</span>
                        <div style={{ display: "flex", gap: 2 }}>
                            <button className="win-titlebar-btn" aria-label="Minimize">_</button>
                            <button className="win-titlebar-btn" aria-label="Maximize">□</button>
                            <button className="win-titlebar-btn" aria-label="Close">✕</button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div style={{ display: "flex", paddingTop: 6, paddingLeft: 8, borderBottom: "2px solid #808080", background: "#d4d0c8" }}>
                        {["General", "Details", "Summary"].map((tab, i) => (
                            <div key={tab} className={`win-tab font-sans${i === 0 ? " active" : ""}`}>
                                {tab}
                            </div>
                        ))}
                    </div>

                    <div style={{ padding: "16px 16px 12px", background: "#d4d0c8" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                            {/* Left: info */}
                            <div>
                                <div className="win-groupbox font-sans">
                                    <span className="win-groupbox-label">About</span>
                                    <p style={{ fontSize: 11, lineHeight: 1.7, color: "#000" }}>
                                        {DATA.about.description}
                                    </p>
                                </div>

                                <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                                    {[
                                        { title: "SEO-First", desc: "Search Engine Optimization" },
                                        { title: "Mobile-First", desc: "Fully Responsive" },
                                        { title: "Scalable", desc: "Clean Architecture" },
                                        { title: "Optimized", desc: "Fast Performance" },
                                    ].map((item, index) => (
                                        <div key={index} className="win-inset font-sans" style={{ padding: "6px 8px" }}>
                                            <div style={{ fontWeight: "bold", fontSize: 11, color: "#000080" }}>{item.title}</div>
                                            <div style={{ fontSize: 10, color: "#444" }}>{item.desc}</div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: 12 }}>
                                    <p style={{ fontSize: 11, color: "#444", marginBottom: 6 }}>
                                        Want to discuss a project?
                                    </p>
                                    <Link href="#contact" className="win-btn-primary font-sans" style={{ textDecoration: "none", padding: "4px 14px", fontSize: 11, display: "inline-block" }}>
                                        Let&apos;s Talk
                                    </Link>
                                </div>
                            </div>

                            {/* Right: photo */}
                            <div>
                                <div className="win-inset font-sans" style={{ padding: 4, display: "inline-block", width: "100%" }}>
                                    <div style={{ position: "relative", width: "100%", aspectRatio: "1", background: "#808080", overflow: "hidden" }}>
                                        <Image
                                            src={DATA.profilePicture}
                                            alt={DATA.name}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                            priority
                                        />
                                    </div>
                                </div>
                                <div style={{ marginTop: 8 }}>
                                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                                        <tbody>
                                            {[
                                                { label: "Name:", value: DATA.name },
                                                { label: "Role:", value: DATA.role },
                                                { label: "Status:", value: "Available" },
                                            ].map(({ label, value }) => (
                                                <tr key={label}>
                                                    <td style={{ paddingRight: 8, fontWeight: "bold", whiteSpace: "nowrap", paddingBottom: 4 }}>{label}</td>
                                                    <td style={{ paddingBottom: 4 }}>{value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dialog footer */}
                    <div style={{ borderTop: "1px solid #808080", padding: "8px 12px", display: "flex", justifyContent: "flex-end", gap: 8, background: "#d4d0c8" }}>
                        <Link href="#contact" className="win-btn-primary font-sans" style={{ textDecoration: "none", padding: "4px 14px", fontSize: 11 }}>
                            OK
                        </Link>
                        <button className="win-btn font-sans">Cancel</button>
                        <button className="win-btn font-sans">Apply</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
