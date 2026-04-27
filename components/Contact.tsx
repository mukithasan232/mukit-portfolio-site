"use client";

import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { DATA } from "@/lib/data";

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Twitter: Twitter,
    "Business Email": Mail,
};

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoUrl = `mailto:${DATA.contact.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(body)}`;
        setTimeout(() => {
            window.location.href = mailtoUrl;
            setSending(false);
            setSent(true);
            setTimeout(() => setSent(false), 3000);
        }, 600);
    };

    return (
        <section
            id="contact"
            className="section-padding"
            style={{
                background: "linear-gradient(180deg, #080d1a 0%, #060a14 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Glows */}
            <div
                className="glow-blob glow-blob-blue"
                style={{ width: 600, height: 600, left: "50%", top: "50%", transform: "translate(-50%,-50%)", opacity: 0.06 }}
            />
            <div
                className="glow-blob glow-blob-violet"
                style={{ width: 400, height: 400, right: 0, bottom: 0, opacity: 0.08 }}
            />

            <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                {/* Section header */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
                        Let&apos;s{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Collaborate
                        </span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Ready to build something extraordinary? Whether it&apos;s an MVP, SaaS, or AI integration — let&apos;s make it happen.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.6fr",
                        gap: 32,
                        alignItems: "start",
                    }}
                    className="contact-grid"
                >
                    {/* Left: Info */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        {/* Contact info cards */}
                        {[
                            {
                                icon: <Mail size={18} />,
                                title: "Email",
                                value: DATA.contact.email,
                                href: `mailto:${DATA.contact.email}`,
                                sub: "Typically replies within 24 hours",
                            },
                            {
                                icon: <MapPin size={18} />,
                                title: "Location",
                                value: "Bangladesh",
                                href: null,
                                sub: "Available for remote work worldwide",
                            },
                            {
                                icon: (
                                    <span
                                        style={{
                                            width: 18,
                                            height: 18,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        ⚡
                                    </span>
                                ),
                                title: "Availability",
                                value: "Open to New Projects",
                                href: null,
                                sub: "Currently accepting clients for Q2 2026",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    background: "rgba(15, 23, 42, 0.7)",
                                    backdropFilter: "blur(16px)",
                                    border: "1px solid rgba(99, 102, 241, 0.15)",
                                    borderRadius: 16,
                                    padding: "20px 22px",
                                    display: "flex",
                                    gap: 16,
                                    alignItems: "flex-start",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.35)";
                                    (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.06)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.15)";
                                    (e.currentTarget as HTMLElement).style.background = "rgba(15,23,42,0.7)";
                                }}
                            >
                                <div
                                    style={{
                                        width: 42,
                                        height: 42,
                                        borderRadius: 12,
                                        background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.1))",
                                        border: "1px solid rgba(99,102,241,0.25)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#6366f1",
                                        flexShrink: 0,
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: 12, color: "#475569", fontWeight: 600, marginBottom: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>
                                        {item.title}
                                    </div>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            style={{ fontSize: 15, fontWeight: 600, color: "#a5b4fc", textDecoration: "none" }}
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <div style={{ fontSize: 15, fontWeight: 600, color: "#e2e8f0" }}>
                                            {item.value}
                                        </div>
                                    )}
                                    <div style={{ fontSize: 12, color: "#475569", marginTop: 2 }}>
                                        {item.sub}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Social Links */}
                        <div
                            style={{
                                background: "rgba(15, 23, 42, 0.5)",
                                border: "1px solid rgba(99,102,241,0.12)",
                                borderRadius: 16,
                                padding: "20px 22px",
                            }}
                        >
                            <div style={{ fontSize: 13, fontWeight: 600, color: "#64748b", marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>
                                Connect on Social
                            </div>
                            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                                {DATA.socials.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8,
                                                padding: "10px 16px",
                                                background: "rgba(99,102,241,0.08)",
                                                border: "1px solid rgba(99,102,241,0.2)",
                                                borderRadius: 10,
                                                color: "#94a3b8",
                                                textDecoration: "none",
                                                fontSize: 13,
                                                fontWeight: 500,
                                                transition: "all 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.15)";
                                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.4)";
                                                (e.currentTarget as HTMLElement).style.color = "#a5b4fc";
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.08)";
                                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.2)";
                                                (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                                            }}
                                            aria-label={social.name}
                                        >
                                            <Icon size={15} />
                                            {social.name}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div
                        style={{
                            background: "rgba(15, 23, 42, 0.7)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(99, 102, 241, 0.2)",
                            borderRadius: 24,
                            padding: "40px 36px",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {/* Top glow line */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "2px",
                                background: "linear-gradient(90deg, transparent, #6366f1, #8b5cf6, transparent)",
                            }}
                        />

                        <h3
                            style={{
                                fontSize: 24,
                                fontWeight: 700,
                                color: "#f0f4ff",
                                marginBottom: 6,
                                fontFamily: "'Outfit', sans-serif",
                            }}
                        >
                            Send a Message
                        </h3>
                        <p style={{ fontSize: 14, color: "#475569", marginBottom: 28 }}>
                            Tell me about your project and I&apos;ll get back to you within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                                <div>
                                    <label style={{ fontSize: 13, fontWeight: 600, color: "#64748b", display: "block", marginBottom: 6 }}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="MD Mukit Hasan"
                                        id="contact-name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label style={{ fontSize: 13, fontWeight: 600, color: "#64748b", display: "block", marginBottom: 6 }}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        id="contact-email"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ fontSize: 13, fontWeight: 600, color: "#64748b", display: "block", marginBottom: 6 }}>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="MVP Development · SaaS Project · AI Integration"
                                    id="contact-subject"
                                    className="form-input"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>

                            <div>
                                <label style={{ fontSize: 13, fontWeight: 600, color: "#64748b", display: "block", marginBottom: 6 }}>
                                    Message
                                </label>
                                <textarea
                                    required
                                    placeholder="Tell me about your project, timeline, and budget..."
                                    id="contact-message"
                                    className="form-input"
                                    style={{ minHeight: 140, resize: "vertical" }}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={sending}
                                    style={{
                                        flex: 1,
                                        justifyContent: "center",
                                        opacity: sending ? 0.7 : 1,
                                        cursor: sending ? "not-allowed" : "pointer",
                                    }}
                                >
                                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        {sending ? (
                                            <>Sending...</>
                                        ) : sent ? (
                                            <>✓ Message Sent!</>
                                        ) : (
                                            <><Send size={15} /> Send Message</>
                                        )}
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ name: "", email: "", subject: "", message: "" })}
                                    className="btn-outline"
                                    style={{ padding: "12px 20px" }}
                                >
                                    Clear
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @media (max-width: 900px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 480px) {
                    .form-row {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
