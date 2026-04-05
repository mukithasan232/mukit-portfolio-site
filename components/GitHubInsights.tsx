"use client";

import React, { useState, useEffect } from "react";
import { GitCommit, Star, ExternalLink, Users, BookMarked } from "lucide-react";
import { fetchGitHubData } from "@/lib/github";

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface GitHubRepo {
    stargazers_count: number;
    language: string | null;
    updated_at?: string;
    pushed_at?: string;
}

export function GitHubInsights() {
    const [hoveredDay, setHoveredDay] = useState<number | null>(null);
    const [selectedYear, setSelectedYear] = useState<string>("2026");
    const [loading, setLoading] = useState(true);

    const [stats, setStats] = useState({
        totalContributions: 0,
        followers: 0,
        publicRepos: 0,
        totalStars: 0,
        topLanguages: [] as { name: string; percentage: number }[],
        contributionGraph: [] as ContributionDay[],
        allContributions: [] as ContributionDay[],
        years: [] as string[],
    });

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
        return colors[lang] || "#808080";
    };

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchGitHubData("mukithasan232");
                if (data) {
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

                        const sortedLanguages = Object.entries(languageCounts)
                            .sort(([, a], [, b]) => b - a)
                            .slice(0, 5)
                            .map(([name, count]) => ({
                                name,
                                percentage: Math.round((count / totalReposWithLang) * 100),
                            }));

                        const contributions = data.contributions?.contributions || [];
                        const years = data.contributions?.total
                            ? Object.keys(data.contributions.total).sort((a, b) => b.localeCompare(a))
                            : [];
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
                            contributionGraph: contributions.filter((d: ContributionDay) => d.date.startsWith(currentYear)),
                            allContributions: contributions,
                            years,
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
        setStats((prev) => ({
            ...prev,
            contributionGraph: prev.allContributions.filter((d) => d.date.startsWith(year)),
        }));
    };

    const levelColor = (level: number) => {
        if (level === 0) return "#d4d0c8";
        if (level === 1) return "#9be9a8";
        if (level === 2) return "#40c463";
        if (level === 3) return "#30a14e";
        return "#216e39";
    };

    return (
        <section id="activity" className="section-padding font-sans scroll-mt-20" style={{ background: "#d4d0c8" }}>
            <div className="container-standard">
                <div className="win-panel font-sans" style={{ maxWidth: 860, margin: "0 auto" }}>
                    <div className="win-titlebar font-sans">
                        <span style={{ fontSize: 11, fontWeight: "bold" }}>
                            <GitCommit size={11} style={{ display: "inline", marginRight: 4 }} />
                            GitHub Activity Monitor
                        </span>
                        <div style={{ display: "flex", gap: 2 }}>
                            <button className="win-titlebar-btn" aria-label="Minimize">_</button>
                            <button className="win-titlebar-btn" aria-label="Maximize">□</button>
                            <button className="win-titlebar-btn" aria-label="Close">✕</button>
                        </div>
                    </div>
                    <div className="win-menubar font-sans">
                        {["File", "View", "Tools", "Help"].map((m) => (
                            <span key={m} className="win-menubar-item">{m}</span>
                        ))}
                    </div>

                    {loading ? (
                        <div style={{ padding: 24, textAlign: "center", fontSize: 11, color: "#444", background: "#d4d0c8" }}>
                            Loading GitHub data...
                        </div>
                    ) : (
                        <div style={{ padding: 16, background: "#d4d0c8" }}>
                            {/* Stats row */}
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 8, marginBottom: 16 }}>
                                {[
                                    { icon: <GitCommit size={14} />, value: stats.totalContributions, label: "Commits" },
                                    { icon: <Star size={14} />, value: stats.totalStars, label: "Stars" },
                                    { icon: <BookMarked size={14} />, value: stats.publicRepos, label: "Repos" },
                                    { icon: <Users size={14} />, value: stats.followers, label: "Followers" },
                                ].map(({ icon, value, label }) => (
                                    <div key={label} className="win-inset font-sans" style={{ padding: "8px 10px", background: "#fff", textAlign: "center" }}>
                                        <div style={{ display: "flex", justifyContent: "center", color: "#000080", marginBottom: 2 }}>{icon}</div>
                                        <div style={{ fontWeight: "bold", fontSize: 20, fontFamily: "Courier New, monospace", color: "#000080" }}>{value}</div>
                                        <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 1, color: "#808080" }}>{label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Contribution graph */}
                            <div className="win-groupbox font-sans" style={{ marginBottom: 12 }}>
                                <span className="win-groupbox-label">Contribution Graph</span>
                                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                                    {stats.years.map((year) => (
                                        <button
                                            key={year}
                                            className="win-btn font-sans"
                                            onClick={() => handleYearChange(year)}
                                            style={{
                                                fontSize: 10,
                                                padding: "1px 8px",
                                                background: selectedYear === year ? "#000080" : "#d4d0c8",
                                                color: selectedYear === year ? "#fff" : "#000",
                                            }}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                    <a
                                        href="https://github.com/mukithasan232"
                                        target="_blank"
                                        style={{ marginLeft: "auto", color: "#0000ff", textDecoration: "underline", fontSize: 10, display: "flex", alignItems: "center", gap: 3 }}
                                    >
                                        View Profile <ExternalLink size={9} />
                                    </a>
                                </div>

                                <div
                                    className="win-inset font-sans"
                                    style={{ background: "#fff", padding: 8, overflowX: "auto" }}
                                    onMouseLeave={() => setHoveredDay(null)}
                                >
                                    <div style={{ display: "flex", gap: 2, minWidth: "max-content" }}>
                                        {Array.from({ length: Math.ceil(stats.contributionGraph.length / 7) }).map((_, weekIndex) => (
                                            <div key={weekIndex} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                                {stats.contributionGraph.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, dayIndex) => {
                                                    const globalIndex = weekIndex * 7 + dayIndex;
                                                    return (
                                                        <div
                                                            key={day.date}
                                                            onMouseEnter={() => setHoveredDay(globalIndex)}
                                                            title={`${day.count} contributions on ${day.date}`}
                                                            style={{
                                                                width: 10,
                                                                height: 10,
                                                                background: levelColor(day.level),
                                                                border: hoveredDay === globalIndex ? "1px solid #000080" : "1px solid transparent",
                                                                cursor: "default",
                                                                flexShrink: 0,
                                                            }}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                    {/* Legend */}
                                    <div style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 4, fontSize: 9, color: "#808080" }}>
                                        <span>Less</span>
                                        {[0, 1, 2, 3, 4].map((l) => (
                                            <div key={l} style={{ width: 10, height: 10, background: levelColor(l), border: "1px solid #808080" }} />
                                        ))}
                                        <span>More</span>
                                    </div>
                                </div>
                            </div>

                            {/* Languages */}
                            {stats.topLanguages.length > 0 && (
                                <div className="win-groupbox font-sans">
                                    <span className="win-groupbox-label">Top Languages</span>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                        {stats.topLanguages.map((lang) => (
                                            <div key={lang.name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11 }}>
                                                <span style={{ width: 80, flexShrink: 0 }}>{lang.name}</span>
                                                <div className="win-inset font-sans" style={{ flex: 1, height: 14, overflow: "hidden", padding: 0 }}>
                                                    <div
                                                        style={{
                                                            width: `${lang.percentage}%`,
                                                            height: "100%",
                                                            background: getLanguageColor(lang.name),
                                                        }}
                                                    />
                                                </div>
                                                <span style={{ width: 32, textAlign: "right", color: "#808080" }}>{lang.percentage}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="win-statusbar font-sans">
                        <div className="win-inset font-sans" style={{ flex: 1, padding: "1px 6px", fontSize: 10 }}>
                            {loading ? "Loading..." : `${stats.totalContributions} total contributions`}
                        </div>
                        <div className="win-inset font-sans" style={{ padding: "1px 6px", fontSize: 10 }}>
                            github.com/mukithasan232
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
