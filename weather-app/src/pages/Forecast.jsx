// src/pages/Forecast.jsx
export default function Forecast({ daily = [] }) {
  return (
    <div className="w-full sm:w-full md:w-4/5 lg:w-2/3 mx-auto p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        5-Day Forecast
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {daily.map((day, index) => {
          const date = new Date(day.dt * 1000).toLocaleDateString("en-GB", {
            weekday: "short"
          });

          return (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-sm"
            >
              <p className="text-sm text-gray-600">{date}</p>
              <p className="text-lg font-medium text-gray-900">
                {Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°
              </p>
              <p className="text-sm text-gray-500 capitalize">
                {day.weather[0].description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}