import {
  SunIcon,
  CloudIcon,
  BoltIcon,
  BeakerIcon,
  ArrowTrendingUpIcon,
  EyeIcon
} from "@heroicons/react/24/outline";

export default function WeatherCard({
  temperature,
  uvIndex,
  condition,
  feelsLike,
  humidity,
  wind
}) {
  const getWeatherIcon = (condition = "") => {
    const c = condition.toLowerCase();

    if (c.includes("clear")) {
      return <SunIcon className="w-12 h-12 text-yellow-400" />;
    }

    if (c.includes("thunder")) {
      return <BoltIcon className="w-12 h-12 text-purple-600" />;
    }

    if (c.includes("rain") || c.includes("drizzle") || c.includes("shower")) {
      return <CloudIcon className="w-12 h-12 text-blue-500" />;
    }

    if (c.includes("snow")) {
      return <CloudIcon className="w-12 h-12 text-blue-300" />;
    }

    return <CloudIcon className="w-12 h-12 text-gray-500" />;
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-md w-full">
      {/* Icon + Temperature */}
      <div className="flex flex-col items-center mb-4">
        <div className="mb-2">{getWeatherIcon(condition)}</div>

        <p className="text-6xl font-semibold text-gray-900">
          {temperature}°
        </p>

        <p className="text-lg text-gray-700 capitalize">
          {condition}
        </p>

        <p className="text-sm text-gray-500">
          Feels like {feelsLike}°
        </p>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-white/40" />

      {/* Metrics */}
      <div className="flex items-center justify-between text-sm mt-4">
        {/* Humidity */}
        <div className="flex flex-col items-center gap-1">
          <BeakerIcon className="w-5 h-5 text-blue-500" />
          <span className="text-gray-600">Humidity</span>
          <span className="text-gray-900 font-medium">
            {humidity}%
          </span>
        </div>

        {/* Wind */}
        <div className="flex flex-col items-center gap-1">
          <ArrowTrendingUpIcon className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600">Wind</span>
          <span className="text-gray-900 font-medium">
            {wind}
          </span>
        </div>

        {/* UV Index */}
        <div className="flex flex-col items-center gap-1">
          <EyeIcon className="w-5 h-5 text-yellow-500" />
          <span className="text-gray-600">UV Index</span>
          <span className="text-gray-900 font-medium">
            {uvIndex !== null && uvIndex !== undefined ? uvIndex : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}