🌤️ Weather Dashboard App

A responsive weather dashboard built with React, Vite, and Tailwind CSS.
The application allows users to search for a city and view weather information in a clean, modern interface designed for clarity and ease of use.

This project was developed as part of the ALX Frontend Engineering Capstone to demonstrate frontend fundamentals, API-ready architecture, and deployment.

⸻

🚀 Features

Current Weather Display
	•	Displays weather information for the selected location
	•	Shows temperature, weather condition, humidity, wind speed, and related icons
	•	Clean, minimal card-based layout
	•	Responsive design for desktop and mobile screens

City Search
	•	Search input to change location
	•	When an invalid city is entered, the app remains on the last valid location without breaking
	•	Designed for future API-based validation and feedback

Navigation
	•	Multi-page layout with Home, Forecast, and Settings views
	•	Simple navigation between pages
	•	Known behaviour: returning to the Home page resets the location to the current/default city

Settings Page (In Progress)
	•	Settings page is present in the UI
	•	Adjustments currently do not affect app behaviour
	•	Planned to be connected to global state in a future iteration

⸻

🛠️ Tech Stack

Frontend
	•	React
	•	Vite
	•	Tailwind CSS
	•	React Router
	•	Heroicons

Deployment
	•	Netlify

⸻

📦 Installation & Setup

Clone the repository:

git clone https://github.com/joshua-odubu/ALX-FE-Capstone-Project-Weather_Dashboard.git

Navigate into the project:

cd weather-app

Install dependencies:

npm install

Start the development server:

npm run dev

Open in your browser:

http://localhost:5173


⸻

🧩 Project Structure

src/
 ├── components/
 │    ├── Header.jsx
 │    ├── WeatherCard.jsx
 │    ├── DailySummaryCard.jsx
 │    ├── ClothingCard.jsx
 │    └── EyewearCard.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── Forecast.jsx
 │    └── Settings.jsx
 ├── styles/
 │    └── tailwind.css
 ├── App.jsx
 ├── main.jsx
 └── utils/
      └── (planned helpers and API functions)


⸻

⚠️ Known Limitations
	•	Invalid city searches do not yet display explicit error messages
	•	Settings changes do not yet persist or affect the app
	•	Navigation back to the Home page resets the selected location

These are planned improvements and reflect the iterative nature of the project.

⸻

🔮 Roadmap

Short-term
	•	Integrate real weather data using the OpenWeather API
	•	Add explicit error handling for invalid city searches
	•	Improve state persistence across navigation
	•	Add loading indicators

Medium-term
	•	7-day forecast view
	•	Functional settings (units, preferences)
	•	Save preferred location using local storage
	•	Light/dark theme toggle

Long-term
	•	Geolocation-based weather detection
	•	Daily weather summaries
	•	Offline support and caching

⸻

📄 License

This project was built for educational and personal learning purposes as part of the ALX Frontend Engineering programme.
You are free to explore, modify, and extend it for learning.

