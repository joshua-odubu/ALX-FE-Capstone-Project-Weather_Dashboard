// src/pages/Forecast.jsx
import { useLocation } from "react-router-dom";

export default function Forecast() {
  const location = useLocation();
  const dailyForecast = location.state?.dailyForecast || [];

  if (!dailyForecast.length) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">7-Day Forecast</h1>
        <p className="text-gray-600 mt-2">
          No forecast data available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">7-Day Forecast</h1>

      {dailyForecast.map((day, index) => {
        const date = new Date(day.dt * 1000).toLocaleDateString(undefined, {
          weekday: "short"
        });

        return (
          <div
            key={index}
            className="flex justify-between items-center bg-white/30 rounded-xl p-4"
          >
            <span className="font-medium">{date}</span>
            <span>{Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°</span>
            <span className="capitalize text-gray-600">
              {day.weather[0].description}
            </span>
          </div>
        );
      })}
    </div>
  );
}