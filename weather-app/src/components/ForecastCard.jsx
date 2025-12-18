export default function ForecastCard({ day }) {
  if (!day) return null;

  const date = new Date(day.dt * 1000).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });

  return (
    <div className="rounded-2xl bg-white/30 backdrop-blur-md px-6 py-4 border border-white/40 shadow-sm">
      <div className="flex justify-between items-center">

        {/* LEFT */}
        <div>
          <p className="text-sm font-medium text-gray-800">{date}</p>
          <p className="text-sm text-gray-500 capitalize">
            {day.weather?.[0]?.description || "—"}
          </p>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {day.temp?.max != null ? Math.round(day.temp.max) : "—"}°
            <span className="text-gray-400 font-normal">
              {" "} / {day.temp?.min != null ? Math.round(day.temp.min) : "—"}°
            </span>
          </p>
        </div>

        {/* RIGHT */}
        <div className="text-right text-sm text-gray-600">
          <p>UV {day.uvi != null ? day.uvi.toFixed(1) : "—"}</p>
          <p>
            {day.wind_speed != null
              ? `${Math.round(day.wind_speed)} km/h`
              : "—"}
          </p>
        </div>

      </div>
    </div>
  );
}