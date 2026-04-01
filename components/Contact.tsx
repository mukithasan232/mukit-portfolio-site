"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { DATA } from "@/lib/data";

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:${DATA.socials.find((s) => s.name === "Email")?.url.replace("mailto:", "")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="section-padding font-sans scroll-mt-20" style={{ background: "#c0c0c0" }}>
            <div className="container-standard">
                <div className="win-panel font-sans" style={{ maxWidth: 860, margin: "0 auto" }}>
                    <div className="win-titlebar font-sans">
                        <span style={{ fontSize: 11, fontWeight: "bold" }}>✉️ New Message — Outlook Express</span>
                        <div style={{ display: "flex", gap: 2 }}>
                            <button className="win-titlebar-btn" aria-label="Minimize">_</button>
                            <button className="win-titlebar-btn" aria-label="Maximize">□</button>
                            <button className="win-titlebar-btn" aria-label="Close">✕</button>
                        </div>
                    </div>

                    <div className="win-menubar font-sans">
                        {["File", "Edit", "View", "Insert", "Format", "Tools", "Message", "Help"].map((m) => (
                            <span key={m} className="win-menubar-item">{m}</span>
                        ))}
                    </div>

                    {/* Toolbar */}
                    <div style={{ background: "#d4d0c8", padding: "4px 8px", borderBottom: "1px solid #808080", display: "flex", gap: 6 }}>
                        <button type="button" className="win-btn font-sans" style={{ minWidth: 50, fontSize: 10 }}>
                            Send
                        </button>
                        <button type="button" className="win-btn font-sans" style={{ minWidth: 50, fontSize: 10 }}>
                            Save
                        </button>
                        <div style={{ width: 2, height: 22, background: "#808080", borderRight: "1px solid #fff" }} />
                        <button type="button" className="win-btn font-sans" style={{ minWidth: 40, fontSize: 10 }}>
                            Attach
                        </button>
                    </div>

                    <div style={{ padding: 12, background: "#d4d0c8", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        {/* Info side */}
                        <div style={{ fontSize: 11 }}>
                            <div className="win-groupbox font-sans" style={{ marginBottom: 10 }}>
                                <span className="win-groupbox-label">Contact Info</span>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                                        <Mail size={14} style={{ marginTop: 1, color: "#000080", flexShrink: 0 }} />
                                        <div>
                                            <div style={{ fontWeight: "bold" }}>Email Me</div>
                                            <a
                                                href={DATA.socials.find((s) => s.name === "Email")?.url}
                                                style={{ color: "#0000ff", textDecoration: "underline" }}
                                            >
                                                {DATA.socials.find((s) => s.name === "Email")?.url.replace("mailto:", "")}
                                            </a>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                                        <MapPin size={14} style={{ marginTop: 1, color: "#000080", flexShrink: 0 }} />
                                        <div>
                                            <div style={{ fontWeight: "bold" }}>Location</div>
                                            <div style={{ color: "#444" }}>Available Remote / Worldwide</div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                                        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#00aa00", marginTop: 2, flexShrink: 0 }} />
                                        <div>
                                            <div style={{ fontWeight: "bold" }}>Availability</div>
                                            <div style={{ color: "#444" }}>Open for new projects</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="win-groupbox font-sans">
                                <span className="win-groupbox-label">Working Hours</span>
                                <table style={{ width: "100%", fontSize: 10, borderCollapse: "collapse" }}>
                                    <tbody>
                                        {[
                                            { day: "Mon - Fri:", time: "9:00 AM - 6:00 PM" },
                                            { day: "Saturday:", time: "10:00 AM - 2:00 PM" },
                                            { day: "Sunday:", time: "Rest Day" },
                                        ].map(({ day, time }) => (
                                            <tr key={day}>
                                                <td style={{ paddingRight: 8, paddingBottom: 3, fontWeight: "bold" }}>{day}</td>
                                                <td style={{ paddingBottom: 3, color: day === "Sunday:" ? "#000080" : "#444", fontWeight: day === "Sunday:" ? "bold" : "normal" }}>{time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div style={{ marginTop: 10 }}>
                                <p style={{ fontWeight: "bold", marginBottom: 4 }}>Connect with me</p>
                                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                                    {DATA.socials.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="win-btn font-sans"
                                            style={{ minWidth: 28, padding: "2px 6px", display: "flex", alignItems: "center", justifyContent: "center" }}
                                            aria-label={social.name}
                                        >
                                            <social.icon size={12} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form side */}
                        <div>
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                {/* To / From fields like email client */}
                                <div style={{ display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid #808080", paddingBottom: 4 }}>
                                    <span style={{ fontSize: 11, fontWeight: "bold", width: 50, flexShrink: 0 }}>To:</span>
                                    <div
                                        className="win-inset font-sans"
                                        style={{ flex: 1, padding: "2px 5px", fontSize: 11, background: "#fff" }}
                                    >
                                        {DATA.contact.email}
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid #808080", paddingBottom: 4 }}>
                                    <span style={{ fontSize: 11, fontWeight: "bold", width: 50, flexShrink: 0 }}>From:</span>
                                    <input
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        className="win-input font-sans"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid #808080", paddingBottom: 4 }}>
                                    <span style={{ fontSize: 11, fontWeight: "bold", width: 50, flexShrink: 0 }}>Name:</span>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your name"
                                        className="win-input font-sans"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                {/* Message body */}
                                <textarea
                                    required
                                    placeholder="Tell me about your project..."
                                    className="win-input font-sans"
                                    style={{ minHeight: 120, resize: "vertical" }}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                                <div style={{ display: "flex", gap: 6 }}>
                                    <button type="submit" className="win-btn-primary font-sans" style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, padding: "4px 14px" }}>
                                        <Send size={11} />
                                        Send Message
                                    </button>
                                    <button type="button" className="win-btn font-sans" onClick={() => setFormData({ name: "", email: "", message: "" })}>
                                        Clear
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="win-statusbar font-sans">
                        <div className="win-inset font-sans" style={{ flex: 1, padding: "1px 6px", fontSize: 10 }}>
                            Ready
                        </div>
                        <div className="win-inset font-sans" style={{ padding: "1px 6px", fontSize: 10 }}>
                            Outlook Express 6.0
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
