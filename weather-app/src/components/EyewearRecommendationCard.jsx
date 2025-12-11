import { SunIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function EyewearCard() {
  // Static UV value for now — later we connect it to the WeatherCard
  const [uvIndex] = useState(6);

  const getEyewearAdvice = (uv) => {
    if (uv <= 2) return "UV levels are low. No eyewear needed.";
    if (uv <= 5) return "Moderate UV. Sunglasses recommended.";
    if (uv <= 7) return "High UV. Wear UV-protective sunglasses.";
    if (uv <= 10) return "Very high UV. Strong UV protection required.";
    return "Extreme UV levels. Avoid direct sun exposure whenever possible.";
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md w-full">

      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <SunIcon className="w-6 h-6 text-orange-500" />
        <h2 className="text-lg font-semibold text-gray-900">
          Eyewear Recommendation
        </h2>
      </div>

      {/* Divider */}
      <div className="border-t border-white/40 my-3"></div>

      {/* Advice */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {getEyewearAdvice(uvIndex)}
      </p>
    </div>
  );
}