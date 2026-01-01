// src/pages/Home.jsx
import { useState, useEffect } from "react";
import Header from "../components/Header";
import WeatherCard from "../components/WeatherCard";
import DailySummaryCard from "../components/DailySummaryCard";
import ClothingRecommendationCard from "../components/ClothingRecommendationCard";
import EyewearRecommendationCard from "../components/EyewearRecommendationCard";

const API_KEY = "a3762cbe9794c892a563bee2dfeafe40";

// Convert ISO country code → full country name
const getCountryName = (code) => {
  if (!code) return "";
  return new Intl.DisplayNames(["en"], { type: "region" }).of(code);
};

export default function Home({
  location,
  setLocation,
  currentWeather,
  setCurrentWeather,
  forecast,
  setForecast
}) {
  const [suggestions, setSuggestions] = useState([]);

  
    // Autocomplete (Geocoding)
  
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

      setSuggestions(
        data.map((loc) => ({
          name: loc.name,
          countryCode: loc.country,
          country: getCountryName(loc.country),
          lat: loc.lat,
          lon: loc.lon
        }))
      );
    } catch (err) {
      console.error("Autocomplete error:", err);
    }
  };

  // Fetch weather (One Call 3.0)
 
  const fetchWeather = async (input) => {
    try {
      let lat, lon, name, countryCode;

      // If coming from autocomplete
      if (typeof input === "object") {
        ({ lat, lon, name, countryCode } = input);
      } else {
        // Geocode city name
        const geoRes = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
            input
          )}&limit=1&appid=${API_KEY}`
        );

        const geoData = await geoRes.json();
        if (!geoData.length) return;

        lat = geoData[0].lat;
        lon = geoData[0].lon;
        name = geoData[0].name;
        countryCode = geoData[0].country;
      }

      // One Call API 3.0
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );

      const data = await weatherRes.json();
      if (!data.current) return;


      // Update shared state

      setLocation({
        city: name,
        country: getCountryName(countryCode)
      });

      setCurrentWeather({
        temp: data.current.temp,
        feelsLike: data.current.feels_like,
        humidity: data.current.humidity,
        wind: `${Math.round(data.current.wind_speed)} km/h`,
        uvIndex: data.current.uvi,
        condition: data.current.weather[0].description
      });

      // 7-day forecast
      setForecast(data.daily.slice(0, 7));

      setSuggestions([]);
    } catch (err) {
      console.error("One Call fetch error:", err);
    }
  };


      // Load default city

  useEffect(() => {
    fetchWeather("London");
  }, []);

  if (!currentWeather) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading weather…
      </div>
    );
  }

  return (
    <div className="w-full md:w-4/5 lg:w-2/3 mx-auto space-y-6 p-6">
      <Header
        city={location.city}
        country={location.country}
        suggestions={suggestions}
        onTypeCity={handleTypeCity}
        onSearchCity={fetchWeather}
      />

      <WeatherCard
        temperature={Math.round(currentWeather.temp)}
        feelsLike={Math.round(currentWeather.feelsLike)}
        humidity={currentWeather.humidity}
        wind={currentWeather.wind}
        uvIndex={currentWeather.uvIndex}
        condition={currentWeather.condition}
      />

      <DailySummaryCard
        condition={currentWeather.condition}
        temperature={Math.round(currentWeather.temp)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClothingRecommendationCard
          temperature={Math.round(currentWeather.temp)}
        />
        <EyewearRecommendationCard uvIndex={currentWeather.uvIndex} />
      </div>
    </div>
  );
}