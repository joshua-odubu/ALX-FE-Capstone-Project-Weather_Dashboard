// src/components/ForecastCard.jsx

const getIcon = (condition) => {
  const text = condition.toLowerCase();

  if (text.includes("rain")) return "🌧️";
  if (text.includes("cloud")) return "☁️";
  if (text.includes("clear") || text.includes("sun")) return "☀️";

  return "🌤️";
};

export default function ForecastCard({
  day,
  date,
  tempMax,
  tempMin,
  condition,
  uv
}) {
  return (
    <div className="flex items-center justify-between bg-white rounded-2xl shadow-sm px-6 py-4">
      
      {/* Left */}
      <div>
        <p className="font-medium text-gray-900">{day}</p>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-sm text-gray-600 mt-1 capitalize">
          {condition}
        </p>
      </div>

      {/* Middle */}
      <div className="text-lg font-semibold text-gray-900">
        {tempMax}°{" "}
        <span className="text-gray-400 font-normal">
          / {tempMin}°
        </span>
      </div>

      {/* Right */}
      <div className="flex flex-col items-center text-gray-500 text-lg">
        <span>{getIcon(condition)}</span>
        <span className="text-xs mt-1">UV {uv}</span>
      </div>

    </div>
  );
}