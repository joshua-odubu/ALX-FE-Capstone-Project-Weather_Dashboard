// src/components/SettingsCard.jsx
export default function SettingsCard({
  icon,
  title,
  description,
  control
}) {
  return (
    <div
      className="
        flex items-center justify-between
        rounded-2xl
        bg-white/30 backdrop-blur-md
        px-6 py-5
        border border-white/40
        shadow-sm
      "
    >
      {/* LEFT */}
      <div className="flex items-start gap-4">
        <div className="text-gray-700">
          {icon}
        </div>

        <div>
          <p className="text-sm font-medium text-gray-800">
            {title}
          </p>
          <p className="text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        {control}
      </div>
    </div>
  );
}