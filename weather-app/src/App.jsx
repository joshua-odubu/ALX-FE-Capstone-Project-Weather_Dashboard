// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Settings from "./pages/Settings";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen pb-20">
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

      {/* Bottom Navigation — ALWAYS visible */}
      <BottomNav />
    </div>
  );
}