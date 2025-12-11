import { SunIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ClothingRecommendationCard({ temperature }) {
  
  const getClothingAdvice = (temp) => {
    if (temp <= 5) return "It's very cold. Wear a heavy coat, gloves, and a scarf.";
    if (temp <= 12) return "Cool weather. A jacket or hoodie is recommended.";
    if (temp <= 20) return "Mild weather. A light long-sleeve will do.";
    if (temp <= 26) return "Warm weather. T-shirt is fine.";
    return "Hot weather. Wear light clothing and stay hydrated.";
  };

  const getBackgroundColor = (temp) => {
    if (temp <= 5) return "bg-blue-300/30";      // very cold
    if (temp <= 12) return "bg-blue-200/30";     // cold
    if (temp <= 20) return "bg-gray-200/30";     // mild
    if (temp <= 26) return "bg-yellow-200/30";   // warm
    return "bg-red-300/30";                      // hot
  };

  return (
    <div
      className={`${getBackgroundColor(
        temperature
      )} backdrop-blur-lg p-6 rounded-2xl shadow-md w-full transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">👗</span>
        <h2 className="text-lg font-semibold text-gray-900">
          Clothing Recommendation
        </h2>
      </div>

      <div className="border-t border-white/40 my-3"></div>

      <p className="text-gray-700 text-sm leading-relaxed">
        {getClothingAdvice(temperature)}
      </p>

      <p className="mt-2 text-gray-500 text-xs">
        Current temperature: {temperature}°
      </p>
    </div>
  );
}