import { SunIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ClothingCard() {
  // For now, we'll use a fixed temperature.
  // Later, we can pass real temperature from WeatherCard via props or context.
  const [temperature] = useState(22);

  const getClothingAdvice = (temp) => {
    if (temp < 10) return "It's cold today. Wear a warm jacket.";
    if (temp < 20) return "Mild weather. A light jumper or long sleeves is fine.";
    if (temp < 28) return "Warm outside. A T-shirt is comfortable.";
    return "Hot weather. Wear breathable clothing and stay hydrated.";
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md w-full">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <SunIcon className="w-6 h-6 text-yellow-500" />
        <h2 className="text-lg font-semibold text-gray-900">
          Clothing Recommendation
        </h2>
      </div>

      {/* Divider */}
      <div className="border-t border-white/40 my-3"></div>

      {/* Advice Text */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {getClothingAdvice(temperature)}
      </p>
    </div>
  );
}