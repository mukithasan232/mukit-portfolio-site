"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, GitMerge, Star, Calendar, ExternalLink, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data for GitHub Activity (Simulating Real API Data for Visuals)
// In a real production app, this would come from GitHub API
const GITHUB_STATS = {
    totalCommits: 432,
    contributionsLastYear: 845,
    pullRequests: 28,
    activeRepos: 12,
    topLanguages: [
        { name: "TypeScript", percentage: 65, color: "bg-blue-500" },
        { name: "JavaScript", percentage: 25, color: "bg-yellow-400" },
        { name: "CSS/HTML", percentage: 10, color: "bg-orange-500" },
    ],
    contributionGraph: Array.from({ length: 52 }, (_, i) => [0, 2, 1, 3, 4, 2, 1, 4, 3, 2][i % 10]), // Deterministic mock data
};

const INSIGHTS = [
    {
        icon: Calendar,
        label: "Consistency",
        value: "High",
        desc: "Commits code 5-6 days / week",
        color: "text-green-500"
    },
    {
        icon: GitPullRequest,
        label: "Collaboration",
        value: "Active",
        desc: "Regular PR reviews & merges",
        color: "text-purple-500"
    },
    {
        icon: Star,
        label: "Growth",
        value: "+120%",
        desc: "More contributions vs. last year",
        color: "text-yellow-500"
    },
];

export function GitHubInsights() {
    const [hoveredWeek, setHoveredWeek] = useState<number | null>(null);

    return (
        <section className="py-20 bg-muted/20 border-y border-border/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* Left: Main Stats & Headline */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold mb-4 border border-blue-500/20">
                                <GitCommit size={14} /> Open Source Activity
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                                Code that speaks for itself.
                            </h2>
                            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                                I don’t just claim to code; I ship. My GitHub activity reflects a commitment to consistent learning, meaningful contributions, and shipping real features.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl font-bold text-foreground">{GITHUB_STATS.totalCommits}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">2026 Commits</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl font-bold text-foreground">{GITHUB_STATS.pullRequests}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Pull Requests</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl font-bold text-foreground">{GITHUB_STATS.activeRepos}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Active Repos</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl font-bold text-foreground">{GITHUB_STATS.contributionsLastYear}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Total Contribs</div>
                            </div>
                        </div>

                        {/* AI Insight Box */}
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-600/5 to-purple-600/5 border border-blue-500/10">
                            <div className="absolute top-4 right-4 text-blue-500/20">
                                <Sparkles size={40} />
                            </div>
                            <h4 className="flex items-center gap-2 font-semibold text-blue-600 mb-2">
                                <BotIcon /> Mukit AI Analysis
                            </h4>
                            <p className="text-sm text-muted-foreground italic">
                                "Mukit's commit history shows a strong 'green streak' on weekends, indicating passion beyond just 9-5 work. High usage of TypeScript suggests a focus on scalable, maintainable codebases."
                            </p>
                        </div>
                    </div>

                    {/* Right: Visual Activity Graph */}
                    <div className="flex-1 w-full bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8">
                        <h3 className="text-lg font-semibold mb-6 flex items-center justify-between">
                            <span>Contribution Activity</span>
                            <a href="https://github.com/mukithasan232" target="_blank" className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
                                View Profile <ExternalLink size={12} />
                            </a>
                        </h3>

                        {/* Visual Contribution Graph (Mock) */}
                        <div className="flex flex-wrap gap-1 mb-8" onMouseLeave={() => setHoveredWeek(null)}>
                            {GITHUB_STATS.contributionGraph.map((level, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.01 }}
                                    onMouseEnter={() => setHoveredWeek(i)}
                                    className={cn(
                                        "w-3 h-3 md:w-3.5 md:h-3.5 rounded-sm transition-all hover:scale-125 hover:z-10 cursor-pointer relative",
                                        level === 0 ? "bg-secondary/40" :
                                            level === 1 ? "bg-green-200 dark:bg-green-900" :
                                                level === 2 ? "bg-green-300 dark:bg-green-700" :
                                                    level === 3 ? "bg-green-400 dark:bg-green-500" :
                                                        "bg-green-500 dark:bg-green-400"
                                    )}
                                >
                                    {hoveredWeek === i && (
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[10px] rounded whitespace-nowrap z-20">
                                            {level === 0 ? "No activity" : `${level * 3} contributions`}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Language Breakdown */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Top Languages</h4>
                            <div className="space-y-3">
                                {GITHUB_STATS.topLanguages.map((lang) => (
                                    <div key={lang.name}>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="font-medium">{lang.name}</span>
                                            <span className="text-muted-foreground">{lang.percentage}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${lang.percentage}%` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className={cn("h-full rounded-full", lang.color)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hiring Insights Grid */}
                        <div className="grid grid-cols-3 gap-2 mt-8 pt-8 border-t border-border/50">
                            {INSIGHTS.map((insight, idx) => (
                                <div key={idx} className="text-center">
                                    <div className={cn("mx-auto mb-2 w-8 h-8 rounded-full bg-muted flex items-center justify-center", insight.color)}>
                                        <insight.icon size={16} />
                                    </div>
                                    <div className="text-xs font-bold">{insight.label}</div>
                                    <div className={cn("text-xs font-semibold", insight.color)}>{insight.value}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

function BotIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
        </svg>
    )
}
