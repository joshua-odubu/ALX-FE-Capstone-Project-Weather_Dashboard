// src/pages/Settings.jsx
import { useEffect, useState } from "react";
import SettingsCard from "../components/SettingsCard";
import {
  SunIcon,
  MoonIcon,
  ArrowPathIcon,
  FireIcon
} from "@heroicons/react/24/outline";

const THEME_KEY = "weather_theme";
const UNIT_KEY = "weather_unit";

export default function Settings() {
  /* -----------------------------
     State
  ----------------------------- */
  const [theme, setTheme] = useState("light");
  const [unit, setUnit] = useState("metric"); // ✅ ADDED

  /* -----------------------------
     Load settings on mount
  ----------------------------- */
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const savedUnit = localStorage.getItem(UNIT_KEY);

    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }

    if (savedUnit === "metric" || savedUnit === "imperial") {
      setUnit(savedUnit);
    }
  }, []);

  /* -----------------------------
     Persist theme
  ----------------------------- */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }
  }, [theme]);

  /* -----------------------------
     Persist unit
  ----------------------------- */
  useEffect(() => {
    localStorage.setItem(UNIT_KEY, unit);
  }, [unit]);

  /* -----------------------------
     Reset
  ----------------------------- */
  const resetSettings = () => {
    setTheme("light");
    setUnit("metric");
    document.documentElement.classList.remove("dark");
    localStorage.removeItem(THEME_KEY);
    localStorage.removeItem(UNIT_KEY);
  };

  return (
    <div className="w-full md:w-4/5 lg:w-2/3 mx-auto space-y-6 p-6">
      <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">
        Settings
      </h2>

      {/* TEMPERATURE UNIT */}
      <SettingsCard
        icon={<FireIcon className="w-6 h-6" />}
        title="Temperature Unit"
        description="Choose how temperature is displayed"
        control={
          <div className="flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
            <button
              type="button"
              onClick={() => setUnit("metric")}
              className={`px-4 py-1 text-sm rounded-full transition-all
                ${
                  unit === "metric"
                    ? "bg-gray-900 text-white shadow ring-2 ring-blue-500"
                    : "text-gray-600 dark:text-gray-300"
                }`}
            >
              °C
            </button>

            <button
              type="button"
              onClick={() => setUnit("imperial")}
              className={`px-4 py-1 text-sm rounded-full transition-all
                ${
                  unit === "imperial"
                    ? "bg-gray-900 text-white shadow ring-2 ring-blue-500"
                    : "text-gray-600 dark:text-gray-300"
                }`}
            >
              °F
            </button>
          </div>
        }
      />

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
              type="button"
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
              type="button"
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
            type="button"
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