// src/pages/Home.jsx
import { useState, useEffect } from "react";
import Header from "../components/Header";
import WeatherCard from "../components/WeatherCard";
import DailySummaryCard from "../components/DailySummaryCard";
import ClothingRecommendationCard from "../components/ClothingRecommendationCard";
import EyewearRecommendationCard from "../components/EyewearRecommendationCard";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

// Convert country code → full country name
const getCountryName = (code) => {
  if (!code) return "";
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  return regionNames.of(code);
};

export default function Home() {
  // City + Country
  const [city, setCity] = useState("London");
  const [country, setCountry] = useState("United Kingdom");

  // Weather Stats
  const [temperature, setTemperature] = useState(22);
  const [uvIndex, setUvIndex] = useState(6);
  const [condition, setCondition] = useState("Partly Cloudy");
  const [feelsLike, setFeelsLike] = useState(20);
  const [humidity, setHumidity] = useState(65);
  const [wind, setWind] = useState("12 km/h");

  // Autocomplete suggestions
  const [suggestions, setSuggestions] = useState([]);

  // -----------------------------
  // Autocomplete Typing Handler
  // -----------------------------
  const handleTypeCity = async (query) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
          query
        )}&limit=5&appid=${API_KEY}`
      );

      const data = await res.json();

      if (Array.isArray(data)) {
        setSuggestions(
          data.map((loc) => ({
            name: loc.name,
            country: getCountryName(loc.country),
            lat: loc.lat,
            lon: loc.lon
          }))
        );
      }
    } catch (err) {
      console.error("Autocomplete error:", err);
    }
  };

  // -----------------------------
  // On Search → Fetch Weather
  // -----------------------------
  const handleSearchCity = async (cityName) => {
    try {
      // 1. Lookup geolocation for city
      const geoRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
          cityName
        )}&limit=1&appid=${API_KEY}`
      );
      const geoData = await geoRes.json();

      if (!geoData.length) {
        alert("City not found");
        return;
      }

      const { lat, lon, name, country: countryCode } = geoData[0];
      const fullCountry = getCountryName(countryCode);

      // 2. Fetch weather from OneCall API
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const weatherData = await weatherRes.json();

      if (!weatherData.current) {
        alert("Weather unavailable");
        return;
      }

      // 3. Update UI
      setCity(name);
      setCountry(fullCountry);

      setTemperature(Math.round(weatherData.current.temp));
      setFeelsLike(Math.round(weatherData.current.feels_like));
      setHumidity(weatherData.current.humidity);
      setWind(`${Math.round(weatherData.current.wind_speed)} km/h`);
      setUvIndex(weatherData.current.uvi);
      setCondition(weatherData.current.weather[0].description);

      setSuggestions([]); // hide dropdown
    } catch (err) {
      console.error("Weather fetch error:", err);
      alert("Could not fetch weather.");
    }
  };

  // -----------------------------
  // Load London by default on app start
  // -----------------------------
  useEffect(() => {
    handleSearchCity("London");
  }, []);

  return (
    <div className="w-full sm:w-full md:w-4/5 lg:w-2/3 mx-auto space-y-6 p-6">
      <Header
        city={city}
        country={country}
        onSearchCity={handleSearchCity}
        onTypeCity={handleTypeCity}
        suggestions={suggestions}
      />

      <WeatherCard
        temperature={temperature}
        uvIndex={uvIndex}
        condition={condition}
        feelsLike={feelsLike}
        humidity={humidity}
        wind={wind}
      />

      <DailySummaryCard condition={condition} temperature={temperature} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClothingRecommendationCard temperature={temperature} />
        <EyewearRecommendationCard uvIndex={uvIndex} />
      </div>
    </div>
  );
}