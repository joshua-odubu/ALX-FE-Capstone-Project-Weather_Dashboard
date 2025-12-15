// src/pages/Forecast.jsx
import { useEffect, useState } from "react";
import ForecastCard from "../components/ForecastCard";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

export default function Forecast() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        // Default: London
        const geoRes = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=${API_KEY}`
        );
        const geoData = await geoRes.json();

        const { lat, lon } = geoData[0];

        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        const weatherData = await weatherRes.json();

        setForecast(weatherData.daily.slice(0, 7));
      } catch (err) {
        console.error("Forecast fetch failed:", err);
      }
    };

    fetchForecast();
  }, []);

  const formatDay = (dt, index) => {
    if (index === 0) return "Today";
    return new Date(dt * 1000).toLocaleDateString("en-GB", {
      weekday: "short"
    });
  };

  const formatDate = (dt) =>
    new Date(dt * 1000).toLocaleDateString("en-GB", {
      month: "short",
      day: "numeric"
    });

  return (
    <div className="w-full md:w-4/5 lg:w-2/3 mx-auto px-6 py-6 space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold">7-Day Forecast</h1>
        <p className="text-sm text-gray-500">Extended weather outlook</p>
      </div>

      {/* Forecast List */}
      {forecast.map((day, index) => (
        <ForecastCard
          key={day.dt}
          day={formatDay(day.dt, index)}
          date={formatDate(day.dt)}
          tempMax={Math.round(day.temp.max)}
          tempMin={Math.round(day.temp.min)}
          condition={day.weather[0].main}
          uv={Math.round(day.uvi)}
        />
      ))}
    </div>
  );
}