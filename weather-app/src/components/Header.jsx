import { useState } from "react";

export default function Header({
  city,
  country,
  onSearchCity,
  onTypeCity,
  suggestions
}) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    onSearchCity(trimmed);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="relative w-full">
      
      {/* MAIN HEADER CARD */}
      <div className="bg-white/30 backdrop-blur-md shadow-sm rounded-3xl px-6 py-4 border border-white/40">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          {/* CITY + COUNTRY DISPLAY */}
          <h1 className="text-lg font-medium text-gray-800">
            Weather Dashboard:{" "}
            <span className="font-normal">
              {city}
              {country ? `, ${country}` : ""}
            </span>
          </h1>

          {/* SEARCH BAR */}
          <div className="flex items-center gap-2 w-full sm:w-[50%] md:w-[45%] lg:w-[40%]">
            <input
              type="text"
              placeholder="Search city..."
              className="flex-grow flex-shrink min-w-0 px-4 py-[10px]
                         bg-white/40 backdrop-blur rounded-full outline-none
                         border border-white/50 text-gray-700"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                onTypeCity(e.target.value); // fetch suggestions as you type
              }}
              onKeyDown={handleKeyDown}
            />

            <button
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 
                         text-gray-700 rounded-full shadow-lg transition"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

        </div>
      </div>

      {/* AUTOCOMPLETE DROPDOWN */}
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border z-50">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onSearchCity({
                    name: suggestion.name,
                    lat: suggestion.lat,
                    lon: suggestion.lon,
                    countryCode: suggestion.countryCode
                  });
                  setInputValue("");
                }}
            >
              {suggestion.name}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}