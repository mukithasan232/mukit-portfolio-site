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
        return colors[lang] || "#6366f1";
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
        if (level === 0) return "rgba(99,102,241,0.08)";
        if (level === 1) return "rgba(99,102,241,0.25)";
        if (level === 2) return "rgba(99,102,241,0.45)";
        if (level === 3) return "rgba(99,102,241,0.7)";
        return "#6366f1";
    };

    return (
        <section
            id="activity"
            className="section-padding"
            style={{
                background: "linear-gradient(180deg, #0a0f1e 0%, #080d1a 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient glow */}
            <div
                className="glow-blob glow-blob-blue"
                style={{ width: 400, height: 400, left: "10%", top: "30%", opacity: 0.08 }}
            />

            <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                {/* Section header */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span className="section-label">Open Source</span>
                    <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
                        GitHub{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Activity
                        </span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Real-time GitHub insights and contribution graph.
                    </p>
                </div>

                {loading ? (
                    <div
                        style={{
                            textAlign: "center",
                            padding: 60,
                            color: "#475569",
                            fontSize: 15,
                        }}
                    >
                        <div
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                border: "3px solid rgba(99,102,241,0.2)",
                                borderTopColor: "#6366f1",
                                animation: "spin 0.8s linear infinite",
                                margin: "0 auto 16px",
                            }}
                        />
                        Loading GitHub activity...
                    </div>
                ) : (
                    <div
                        style={{
                            background: "rgba(15, 23, 42, 0.7)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(99, 102, 241, 0.15)",
                            borderRadius: 24,
                            padding: "32px",
                            maxWidth: 900,
                            margin: "0 auto",
                        }}
                    >
                        {/* Stats row */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                                gap: 12,
                                marginBottom: 32,
                            }}
                        >
                            {[
                                { icon: <GitCommit size={18} />, value: stats.totalContributions, label: "Commits" },
                                { icon: <Star size={18} />, value: stats.totalStars, label: "Stars" },
                                { icon: <BookMarked size={18} />, value: stats.publicRepos, label: "Repos" },
                                { icon: <Users size={18} />, value: stats.followers, label: "Followers" },
                            ].map(({ icon, value, label }) => (
                                <div
                                    key={label}
                                    style={{
                                        background: "rgba(99,102,241,0.06)",
                                        border: "1px solid rgba(99,102,241,0.12)",
                                        borderRadius: 14,
                                        padding: "18px 16px",
                                        textAlign: "center",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.35)";
                                        (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.12)";
                                        (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.06)";
                                    }}
                                >
                                    <div style={{ color: "#6366f1", display: "flex", justifyContent: "center", marginBottom: 8 }}>
                                        {icon}
                                    </div>
                                    <div
                                        style={{
                                            fontWeight: 800,
                                            fontSize: 28,
                                            fontFamily: "'Outfit', sans-serif",
                                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                            lineHeight: 1,
                                            marginBottom: 4,
                                        }}
                                    >
                                        {value}
                                    </div>
                                    <div style={{ fontSize: 12, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
                                        {label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contribution graph */}
                        <div style={{ marginBottom: 28 }}>
                            <div
                                style={{
                                    display: "flex",
                                    gap: 8,
                                    alignItems: "center",
                                    marginBottom: 16,
                                    flexWrap: "wrap",
                                }}
                            >
                                <span style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", flex: 1 }}>
                                    Contribution Graph
                                </span>
                                {stats.years.map((year) => (
                                    <button
                                        key={year}
                                        onClick={() => handleYearChange(year)}
                                        style={{
                                            fontSize: 12,
                                            padding: "4px 12px",
                                            borderRadius: 20,
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                            border: selectedYear === year
                                                ? "1px solid rgba(99,102,241,0.6)"
                                                : "1px solid rgba(99,102,241,0.15)",
                                            background: selectedYear === year
                                                ? "rgba(99,102,241,0.15)"
                                                : "transparent",
                                            color: selectedYear === year ? "#a5b4fc" : "#475569",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {year}
                                    </button>
                                ))}
                                <a
                                    href="https://github.com/mukithasan232"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#6366f1",
                                        textDecoration: "none",
                                        fontSize: 13,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,
                                        fontWeight: 500,
                                    }}
                                >
                                    Profile <ExternalLink size={12} />
                                </a>
                            </div>

                            <div style={{ overflowX: "auto", paddingBottom: 8 }}>
                                <div
                                    style={{ display: "flex", gap: 3, minWidth: "max-content" }}
                                    onMouseLeave={() => setHoveredDay(null)}
                                >
                                    {Array.from({ length: Math.ceil(stats.contributionGraph.length / 7) }).map((_, weekIndex) => (
                                        <div key={weekIndex} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                                            {stats.contributionGraph.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, dayIndex) => {
                                                const globalIndex = weekIndex * 7 + dayIndex;
                                                return (
                                                    <div
                                                        key={day.date}
                                                        onMouseEnter={() => setHoveredDay(globalIndex)}
                                                        title={`${day.count} contributions on ${day.date}`}
                                                        style={{
                                                            width: 12,
                                                            height: 12,
                                                            borderRadius: 3,
                                                            background: levelColor(day.level),
                                                            border: hoveredDay === globalIndex
                                                                ? "1px solid rgba(99,102,241,0.8)"
                                                                : "1px solid transparent",
                                                            cursor: "default",
                                                            flexShrink: 0,
                                                            transition: "all 0.1s ease",
                                                        }}
                                                    />
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                                {/* Legend */}
                                <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#475569" }}>
                                    <span>Less</span>
                                    {[0, 1, 2, 3, 4].map((l) => (
                                        <div
                                            key={l}
                                            style={{
                                                width: 12,
                                                height: 12,
                                                borderRadius: 3,
                                                background: levelColor(l),
                                            }}
                                        />
                                    ))}
                                    <span>More</span>
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        {stats.topLanguages.length > 0 && (
                            <div>
                                <div style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", marginBottom: 16 }}>
                                    Top Languages
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                    {stats.topLanguages.map((lang) => (
                                        <div key={lang.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                            <span style={{ width: 90, fontSize: 13, color: "#94a3b8", fontWeight: 500, flexShrink: 0 }}>
                                                {lang.name}
                                            </span>
                                            <div className="skill-bar-track" style={{ flex: 1 }}>
                                                <div
                                                    className="skill-bar-fill"
                                                    style={{
                                                        width: `${lang.percentage}%`,
                                                        background: getLanguageColor(lang.name),
                                                    }}
                                                />
                                            </div>
                                            <span style={{ fontSize: 13, color: "#6366f1", fontWeight: 600, width: 36, textAlign: "right" }}>
                                                {lang.percentage}%
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <style jsx global>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}
