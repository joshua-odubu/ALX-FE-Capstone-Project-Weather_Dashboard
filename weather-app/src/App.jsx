// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Settings from "./pages/Settings";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [location, setLocation] = useState({
    city: "London",
    country: "United Kingdom"
  });

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  
  return (
    <div className="min-h-screen pb-20">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              location={location}
              setLocation={setLocation}
              currentWeather={currentWeather}
              setCurrentWeather={setCurrentWeather}
              forecast={forecast}
              setForecast={setForecast}
            />
          }
        />

        <Route
          path="/forecast"
          element={
            <Forecast
              location={location}
              forecast={forecast}
            />
          }
        />

        <Route path="/settings" element={<Settings />} />
      </Routes>

      <BottomNav />
    </div>
  );
}