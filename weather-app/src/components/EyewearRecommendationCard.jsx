import { IconSun } from "@tabler/icons-react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function EyewearRecommendationCard() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md w-full">

      {/* Header Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IconSun size={24} className="text-yellow-500" />
          <h2 className="text-lg font-medium text-gray-800">Eyewear Recommendation</h2>
        </div>

        <button
          onClick={handleRefresh}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition shadow-sm"
        >
          <ArrowPathIcon
            className={`w-5 h-5 transition-transform ${
              refreshing ? "animate-spin" : ""
            }`}
          />
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-white/40 my-4"></div>

      {/* Recommendation Text */}
      <div className="space-y-2">
        <p className="text-gray-700 text-sm leading-relaxed">
          UV levels are moderate today. Standard sunglasses or photochromic lenses are recommended.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          If you’ll be outside for long periods, consider UV-protective eyewear.
        </p>
      </div>
    </div>
  );
}