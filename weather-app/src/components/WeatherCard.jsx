import { useState } from "react";
import {
  SunIcon,
  CloudIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

export default function WeatherCard() {
  const [condition, setCondition] = useState("Partly Cloudy");
  const [temperature, setTemperature] = useState(22);
  const [feelsLike, setFeelsLike] = useState(20);
  const [humidity, setHumidity] = useState(65);
  const [wind, setWind] = useState("12 km/h");
  const [uvIndex, setUvIndex] = useState(6);

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "clear":
      case "sunny":
        return <SunIcon className="w-12 h-12 text-yellow-400" />;

      case "partly cloudy":
        return (
          <div className="relative">
            <CloudIcon className="w-12 h-12 text-gray-400" />
            <SunIcon className="w-5 h-5 text-yellow-400 absolute -top-1 -right-1" />
          </div>
        );

      case "cloudy":
        return <CloudIcon className="w-12 h-12 text-gray-500" />;

      case "rain":
      case "showers":
      case "light rain":
        return <CloudIcon className="w-12 h-12 text-blue-500" />;

      case "thunderstorm":
        return <BoltIcon className="w-12 h-12 text-purple-600" />;

      case "snow":
        return <CloudIcon className="w-12 h-12 text-blue-300" />;

      case "mist":
      case "fog":
      case "haze":
        return <CloudIcon className="w-12 h-12 text-gray-400" />;

      default:
        return <CloudIcon className="w-12 h-12 text-gray-500" />;
    }
  };

  const handleRefresh = () => {
    const conditions = [
      "Clear",
      "Sunny",
      "Partly Cloudy",
      "Cloudy",
      "Rain",
      "Thunderstorm",
      "Mist",
      "Haze",
      "Snow"
    ];

    const randomCondition =
      conditions[Math.floor(Math.random() * conditions.length)];

    setCondition(randomCondition);
    setTemperature(Math.floor(Math.random() * 15) + 15);
    setFeelsLike(Math.floor(Math.random() * 15) + 15);
    setHumidity(Math.floor(Math.random() * 60) + 30);
    setWind(`${Math.floor(Math.random() * 15) + 5} km/h`);
    setUvIndex(Math.floor(Math.random() * 10));
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-md w-full">
      <div className="flex flex-col items-center">
        <div className="mb-2">{getWeatherIcon(condition)}</div>

        <p className="text-6xl font-semibold text-gray-900">{temperature}°</p>
        <p className="text-lg text-gray-700">{condition}</p>
        <p className="text-sm text-gray-500">Feels like {feelsLike}°</p>

        <button
          onClick={handleRefresh}
          className="mt-3 px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition shadow"
        >
          Refresh
        </button>
      </div>

      <div className="my-6 border-t border-white/40" />

      <div className="flex items-center justify-between text-sm mt-4">
        <div className="flex flex-col items-center">
          <span className="text-gray-600">Humidity</span>
          <span className="text-gray-900 font-medium">{humidity}%</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-gray-600">Wind</span>
          <span className="text-gray-900 font-medium">{wind}</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-gray-600">UV Index</span>
          <span className="text-gray-900 font-medium">{uvIndex}</span>
        </div>
      </div>
    </div>
  );
}