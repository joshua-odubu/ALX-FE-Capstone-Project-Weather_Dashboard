import { SunIcon } from "@heroicons/react/24/outline";

export default function EyewearRecommendationCard({ uvIndex }) {
  
  const getEyewearAdvice = (uv) => {
    if (uv <= 2) return "UV levels are low. No eyewear needed.";
    if (uv <= 5) return "Moderate UV. Sunglasses recommended.";
    if (uv <= 7) return "High UV. Wear UV-protective sunglasses.";
    if (uv <= 10) return "Very high UV. Strong protection is required.";
    return "Extreme UV levels. Avoid direct sunlight whenever possible.";
  };

  const getBackgroundColor = (uv) => {
    if (uv <= 2) return "bg-blue-200/30";      // low UV
    if (uv <= 5) return "bg-yellow-200/30";    // moderate UV
    if (uv <= 7) return "bg-orange-200/30";    // high UV
    if (uv <= 10) return "bg-red-300/30";      // very high
    return "bg-red-500/30";                    // extreme
  };

  return (
    <div
      className={`${getBackgroundColor(
        uvIndex
      )} backdrop-blur-lg p-6 rounded-2xl shadow-md w-full transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <SunIcon className="w-6 h-6 text-orange-500" />
        <h2 className="text-lg font-semibold text-gray-900">
          Eyewear Recommendation
        </h2>
      </div>

      <div className="border-t border-white/40 my-3"></div>

      <p className="text-gray-700 text-sm leading-relaxed">
        {getEyewearAdvice(uvIndex)}
      </p>

      <p className="mt-2 text-gray-500 text-xs">
        Current UV Index: {uvIndex}
      </p>
    </div>
  );
}