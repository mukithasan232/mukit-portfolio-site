"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-slate-800/50 animate-pulse"></div>;
  }

  return (
    <div className="relative">
      <button
        aria-label="Toggle theme"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        {theme === "light" ? <Sun size={18} /> : theme === "dark" ? <Moon size={18} /> : <Monitor size={18} />}
      </button>
      
      {/* Dropdown Menu */}
      <div className={`absolute right-0 mt-2 w-32 origin-top-right rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg transition-all z-50 ${isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
        <div className="p-1 flex flex-col gap-1">
          <button
            onClick={() => { setTheme("light"); setIsOpen(false); }}
            className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
              theme === "light" ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }`}
          >
            <Sun size={14} /> Light
          </button>
          <button
            onClick={() => { setTheme("dark"); setIsOpen(false); }}
            className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
              theme === "dark" ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }`}
          >
            <Moon size={14} /> Dark
          </button>
          <button
            onClick={() => { setTheme("system"); setIsOpen(false); }}
            className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
              theme === "system" ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }`}
          >
            <Monitor size={14} /> System
          </button>
        </div>
      </div>
    </div>
  );
}
