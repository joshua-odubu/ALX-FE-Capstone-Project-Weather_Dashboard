import {
  IconSun,
  IconCloud,
  IconWind,
  IconDroplet,
  IconUvIndex
} from "@tabler/icons-react";

export default function WeatherCard() {
  return (
    <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-md w-full">

      {/* Weather Icon + Temperature */}
      <div className="flex flex-col items-center">
        <IconSun size={48} className="text-yellow-400 mb-2" />

        <p className="text-6xl font-semibold text-gray-900">22°</p>
        <p className="text-lg text-gray-700">Partly Cloudy</p>
        <p className="text-sm text-gray-500">Feels like 20°</p>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-white/40" />

      {/* Metrics Row */}
      <div className="flex items-center justify-between text-sm mt-4">

        <div className="flex flex-col items-center">
          <IconDroplet size={22} className="text-blue-500 mb-1" />
          <span className="text-gray-600">Humidity</span>
          <span className="text-gray-900 font-medium">65%</span>
        </div>

        <div className="flex flex-col items-center">
          <IconWind size={22} className="text-gray-600 mb-1" />
          <span className="text-gray-600">Wind</span>
          <span className="text-gray-900 font-medium">12 km/h</span>
        </div>

        <div className="flex flex-col items-center">
          <IconUvIndex size={22} className="text-orange-500 mb-1" />
          <span className="text-gray-600">UV Index</span>
          <span className="text-gray-900 font-medium">6</span>
        </div>

      </div>
    </div>
  );
}