import { Mail, MapPin } from "lucide-react";
import { DATA } from "@/lib/data";
import { LeadMagnetForm } from "./LeadMagnetForm";

export function Contact({ asH1 = false }: { asH1?: boolean }) {
    return (
        <section
            id="contact"
            className="section-padding w-full relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#080d1a] dark:to-[#060a14] transition-colors duration-300"
        >
            {/* Glows - Only visible in dark mode */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-10 bg-indigo-500/30 transition-opacity duration-300" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-[0.08] bg-purple-500/30 transition-opacity duration-300" />

            <div className="container-standard relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-[13px] font-semibold tracking-[3px] uppercase text-indigo-600 dark:text-indigo-400 mb-3 block">
                        Get In Touch
                    </span>
                    {asH1 ? (
                        <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15] mx-auto">
                            Let&apos;s{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                                Collaborate
                            </span>
                        </h1>
                    ) : (
                        <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15] mx-auto">
                            Let&apos;s{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                                Collaborate
                            </span>
                        </h2>
                    )}
                    <p className="text-[17px] text-slate-600 dark:text-[#94a3b8] max-w-[560px] leading-[1.7] mx-auto">
                        Ready to build something extraordinary? Whether it&apos;s an MVP, SaaS, or AI integration — let&apos;s make it happen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 items-start">
                    {/* Left: Info */}
                    <div className="flex flex-col gap-5">
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
                                    <span className="w-[18px] h-[18px] flex items-center justify-center">
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
                                className="group flex items-start gap-4 p-5 rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-indigo-500/15 hover:border-indigo-400/40 dark:hover:border-indigo-400/40 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300"
                            >
                                <div className="w-[42px] h-[42px] shrink-0 rounded-xl flex items-center justify-center border bg-indigo-50 dark:bg-gradient-to-br dark:from-indigo-500/20 dark:to-purple-500/10 border-indigo-200 dark:border-indigo-500/25 text-indigo-600 dark:text-indigo-400">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-0.5">
                                        {item.title}
                                    </div>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-[15px] font-semibold text-slate-900 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <div className="text-[15px] font-semibold text-slate-900 dark:text-slate-200">
                                            {item.value}
                                        </div>
                                    )}
                                    <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                                        {item.sub}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Social Links */}
                        <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-indigo-500/10">
                            <div className="text-[13px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3.5">
                                Connect on Social
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {DATA.socials.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 bg-slate-100 dark:bg-indigo-500/10 border border-slate-200 dark:border-indigo-500/20 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/15 hover:border-indigo-300 dark:hover:border-indigo-400/40 hover:text-indigo-600 dark:hover:text-indigo-300"
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
                    <div className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-indigo-500/20 shadow-sm dark:shadow-none">
                        {/* Top glow line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                        <LeadMagnetForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
