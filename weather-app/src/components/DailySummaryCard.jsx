import { BellIcon } from "@heroicons/react/24/outline";

export default function DailySummaryCard({ condition, temperature, summary }) {
  return (
    <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md w-full">

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <BellIcon className="w-6 h-6 text-gray-700" />
        <h2 className="text-lg font-semibold text-gray-900">
          Today's Weather Summary
        </h2>
      </div>

      {/* Main Summary */}
      <p className="text-gray-800 text-base">
        {summary ? summary : `Expect ${condition.toLowerCase()} with a temperature around ${temperature}°.`}
      </p>

      {/* Divider */}
      <div className="my-4 border-t border-white/40" />

      {/* Optional — Condition + Temperature */}
      <div className="flex justify-between text-sm text-gray-700">
        <span>Condition: <strong>{condition}</strong></span>
        <span>Temp: <strong>{temperature}°</strong></span>
      </div>
    </div>
  );
}