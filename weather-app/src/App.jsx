import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Settings from "./pages/Settings";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [dailyForecast, setDailyForecast] = useState([]);

  return (
    <div className="min-h-screen pb-20">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setDailyForecast={setDailyForecast}
            />
          }
        />

        <Route
          path="/forecast"
          element={
            <Forecast dailyForecast={dailyForecast} />
          }
        />

        <Route path="/settings" element={<Settings />} />
      </Routes>

      <BottomNav />
    </div>
  );
}