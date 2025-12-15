import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Settings from "./pages/Settings";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1 pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>

      {/* Always-visible navigation */}
      <BottomNav />
    </div>
  );
}