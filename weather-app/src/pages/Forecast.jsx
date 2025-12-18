// src/pages/Forecast.jsx
import ForecastCard from "../components/ForecastCard";

export default function Forecast({ location, forecast }) {
  if (!forecast || forecast.length === 0) {
    return (
      <div className="w-full md:w-4/5 lg:w-2/3 mx-auto p-6">
        <p className="text-center text-gray-500">
          Forecast data not available.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-4/5 lg:w-2/3 mx-auto space-y-6 p-6 pb-24">
      
      {/* Header / Location */}
      <div className="bg-white/30 backdrop-blur-md rounded-3xl px-6 py-4 border border-white/40">
        <h1 className="text-lg font-medium text-gray-800">
          7-Day Forecast:{" "}
          <span className="font-normal">
            {location.city}, {location.country}
          </span>
        </h1>
      </div>

      {/* Forecast cards */}
      <div className="space-y-4">
        {forecast.map((day, index) => (
          <ForecastCard key={index} day={day} />
        ))}
      </div>
    </div>
  );
}