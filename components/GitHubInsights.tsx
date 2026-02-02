"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitCommit, Star, Calendar, ExternalLink, Sparkles, Users, BookMarked } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchGitHubData } from "@/lib/github";

interface GitHubRepo {
    stargazers_count: number;
    language: string | null;
}

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

export function GitHubInsights() {
    const [hoveredWeek, setHoveredWeek] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalContributions: 0,
        followers: 0,
        publicRepos: 0,
        totalStars: 0,
        topLanguages: [] as { name: string; percentage: number; color: string }[],
        contributionGraph: [] as ContributionDay[],
    });

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchGitHubData("mukithasan232");
                if (data) {
                    // Process Repos for Languages and Stars
                    const languageCounts: Record<string, number> = {};
                    let stars = 0;
                    let totalReposWithLang = 0;

                    if (Array.isArray(data.repos)) {
                        data.repos.forEach((repo: GitHubRepo) => {
                            stars += repo.stargazers_count;
                            if (repo.language) {
                                languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
                                totalReposWithLang++;
                            }
                        });
                    }

                    const sortedLanguages = Object.entries(languageCounts)
                        .sort(([, a], [, b]) => b - a)
                        .slice(0, 3)
                        .map(([name, count]) => ({
                            name,
                            percentage: Math.round((count / totalReposWithLang) * 100),
                            color: getLanguageColor(name),
                        }));

                    // Process Contributions
                    const contributions = data.contributions?.contributions || [];
                    const lastYearContribs = contributions.reduce((acc: number, curr: ContributionDay) => acc + curr.count, 0);

                    setStats({
                        totalContributions: lastYearContribs,
                        followers: data.user.followers,
                        publicRepos: data.user.public_repos,
                        totalStars: stars,
                        topLanguages: sortedLanguages,
                        contributionGraph: contributions, // Take last 365 or so
                    });
                }
            } catch (error) {
                console.error("Failed to load GitHub stats", error);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    const getLanguageColor = (lang: string) => {
        const colors: Record<string, string> = {
            TypeScript: "bg-blue-500",
            JavaScript: "bg-yellow-400",
            HTML: "bg-orange-500",
            CSS: "bg-blue-400",
            Python: "bg-green-500",
            Java: "bg-red-500",
            Go: "bg-cyan-500",
            Rust: "bg-orange-600",
        };
        return colors[lang] || "bg-gray-500";
    };

    if (loading) {
        return (
            <section className="py-20 bg-muted/20 border-y border-border/50">
                <div className="container px-4 md:px-6 flex justify-center items-center min-h-[400px]">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="h-4 w-32 bg-gray-300 rounded mb-4"></div>
                        <div className="h-4 w-48 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </section>
        );
    }

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
                                I don&apos;t just claim to code; I ship. My GitHub activity reflects a commitment to consistent learning, meaningful contributions, and shipping real features.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-2 right-2 text-muted-foreground/10 group-hover:text-blue-500/20 transition-colors">
                                    <GitCommit size={48} />
                                </div>
                                <div className="text-3xl font-bold text-foreground relative z-10">{stats.totalContributions}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1 relative z-10">Total Contributions</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-2 right-2 text-muted-foreground/10 group-hover:text-yellow-500/20 transition-colors">
                                    <Star size={48} />
                                </div>
                                <div className="text-3xl font-bold text-foreground relative z-10">{stats.totalStars}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1 relative z-10">Stars Earned</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-2 right-2 text-muted-foreground/10 group-hover:text-purple-500/20 transition-colors">
                                    <BookMarked size={48} />
                                </div>
                                <div className="text-3xl font-bold text-foreground relative z-10">{stats.publicRepos}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1 relative z-10">Public Repos</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-2 right-2 text-muted-foreground/10 group-hover:text-green-500/20 transition-colors">
                                    <Users size={48} />
                                </div>
                                <div className="text-3xl font-bold text-foreground relative z-10">{stats.followers}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1 relative z-10">Followers</div>
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
                                &quot;Mukit&apos;s activity shows consistent contributions. {stats.topLanguages[0] ? `Strong focus on ${stats.topLanguages[0].name}.` : ""} The contribution graph indicates a steady commitment to coding.&quot;
                            </p>
                        </div>
                    </div>

                    {/* Right: Visual Activity Graph */}
                    <div className="flex-1 w-full bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8">
                        <h3 className="text-lg font-semibold mb-6 flex items-center justify-between">
                            <span>Contribution Activity (Last Year)</span>
                            <a href="https://github.com/mukithasan232" target="_blank" className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
                                View Profile <ExternalLink size={12} />
                            </a>
                        </h3>

                        {/* Visual Contribution Graph (Real) */}
                        <div className="flex flex-wrap gap-1 mb-8 max-h-[300px] overflow-y-auto" onMouseLeave={() => setHoveredWeek(null)}>
                            {stats.contributionGraph.slice(-160).map((day, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: Math.min(i * 0.005, 0.5) }}
                                    onMouseEnter={() => setHoveredWeek(i)}
                                    className={cn(
                                        "w-2.5 h-2.5 rounded-[1px] cursor-pointer relative",
                                        day.level === 0 ? "bg-secondary/40" :
                                            day.level === 1 ? "bg-green-200 dark:bg-green-900" :
                                                day.level === 2 ? "bg-green-300 dark:bg-green-700" :
                                                    day.level === 3 ? "bg-green-400 dark:bg-green-600" :
                                                        "bg-green-500 dark:bg-green-500"
                                    )}
                                >
                                    {hoveredWeek === i && (
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[10px] rounded whitespace-nowrap z-20">
                                            {day.date}: {day.count} contributions
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Language Breakdown */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Top Languages</h4>
                            <div className="space-y-3">
                                {stats.topLanguages.map((lang) => (
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

                        {/* Hiring Insights Grid (Static/Inferred for now) */}
                        <div className="grid grid-cols-3 gap-2 mt-8 pt-8 border-t border-border/50">
                            <div className="text-center">
                                <div className={cn("mx-auto mb-2 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-green-500")}>
                                    <Calendar size={16} />
                                </div>
                                <div className="text-xs font-bold">Consistency</div>
                                <div className="text-xs font-semibold text-green-500">Steady</div>
                            </div>
                            <div className="text-center">
                                <div className={cn("mx-auto mb-2 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-purple-500")}>
                                    <BookMarked size={16} />
                                </div>
                                <div className="text-xs font-bold">Repos</div>
                                <div className="text-xs font-semibold text-purple-500">{stats.publicRepos}+</div>
                            </div>
                            <div className="text-center">
                                <div className={cn("mx-auto mb-2 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-yellow-500")}>
                                    <Users size={16} />
                                </div>
                                <div className="text-xs font-bold">Community</div>
                                <div className="text-xs font-semibold text-yellow-500">{stats.followers} Follows</div>
                            </div>
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
