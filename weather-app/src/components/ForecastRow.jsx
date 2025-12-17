export default function ForecastRow({ data, isToday = false }) {
  const date = new Date(data.dt * 1000);

  const label = isToday
    ? "Today"
    : date.toLocaleDateString("en-GB", {
        weekday: "short",
        month: "short",
        day: "numeric"
      });

  return (
    <div className="flex items-center justify-between rounded-xl bg-white px-6 py-4 shadow-sm">

      {/* Left */}
      <div>
        <p className="text-sm font-medium text-gray-700">{label}</p>
        <p className="text-sm text-gray-500 capitalize">
          {data.weather[0].description}
        </p>
        <p className="mt-1 text-lg font-semibold">
          {Math.round(data.temp.max)}°
          <span className="text-gray-400"> / {Math.round(data.temp.min)}°</span>
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-col items-center text-gray-600">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
          className="w-8 h-8"
        />
        <p className="text-xs mt-1">UV {Math.round(data.uvi)}</p>
      </div>

    </div>
  );
}