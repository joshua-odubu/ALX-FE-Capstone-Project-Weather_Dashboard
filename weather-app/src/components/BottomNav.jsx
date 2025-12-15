// src/components/BottomNav.jsx
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  CalendarDaysIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";

export default function BottomNav() {
  const linkClass = ({ isActive }) =>
    `flex flex-col items-center justify-center gap-1 text-xs transition
     ${isActive ? "text-blue-600" : "text-gray-500 hover:text-gray-700"}`;

  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-white/80 backdrop-blur-md
        border-t border-gray-200
        h-16
      "
    >
      <div className="max-w-md mx-auto h-full flex items-center justify-around">
        <NavLink to="/" className={linkClass}>
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/forecast" className={linkClass}>
          <CalendarDaysIcon className="w-6 h-6" />
          <span>Forecast</span>
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          <Cog6ToothIcon className="w-6 h-6" />
          <span>Settings</span>
        </NavLink>
      </div>
    </nav>
  );
}