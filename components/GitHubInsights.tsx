import React from "react";
import { GitCommit, Star, Users, BookMarked } from "lucide-react";
import { fetchGitHubData } from "@/lib/github";
import { GitHubActivityGraph } from "./GitHubInsightsClientElements";

interface GitHubRepo {
    stargazers_count: number;
    language: string | null;
    updated_at?: string;
    pushed_at?: string;
}

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

export async function GitHubInsights() {
    const getLanguageColor = (lang: string) => {
        const colors: Record<string, string> = {
            TypeScript: "#3178c6",
            JavaScript: "#f1e05a",
            HTML: "#e34c26",
            CSS: "#563d7c",
            Python: "#3572A5",
            Java: "#b07219",
            Go: "#00ADD8",
            Rust: "#dea584",
        };
        return colors[lang] || "#6366f1";
    };

    let totalContributions = 0;
    let followers = 0;
    let publicRepos = 0;
    let totalStars = 0;
    let topLanguages: { name: string; percentage: number }[] = [];
    let allContributions: ContributionDay[] = [];
    let years: string[] = [];

    try {
        const data = await fetchGitHubData("mukithasan232");
        if (data) {
            followers = data.user.followers || 0;
            publicRepos = data.user.public_repos || 0;

            const languageCounts: Record<string, number> = {};
            let totalReposWithLang = 0;

            if (Array.isArray(data.repos)) {
                data.repos.forEach((repo: GitHubRepo) => {
                    totalStars += repo.stargazers_count || 0;
                    if (repo.language) {
                        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
                        totalReposWithLang++;
                    }
                });

                topLanguages = Object.entries(languageCounts)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 5)
                    .map(([name, count]) => ({
                        name,
                        percentage: Math.round((count / totalReposWithLang) * 100),
                    }));
            }

            allContributions = data.contributions?.contributions || [];
            years = data.contributions?.total
                ? Object.keys(data.contributions.total).sort((a, b) => b.localeCompare(a))
                : [];

            if (data.contributions?.total) {
                totalContributions = Object.values(data.contributions.total as Record<string, number>)
                    .reduce((acc, curr) => acc + curr, 0);
            } else {
                totalContributions = allContributions.reduce((acc: number, curr: ContributionDay) => acc + curr.count, 0);
            }
        }
    } catch (error) {
        console.error("Failed to fetch GitHub stats on the server", error);
    }

    return (
        <section
            id="activity"
            className="section-padding w-full relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#0a0f1e] dark:to-[#080d1a] transition-colors duration-300"
        >
            {/* Ambient glow - Only visible in dark mode */}
            <div className="absolute left-[10%] top-[30%] w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-[0.08] bg-indigo-500/30 transition-opacity duration-300" />

            <div className="container-standard relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-[13px] font-semibold tracking-[3px] uppercase text-indigo-600 dark:text-indigo-400 mb-3 block">
                        Open Source
                    </span>
                    <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15] mx-auto">
                        GitHub{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                            Activity
                        </span>
                    </h2>
                    <p className="text-[17px] text-slate-600 dark:text-[#94a3b8] max-w-[560px] leading-[1.7] mx-auto">
                        Real-time GitHub insights and contribution graph.
                    </p>
                </div>

                <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-indigo-500/15 rounded-3xl p-6 sm:p-8 max-w-[900px] mx-auto shadow-sm dark:shadow-none transition-colors duration-300">
                    {/* Stats row */}
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3 mb-8">
                        {[
                            { icon: <GitCommit size={18} />, value: totalContributions, label: "Commits" },
                            { icon: <Star size={18} />, value: totalStars, label: "Stars" },
                            { icon: <BookMarked size={18} />, value: publicRepos, label: "Repos" },
                            { icon: <Users size={18} />, value: followers, label: "Followers" },
                        ].map(({ icon, value, label }) => (
                            <div
                                key={label}
                                className="group bg-indigo-50/50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10 rounded-2xl p-5 text-center transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-500/20"
                            >
                                <div className="text-indigo-600 dark:text-indigo-400 flex justify-center mb-2.5">
                                    {icon}
                                </div>
                                <div className="font-extrabold text-[28px] font-outfit leading-none mb-1 bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                                    {value}
                                </div>
                                <div className="text-[12px] text-slate-500 dark:text-[#475569] font-bold uppercase tracking-widest">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Interactive Contribution Graph */}
                    <GitHubActivityGraph years={years} allContributions={allContributions} />

                    {/* Languages */}
                    {topLanguages.length > 0 && (
                        <div>
                            <div className="text-[14px] font-bold text-slate-900 dark:text-[#e2e8f0] mb-4">
                                Top Languages
                            </div>
                            <div className="flex flex-col gap-3">
                                {topLanguages.map((lang) => (
                                    <div key={lang.name} className="flex items-center gap-3">
                                        <span className="w-[90px] text-[13px] text-slate-600 dark:text-[#94a3b8] font-medium shrink-0">
                                            {lang.name}
                                        </span>
                                        <div className="h-1.5 rounded-full overflow-hidden bg-slate-200 dark:bg-white/5 flex-1">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${lang.percentage}%`,
                                                    background: getLanguageColor(lang.name),
                                                }}
                                            />
                                        </div>
                                        <span className="text-[13px] text-indigo-600 dark:text-indigo-400 font-bold w-[36px] text-right">
                                            {lang.percentage}%
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
