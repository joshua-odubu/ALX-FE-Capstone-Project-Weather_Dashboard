// src/pages/Settings.jsx
import { useEffect, useState } from "react";
import SettingsCard from "../components/SettingsCard";
import { SunIcon, MoonIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

const STORAGE_KEY = "weather_theme";

export default function Settings() {
  const [theme, setTheme] = useState("light");

  /* -----------------------------
     Load theme on mount
  ----------------------------- */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  /* -----------------------------
     Apply theme changes
  ----------------------------- */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem(STORAGE_KEY, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(STORAGE_KEY, "light");
    }
  }, [theme]);

  const resetSettings = () => {
    setTheme("light");
    document.documentElement.classList.remove("dark");
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="w-full md:w-4/5 lg:w-2/3 mx-auto space-y-6 p-6">

      <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">
        Settings
      </h2>

      {/* APPEARANCE */}
      <SettingsCard
        icon={
          theme === "dark"
            ? <MoonIcon className="w-6 h-6" />
            : <SunIcon className="w-6 h-6" />
        }
        title="Appearance"
        description="Switch between light and dark mode"
        control={
          <div className="flex rounded-full bg-white/40 dark:bg-black/40 p-1">
            <button
              onClick={() => setTheme("light")}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-all
                ${
                  theme === "light"
                    ? "bg-white text-gray-900 shadow ring-2 ring-yellow-300 scale-105"
                    : "text-gray-600 dark:text-gray-300"
                }`}
            >
              Light
            </button>

            <button
              onClick={() => setTheme("dark")}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-all
                ${
                  theme === "dark"
                    ? "bg-gray-900 text-white shadow ring-2 ring-indigo-400 scale-105"
                    : "text-gray-600 dark:text-gray-300"
                }`}
            >
              Dark
            </button>
          </div>
        }
      />

      {/* RESET */}
      <SettingsCard
        icon={<ArrowPathIcon className="w-6 h-6 text-red-500" />}
        title="Reset Settings"
        description="Restore default preferences"
        control={
          <button
            onClick={resetSettings}
            className="px-4 py-1 text-sm rounded-full bg-red-500 text-white hover:bg-red-600 transition"
          >
            Reset
          </button>
        }
      />

    </div>
  );
}