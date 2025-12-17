// src/pages/Forecast.jsx
import ForecastRow from "../components/ForecastRow";

export default function Forecast({ city, country, dailyForecast }) {
  if (!dailyForecast || dailyForecast.length === 0) {
    return (
      <div className="w-full md:w-4/5 lg:w-2/3 mx-auto p-6">
        <p className="text-gray-500 text-center">
          Search for a city to see the forecast
        </p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-4/5 lg:w-2/3 mx-auto space-y-6 p-6 pb-24">

      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold">7-Day Forecast</h1>
        <p className="text-sm text-gray-500">Extended weather outlook</p>
      </div>

      {/* Today */}
      <ForecastRow
        isToday
        data={dailyForecast[0]}
      />

      {/* Rest of days */}
      <div className="space-y-3">
        {dailyForecast.slice(1).map((day, index) => (
          <ForecastRow key={index} data={day} />
        ))}
      </div>

    </div>
  );
}