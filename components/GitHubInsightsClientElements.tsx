"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface GitHubInsightsClientProps {
    years: string[];
    allContributions: ContributionDay[];
}

export function GitHubActivityGraph({ years, allContributions }: GitHubInsightsClientProps) {
    const [selectedYear, setSelectedYear] = useState<string>(years[0] || "2026");
    const [hoveredDay, setHoveredDay] = useState<number | null>(null);

    const contributionGraph = allContributions.filter((d) => d.date.startsWith(selectedYear));

    const levelColorLight = (level: number) => {
        if (level === 0) return "rgba(99,102,241,0.08)";
        if (level === 1) return "rgba(99,102,241,0.3)";
        if (level === 2) return "rgba(99,102,241,0.55)";
        if (level === 3) return "rgba(99,102,241,0.8)";
        return "#4f46e5"; // Indigo-600
    };

    const levelColorDark = (level: number) => {
        if (level === 0) return "rgba(99,102,241,0.08)";
        if (level === 1) return "rgba(99,102,241,0.25)";
        if (level === 2) return "rgba(99,102,241,0.45)";
        if (level === 3) return "rgba(99,102,241,0.7)";
        return "#6366f1"; // Indigo-500
    };

    return (
        <div className="mb-7">
            <div className="flex gap-2 items-center mb-4 flex-wrap">
                <span className="text-[14px] font-bold text-slate-900 dark:text-[#e2e8f0] flex-1">
                    Contribution Graph
                </span>
                {years.map((year) => (
                    <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`text-[12px] px-3 py-1 rounded-full cursor-pointer transition-all duration-200 font-semibold ${
                            selectedYear === year
                                ? "border border-indigo-600 dark:border-indigo-500/60 bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300"
                                : "border border-slate-200 dark:border-indigo-500/15 bg-white dark:bg-transparent text-slate-600 dark:text-[#475569] hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 shadow-sm dark:shadow-none"
                        }`}
                    >
                        {year}
                    </button>
                ))}
                <a
                    href="https://github.com/mukithasan232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-[#6366f1] no-underline text-[13px] flex items-center gap-1 font-medium hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                    Profile <ExternalLink size={12} />
                </a>
            </div>

            <div className="overflow-x-auto pb-2">
                <div
                    className="flex gap-[3px] min-w-max"
                    onMouseLeave={() => setHoveredDay(null)}
                >
                    {Array.from({ length: Math.ceil(contributionGraph.length / 7) }).map((_, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-[3px]">
                            {contributionGraph.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, dayIndex) => {
                                const globalIndex = weekIndex * 7 + dayIndex;
                                return (
                                    <div
                                        key={day.date}
                                        onMouseEnter={() => setHoveredDay(globalIndex)}
                                        title={`${day.count} contributions on ${day.date}`}
                                        className={`w-3 h-3 rounded-[3px] shrink-0 transition-all duration-100 ${
                                            hoveredDay === globalIndex 
                                                ? "border border-indigo-600 dark:border-indigo-500/80 scale-110 shadow-sm" 
                                                : "border border-transparent"
                                        }`}
                                        style={{
                                            backgroundColor: "var(--tw-dark) ? transparent : transparent" // this is a hack to force react to update styles via class
                                        }}
                                    >
                                        <div className="w-full h-full rounded-[2px] block dark:hidden" style={{ background: levelColorLight(day.level) }} />
                                        <div className="w-full h-full rounded-[2px] hidden dark:block" style={{ background: levelColorDark(day.level) }} />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                {/* Legend */}
                <div className="mt-2 flex items-center gap-1.5 text-[12px] text-slate-500 dark:text-[#475569]">
                    <span>Less</span>
                    {[0, 1, 2, 3, 4].map((l) => (
                        <div
                            key={l}
                            className="w-3 h-3 rounded-[3px]"
                        >
                            <div className="w-full h-full rounded-[3px] block dark:hidden" style={{ background: levelColorLight(l) }} />
                            <div className="w-full h-full rounded-[3px] hidden dark:block" style={{ background: levelColorDark(l) }} />
                        </div>
                    ))}
                    <span>More</span>
                </div>
            </div>
        </div>
    );
}
