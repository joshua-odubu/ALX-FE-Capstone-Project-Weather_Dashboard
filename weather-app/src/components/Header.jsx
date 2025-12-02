export default function Header() {
  return (
    <div className="bg-white/30 backdrop-blur-md shadow-sm rounded-3xl px-6 py-4 border border-white/40
                    flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      {/* Left Title */}
      <h1 className="text-lg font-medium text-gray-800">
        Weather Dashboard
      </h1>

      {/* Search Area */}
      <div className="flex items-center gap-2 w-full md:w-auto md:flex-none">

        <input
          type="text"
          placeholder="Search city..."
          className="flex-grow min-w-0 h-11 px-4 bg-white/40 backdrop-blur 
                     rounded-full outline-none border border-white/50 text-gray-700 focus:ring-2 focus:ring-blue-400"
        />

        <button className="flex-shrink-0 h-11 px-6 bg-gray-300 hover:bg-gray-400 text-gray-700 
                           rounded-full shadow-md transition">
          Search
        </button>

      </div>
    </div>
  );
}