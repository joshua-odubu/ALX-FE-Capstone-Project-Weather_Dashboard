import { BellIcon } from "@heroicons/react/24/outline";

export default function DailySummaryCard() {

  // Simple placeholder text for now — you can improve this later
  const summaryText =
    "Expect mostly cloudy conditions throughout the day with light winds. Temperatures will remain mild.";

  return (
    <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md w-full">

      {/* Header Row */}
      <div className="flex items-center gap-2 mb-3">
        <BellIcon className="w-6 h-6 text-gray-700" />
        <h2 className="text-lg font-semibold text-gray-900">
          Today's Weather Summary
        </h2>
      </div>

      {/* Divider */}
      <div className="border-t border-white/40 my-3"></div>

      {/* Summary Text */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {summaryText}
      </p>
    </div>
  );
}