import Header from "../components/Header";
import WeatherCard from "../components/WeatherCard";
import DailySummaryCard from "../components/DailySummaryCard";
import ClothingRecommendationCard from "../components/ClothingRecommendationCard";
import EyewearRecommendationCard from "../components/EyewearRecommendationCard";

import { useState } from "react";   // <-- You must import useState

export default function Home() {

  // Shared weather data stored here
  const [temperature, setTemperature] = useState(22);
  const [uvIndex, setUvIndex] = useState(6);
  const [condition, setCondition] = useState("Partly Cloudy");
  const [feelsLike, setFeelsLike] = useState(20);
  const [humidity, setHumidity] = useState(65);
  const [wind, setWind] = useState("12 km/h");

  return (
    <div className="w-full sm:w-full md:w-4/5 lg:w-2/3 mx-auto space-y-6 p-6">

      <Header />

      {/* Pass shared data down to WeatherCard */}
      <WeatherCard
        temperature={temperature}
        setTemperature={setTemperature}
        uvIndex={uvIndex}
        setUvIndex={setUvIndex}
        condition={condition}
        setCondition={setCondition}
        feelsLike={feelsLike}
        setFeelsLike={setFeelsLike}
        humidity={humidity}
        setHumidity={setHumidity}
        wind={wind}
        setWind={setWind}
      />

      <DailySummaryCard
        condition={condition}
        temperature={temperature}
      />

      {/* Clothing and eyewear get temperature + UV */}
      <ClothingRecommendationCard temperature={temperature} />
      <EyewearRecommendationCard uvIndex={uvIndex} />

    </div>
  );
}