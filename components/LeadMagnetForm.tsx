"use client";

import { useState, useRef } from "react";
import { submitLeadMagnet } from "@/lib/actions";
import { Send, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export function LeadMagnetForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
    const formRef = useRef<HTMLFormElement>(null);

    async function handleAction(formData: FormData) {
        setStatus("loading");
        try {
            const res = await submitLeadMagnet(formData);
            if (res.success) {
                setStatus("idle");
                toast.success("Message sent successfully! I'll get back to you soon.");
                formRef.current?.reset();
            } else {
                setStatus("error");
                toast.error(res.message || "Failed to send message.");
            }
        } catch (e) {
            setStatus("error");
            toast.error("An unexpected error occurred.");
        }
    }

    return (
        <form ref={formRef} action={handleAction} className="flex flex-col gap-5 bg-transparent w-full">
            <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 font-outfit">Apply for a Strategy Call</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Fill out the form below to see if we are a good fit.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
                        placeholder="John Doe"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Work Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
                        placeholder="john@startup.com"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="needs" className="text-sm font-medium text-slate-700 dark:text-slate-300">What do you need?</label>
                <select
                    id="needs"
                    name="needs"
                    required
                    defaultValue=""
                    className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none shadow-sm"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right .5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
                >
                    <option value="" disabled>Select an option...</option>
                    <option value="SaaS MVP">SaaS MVP</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Enterprise Web App">Enterprise Web App</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-sm font-medium text-slate-700 dark:text-slate-300">Estimated Budget</label>
                    <select
                        id="budget"
                        name="budget"
                        required
                        defaultValue=""
                        className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none shadow-sm"
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right .5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
                    >
                        <option value="" disabled>Select budget...</option>
                        <option value="$1k-$5k">$1k - $5k</option>
                        <option value="$5k-$10k">$5k - $10k</option>
                        <option value="$10k+">$10k+</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="location" className="text-sm font-medium text-slate-700 dark:text-slate-300">Company Location</label>
                    <select
                        id="location"
                        name="location"
                        required
                        defaultValue=""
                        className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none shadow-sm"
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right .5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
                    >
                        <option value="" disabled>Select location...</option>
                        <option value="USA">USA</option>
                        <option value="Europe">Europe</option>
                        <option value="UK">UK</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.23)] hover:-translate-y-0.5"
            >
                {status === "loading" ? (
                    <Loader2 size={18} className="animate-spin" />
                ) : (
                    <>
                        <Send size={18} />
                        Request Strategy Call
                    </>
                )}
            </button>
        </form>
    );
}
