import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  CalendarDaysIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";

export default function BottomNav() {
  const base =
    "flex flex-col items-center justify-center flex-1 py-2 text-xs transition";

  const active =
    "text-blue-600";

  const inactive =
    "text-gray-500 hover:text-gray-700";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200">
      <div className="flex h-16 max-w-xl mx-auto">
        <NavLink
          to="/"
          end
          aria-label="Home"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          <HomeIcon className="w-6 h-6 mb-1" />
          Home
        </NavLink>

        <NavLink
          to="/forecast"
          aria-label="Forecast"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          <CalendarDaysIcon className="w-6 h-6 mb-1" />
          Forecast
        </NavLink>

        <NavLink
          to="/settings"
          aria-label="Settings"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          <Cog6ToothIcon className="w-6 h-6 mb-1" />
          Settings
        </NavLink>
      </div>
    </nav>
  );
}