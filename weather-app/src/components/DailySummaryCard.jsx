import {
  SunIcon,
  CloudIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

export default function DailySummaryCard({
  condition = "Partly Cloudy",
  temperature = 20
}) {
  const getIcon = (cond) => {
    const c = (cond || "").toLowerCase();

    if (c.includes("sun")) return <SunIcon className="w-6 h-6 text-yellow-500" />;
    if (c.includes("clear")) return <SunIcon className="w-6 h-6 text-yellow-500" />;
    if (c.includes("cloud")) return <CloudIcon className="w-6 h-6 text-gray-500" />;
    if (c.includes("rain")) return <CloudIcon className="w-6 h-6 text-blue-500" />;
    if (c.includes("storm")) return <BoltIcon className="w-6 h-6 text-purple-600" />;
    if (c.includes("mist") || c.includes("fog") || c.includes("haze")) {
      return <CloudIcon className="w-6 h-6 text-gray-400" />;
    }

    return <CloudIcon className="w-6 h-6 text-gray-500" />;
  };

  const getMorningSummary = () => {
    if (temperature < 12) return "A cool morning with calm skies.";
    if (condition.includes("Cloud")) return "Cloudy but calm start to the day.";
    return "Clear and comfortable morning expected.";
  };

  const getAfternoonSummary = () => {
    if (temperature > 25) return "A warm afternoon with bright conditions.";
    if (condition.includes("Rain")) return "Possibility of light showers later today.";
    return "Mild afternoon with stable weather.";
  };

  const getEveningSummary = () => {
    if (temperature < 15) return "A cooler evening is expected.";
    if (condition.includes("Storm")) return "Evening storms could develop.";
    return "A mild, pleasant evening ahead.";
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md w-full">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Daily Weather Summary
      </h2>

      {/* Timeline */}
      <div className="space-y-6">

        {/* Morning */}
        <div className="flex items-start gap-3">
          {getIcon(condition)}
          <div>
            <p className="text-sm font-semibold text-gray-900">Morning</p>
            <p className="text-sm text-gray-700">{getMorningSummary()}</p>
          </div>
        </div>

        <div className="border-t border-white/40" />

        {/* Afternoon */}
        <div className="flex items-start gap-3">
          {getIcon(condition)}
          <div>
            <p className="text-sm font-semibold text-gray-900">Afternoon</p>
            <p className="text-sm text-gray-700">{getAfternoonSummary()}</p>
          </div>
        </div>

        <div className="border-t border-white/40" />

        {/* Evening */}
        <div className="flex items-start gap-3">
          {getIcon(condition)}
          <div>
            <p className="text-sm font-semibold text-gray-900">Evening</p>
            <p className="text-sm text-gray-700">{getEveningSummary()}</p>
          </div>
        </div>

      </div>
    </div>
  );
}