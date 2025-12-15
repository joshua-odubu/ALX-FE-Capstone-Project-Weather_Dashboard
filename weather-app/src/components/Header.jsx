// src/components/Header.jsx
import { useState } from "react";

export default function Header({
  city,
  country,
  onSearchCity,
  onTypeCity,
  suggestions
}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative w-full">
      <div className="bg-white/30 backdrop-blur-md shadow-sm rounded-3xl px-6 py-4 border border-white/40">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-lg font-medium text-gray-800">
            Weather Dashboard:{" "}
            <span className="font-normal">
              {city}, {country}
            </span>
          </h1>

          <div className="flex items-center gap-2 w-full sm:w-[45%]">
            <input
              type="text"
              placeholder="Search city..."
              className="flex-grow px-4 py-2 bg-white rounded-full border border-gray-300"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                onTypeCity(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-gray-300 rounded-full"
              onClick={() => onSearchCity(inputValue)}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border z-50">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSearchCity(s);
                setInputValue("");
              }}
            >
              {s.name}, {s.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}