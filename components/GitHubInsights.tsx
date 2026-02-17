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
    const [hoveredDay, setHoveredDay] = useState<number | null>(null);
    const [selectedYear, setSelectedYear] = useState<string>("2026");
    const [loading, setLoading] = useState(true);
    const [aiInsight, setAiInsight] = useState("");

    const [stats, setStats] = useState({
        totalContributions: 0,
        followers: 0,
        publicRepos: 0,
        totalStars: 0,
        topLanguages: [] as { name: string; percentage: number; color: string }[],
        recentLanguages: [] as { name: string; percentage: number; color: string }[],
        contributionGraph: [] as ContributionDay[],
        allContributions: [] as ContributionDay[],
        years: [] as string[],
    });

    useEffect(() => {
        if (!stats.totalContributions) return;

        const insights = [
            `Mukit's activity shows consistent contributions. ${stats.topLanguages[0] ? `Strong focus on ${stats.topLanguages[0].name}.` : ""} The contribution graph indicates a steady commitment to coding.`,
            `With ${stats.totalContributions} total contributions, Mukit shows a high level of technical engagement. The repository growth is impressive.`,
            `Data indicates a proficiency in ${stats.topLanguages.slice(0, 2).map(l => l.name).join(' and ')}. A highly active developer profile.`,
            `The contribution heatmap for ${selectedYear} demonstrates focus and consistent project delivery. Mukit is a reliable builder.`,
            `Consistency is key: Mukit's workflow is characterized by frequent, incremental updates and strong version control habits.`,
            `Analyzing ${stats.totalStars} stars and ${stats.followers} followers highlights community recognition. This developer is deeply engaged in the ecosystem.`
        ];

        // Pick a random insight on mount or when stats change
        const randomInsight = insights[Math.floor(Math.random() * insights.length)];
        setAiInsight(randomInsight);
    }, [stats.totalContributions, stats.topLanguages, stats.totalStars, stats.followers, selectedYear]);

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
                        const now = new Date();
                        const ninetyDaysAgo = new Date(now.setDate(now.getDate() - 90));
                        const recentLanguageCounts: Record<string, number> = {};
                        let recentTotal = 0;

                        data.repos.forEach((repo: any) => {
                            stars += repo.stargazers_count;
                            if (repo.language) {
                                languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
                                totalReposWithLang++;

                                const updatedAt = new Date(repo.updated_at || repo.pushed_at);
                                if (updatedAt > ninetyDaysAgo) {
                                    recentLanguageCounts[repo.language] = (recentLanguageCounts[repo.language] || 0) + 1;
                                    recentTotal++;
                                }
                            }
                        });

                        const processLangs = (counts: Record<string, number>, total: number) =>
                            Object.entries(counts)
                                .sort(([, a], [, b]) => b - a)
                                .slice(0, 5)
                                .map(([name, count]) => ({
                                    name,
                                    percentage: Math.round((count / total) * 100),
                                    color: getLanguageColor(name),
                                }));

                        const sortedLanguages = processLangs(languageCounts, totalReposWithLang);
                        const recentLanguages = processLangs(recentLanguageCounts, recentTotal);

                        const contributions = data.contributions?.contributions || [];
                        const years = data.contributions?.total ? Object.keys(data.contributions.total).sort((a, b) => b.localeCompare(a)) : [];
                        const currentYear = years[0] || "2026";
                        setSelectedYear(currentYear);

                        let allTimeContributions = 0;
                        if (data.contributions?.total) {
                            allTimeContributions = Object.values(data.contributions.total as Record<string, number>)
                                .reduce((acc, curr) => acc + curr, 0);
                        } else {
                            allTimeContributions = contributions.reduce((acc: number, curr: ContributionDay) => acc + curr.count, 0);
                        }

                        setStats({
                            totalContributions: allTimeContributions,
                            followers: data.user.followers,
                            publicRepos: data.user.public_repos,
                            totalStars: stars,
                            topLanguages: sortedLanguages,
                            recentLanguages: recentLanguages,
                            contributionGraph: contributions.filter((d: any) => d.date.startsWith(currentYear)),
                            allContributions: contributions,
                            years: years,
                        });
                    }
                }
            } catch (error) {
                console.error("Failed to load GitHub stats", error);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    const handleYearChange = (year: string) => {
        setSelectedYear(year);
        setStats(prev => ({
            ...prev,
            contributionGraph: prev.allContributions.filter(d => d.date.startsWith(year))
        }));
    };

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
        <section id="activity" className="section-padding bg-muted/20 border-y border-border/50 scroll-mt-20">
            <div className="container-standard">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left: Main Stats & Headline */}
                    <div className="flex-1 space-y-8 w-full">
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

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-6">
                            <div className="p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative group h-full flex flex-col justify-center min-w-0">
                                <div className="absolute top-2 right-2 text-muted-foreground/10 group-hover:text-blue-500/20 transition-colors pointer-events-none">
                                    <GitCommit size={32} />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-foreground relative z-10 truncate">{stats.totalContributions}</div>
                                <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-tight mt-1 relative z-10 font-bold truncate">Commits</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative group h-full flex flex-col justify-center min-w-0">
                                <div className="absolute top-2 right-2 text-muted-foreground/10 group-hover:text-yellow-500/20 transition-colors pointer-events-none">
                                    <Star size={32} />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-foreground relative z-10 truncate">{stats.totalStars}</div>
                                <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-tight mt-1 relative z-10 font-bold truncate">Stars</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative group h-full flex flex-col justify-center min-w-0">
                                <div className="absolute top-2 right-2 text-muted-foreground/10 group-hover:text-purple-500/20 transition-colors pointer-events-none">
                                    <BookMarked size={32} />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-foreground relative z-10 truncate">{stats.publicRepos}</div>
                                <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-tight mt-1 relative z-10 font-bold truncate">Repos</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative group h-full flex flex-col justify-center min-w-0">
                                <div className="absolute top-2 right-2 text-muted-foreground/10 group-hover:text-green-500/20 transition-colors pointer-events-none">
                                    <Users size={32} />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-foreground relative z-10 truncate">{stats.followers}</div>
                                <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-tight mt-1 relative z-10 font-bold truncate">Followers</div>
                            </div>
                        </div>

                        {/* AI Insight Box */}
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-600/5 to-purple-600/5 border border-blue-500/10 min-h-[120px] flex flex-col justify-center">
                            <div className="absolute top-4 right-4 text-blue-500/20">
                                <Sparkles size={40} />
                            </div>
                            <h4 className="flex items-center gap-2 font-black text-blue-600 mb-2 uppercase tracking-tighter text-sm">
                                <BotIcon /> Mukit AI Analysis
                            </h4>
                            <p className="text-sm text-muted-foreground italic leading-relaxed">
                                &quot;{aiInsight || "Analyzing activity patterns..."}&quot;
                            </p>
                        </div>
                    </div>

                    {/* Right: Visual Activity Graph */}
                    <div className="flex-1 w-full bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8">
                        <h3 className="text-sm font-medium mb-6 flex items-center justify-between text-muted-foreground">
                            <div className="flex items-center gap-4">
                                {stats.years.map(year => (
                                    <button
                                        key={year}
                                        onClick={() => handleYearChange(year)}
                                        className={cn(
                                            "px-2 py-0.5 rounded transition-colors",
                                            selectedYear === year ? "bg-primary text-primary-foreground font-bold" : "hover:text-primary"
                                        )}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                            <a href="https://github.com/mukithasan232" target="_blank" className="text-xs hover:text-primary flex items-center gap-1 transition-colors">
                                View Profile <ExternalLink size={12} />
                            </a>
                        </h3>

                        {/* Contribution Grid Container */}
                        <div className="relative mb-8 pt-4 pb-2 border border-border/50 rounded-lg bg-muted/30 p-4 overflow-x-auto custom-scrollbar">
                            <div className="flex gap-2 min-w-max">
                                {/* Day Labels (Left) */}
                                <div className="flex flex-col gap-1 pr-2 text-[10px] text-muted-foreground pt-5">
                                    <div className="h-3">Mon</div>
                                    <div className="h-3"></div>
                                    <div className="h-3">Wed</div>
                                    <div className="h-3"></div>
                                    <div className="h-3">Fri</div>
                                    <div className="h-3"></div>
                                    <div className="h-3"></div>
                                </div>

                                {/* Columns of Weeks */}
                                <div className="flex gap-1" onMouseLeave={() => setHoveredDay(null)}>
                                    {Array.from({ length: Math.ceil(stats.contributionGraph.length / 7) }).map((_, weekIndex) => (
                                        <div key={weekIndex} className="flex flex-col gap-1">
                                            {stats.contributionGraph.slice(weekIndex * 7, (weekIndex * 7) + 7).map((day, dayIndex) => {
                                                const globalIndex = weekIndex * 7 + dayIndex;
                                                return (
                                                    <motion.div
                                                        key={day.date}
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: globalIndex * 0.0005 }}
                                                        onMouseEnter={() => setHoveredDay(globalIndex)}
                                                        className={cn(
                                                            "w-3 h-3 rounded-[2px] transition-colors relative",
                                                            day.level === 0 ? "bg-secondary dark:bg-muted" :
                                                                day.level === 1 ? "bg-[#9be9a8] dark:bg-[#0e4429]" :
                                                                    day.level === 2 ? "bg-[#40c463] dark:bg-[#006d32]" :
                                                                        day.level === 3 ? "bg-[#30a14e] dark:bg-[#26a641]" :
                                                                            "bg-[#216e39] dark:bg-[#39d353]"
                                                        )}
                                                    >
                                                        {hoveredDay === globalIndex && (
                                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover text-popover-foreground text-[10px] rounded shadow-lg border border-border whitespace-nowrap z-50">
                                                                <span className="font-bold">{day.count} contributions</span> on {new Date(day.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Legend (Bottom Right) */}
                            <div className="mt-4 flex items-center justify-end gap-2 text-[10px] text-muted-foreground">
                                <span>Less</span>
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 rounded-[2px] bg-secondary dark:bg-muted" />
                                    <div className="w-3 h-3 rounded-[2px] bg-[#9be9a8] dark:bg-[#0e4429]" />
                                    <div className="w-3 h-3 rounded-[2px] bg-[#40c463] dark:bg-[#006d32]" />
                                    <div className="w-3 h-3 rounded-[2px] bg-[#30a14e] dark:bg-[#26a641]" />
                                    <div className="w-3 h-3 rounded-[2px] bg-[#216e39] dark:bg-[#39d353]" />
                                </div>
                                <span>More</span>
                            </div>
                        </div>

                        {/* Language Breakdown */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                    <Sparkles size={14} className="text-blue-500" /> Recent Focus (90 Days)
                                </h4>
                                <div className="space-y-3">
                                    {stats.recentLanguages.length > 0 ? stats.recentLanguages.map((lang) => (
                                        <div key={lang.name}>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="font-medium">{lang.name}</span>
                                                <span className="text-muted-foreground">{lang.percentage}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${lang.percentage}%` }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className={cn("h-full rounded-full", lang.color)}
                                                />
                                            </div>
                                        </div>
                                    )) : <p className="text-xs text-muted-foreground">No recent activity found.</p>}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Overall Proficiency</h4>
                                <div className="space-y-3">
                                    {stats.topLanguages.map((lang) => (
                                        <div key={lang.name}>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="font-medium">{lang.name}</span>
                                                <span className="text-muted-foreground">{lang.percentage}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
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
