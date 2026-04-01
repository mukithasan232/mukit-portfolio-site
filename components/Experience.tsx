"use client";

import { DATA } from "@/lib/data";

export function Experience() {
    return (
        <section id="experience" className="section-padding font-sans scroll-mt-20" style={{ background: "#d4d0c8" }}>
            <div className="container-standard">
                <div className="win-panel font-sans" style={{ maxWidth: 860, margin: "0 auto" }}>
                    <div className="win-titlebar font-sans">
                        <span style={{ fontSize: 11, fontWeight: "bold" }}>📋 Notepad — career_journey.txt</span>
                        <div style={{ display: "flex", gap: 2 }}>
                            <button className="win-titlebar-btn" aria-label="Minimize">_</button>
                            <button className="win-titlebar-btn" aria-label="Maximize">□</button>
                            <button className="win-titlebar-btn" aria-label="Close">✕</button>
                        </div>
                    </div>

                    <div className="win-menubar font-sans">
                        {["File", "Edit", "Format", "View", "Help"].map((m) => (
                            <span key={m} className="win-menubar-item">{m}</span>
                        ))}
                    </div>

                    <div style={{ padding: 0 }}>
                        {/* Header inside */}
                        <div style={{ background: "#d4d0c8", padding: "8px 12px", borderBottom: "1px solid #808080" }}>
                            <p style={{ fontWeight: "bold", fontSize: 13 }}>Career Journey</p>
                            <p style={{ fontSize: 11, color: "#444" }}>
                                My evolution from an enthusiastic learner to a professional developer shipping real-world applications.
                            </p>
                        </div>

                        {/* Timeline as a table */}
                        <div
                            className="win-inset font-sans"
                            style={{ margin: 12, background: "#fff", minHeight: 200 }}
                        >
                            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11, fontFamily: "Courier New, monospace" }}>
                                <thead>
                                    <tr style={{ background: "#000080", color: "#fff" }}>
                                        <th style={{ padding: "4px 8px", textAlign: "left", fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, fontWeight: "bold" }}>Year</th>
                                        <th style={{ padding: "4px 8px", textAlign: "left", fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, fontWeight: "bold" }}>Company</th>
                                        <th style={{ padding: "4px 8px", textAlign: "left", fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, fontWeight: "bold" }}>Role</th>
                                        <th style={{ padding: "4px 8px", textAlign: "left", fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, fontWeight: "bold" }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {DATA.experience.map((item, index) => (
                                        <tr
                                            key={index}
                                            style={{
                                                background: index % 2 === 0 ? "#ffffff" : "#f0f0f0",
                                                borderBottom: "1px solid #d4d0c8",
                                            }}
                                        >
                                            <td style={{ padding: "5px 8px", verticalAlign: "top", whiteSpace: "nowrap", color: "#000080", fontWeight: "bold" }}>
                                                {item.year}
                                            </td>
                                            <td style={{ padding: "5px 8px", verticalAlign: "top", whiteSpace: "nowrap" }}>
                                                {item.company}
                                            </td>
                                            <td style={{ padding: "5px 8px", verticalAlign: "top", fontWeight: "bold" }}>
                                                {item.role}
                                            </td>
                                            <td style={{ padding: "5px 8px", verticalAlign: "top", color: "#444", lineHeight: 1.5 }}>
                                                {item.description}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="win-statusbar font-sans">
                        <div className="win-inset font-sans" style={{ padding: "1px 6px", fontSize: 10, flex: 1 }}>
                            {DATA.experience.length} record(s) found
                        </div>
                        <div className="win-inset font-sans" style={{ padding: "1px 6px", fontSize: 10 }}>
                            Ready
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
