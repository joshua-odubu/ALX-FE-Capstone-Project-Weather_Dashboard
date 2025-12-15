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
  return new Intl.DisplayNames(["en"], { type: "region" }).of(code);
};

export default function Home({ setDailyForecast }) {
  /* -----------------------------
     Location
  ----------------------------- */
  const [city, setCity] = useState("London");
  const [country, setCountry] = useState("United Kingdom");

  /* -----------------------------
     Weather data
  ----------------------------- */
  const [temperature, setTemperature] = useState(22);
  const [feelsLike, setFeelsLike] = useState(20);
  const [humidity, setHumidity] = useState(65);
  const [wind, setWind] = useState("12 km/h");
  const [uvIndex, setUvIndex] = useState(6);
  const [condition, setCondition] = useState("Partly Cloudy");

  /* -----------------------------
     Autocomplete
  ----------------------------- */
  const [suggestions, setSuggestions] = useState([]);

  // Handle typing in search input
  const handleTypeCity = async (query) => {
    if (!query || query.length < 2) {
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

  /* -----------------------------
     Search + Fetch Weather
  ----------------------------- */
  const handleSearchCity = async (input) => {
    try {
      let lat, lon, name, fullCountry;

      // If selection came from autocomplete
      if (typeof input === "object") {
        ({ lat, lon, name, country: fullCountry } = input);
      } else {
        const geoRes = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
            input
          )}&limit=1&appid=${API_KEY}`
        );

        const geoData = await geoRes.json();
        if (!geoData.length) {
          alert("City not found");
          return;
        }

        lat = geoData[0].lat;
        lon = geoData[0].lon;
        name = geoData[0].name;
        fullCountry = getCountryName(geoData[0].country);
      }

      // Fetch weather (current + daily)
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );

      const weatherData = await weatherRes.json();
      if (!weatherData.current) return;

      /* -----------------------------
         Update UI state
      ----------------------------- */
      setCity(name);
      setCountry(fullCountry);

      setTemperature(Math.round(weatherData.current.temp));
      setFeelsLike(Math.round(weatherData.current.feels_like));
      setHumidity(weatherData.current.humidity);
      setWind(`${Math.round(weatherData.current.wind_speed)} km/h`);
      setUvIndex(weatherData.current.uvi);
      setCondition(weatherData.current.weather[0].description);

      // 🔑 SEND 7-DAY FORECAST TO APP
      setDailyForecast(weatherData.daily.slice(0, 7));

      setSuggestions([]);
    } catch (err) {
      console.error("Weather fetch error:", err);
    }
  };

  /* -----------------------------
     Load default city on start
  ----------------------------- */
  useEffect(() => {
    handleSearchCity("London");
  }, []);

  /* -----------------------------
     Render
  ----------------------------- */
  return (
    <div className="w-full md:w-4/5 lg:w-2/3 mx-auto space-y-6 p-6">
      <Header
        city={city}
        country={country}
        onTypeCity={handleTypeCity}
        onSearchCity={handleSearchCity}
        suggestions={suggestions}
      />

      <WeatherCard
        temperature={temperature}
        feelsLike={feelsLike}
        humidity={humidity}
        wind={wind}
        uvIndex={uvIndex}
        condition={condition}
      />

      <DailySummaryCard
        condition={condition}
        temperature={temperature}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClothingRecommendationCard temperature={temperature} />
        <EyewearRecommendationCard uvIndex={uvIndex} />
      </div>
    </div>
  );
}