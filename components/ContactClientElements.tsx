"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { DATA } from "@/lib/data";

export function ContactForm() {
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
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
    );
}
