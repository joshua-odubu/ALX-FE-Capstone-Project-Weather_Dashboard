import { BellIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function DailySummaryCard() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);

    // Mimic loading (e.g., fetching new data)
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md w-full">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BellIcon className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg font-medium text-gray-800">Daily Summary</h2>
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

      {/* Structured Summary */}
      <div className="space-y-2">
        <p className="text-sm text-gray-700 leading-relaxed">
          Today will start partly cloudy with light winds. Afternoon temperatures 
          will rise gradually, with a high of 22°.
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          Expect cooler conditions in the evening with increased cloud cover.
        </p>
      </div>
    </div>
  );
}