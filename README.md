🌤️ Weather Dashboard App

A modern and minimalist weather dashboard built with React, Vite, and Tailwind CSS.
The app displays today’s weather, daily summaries, clothing and eyewear recommendations, and supports custom locations.
The UI follows a clean glass-morphism style with responsive layouts and simple animations.

⸻

🚀 Features

Current Weather
	•	Dynamic weather card
	•	Auto-refresh button with randomised conditions (for now)
	•	Icons for conditions, humidity, wind and UV index
	•	Feels-like temperature and weather description
	•	Smooth glass UI styling

Daily Summary
	•	Summary of today’s overall weather
	•	Notification icon (future: schedule daily weather reminders)

Recommendations
	•	Clothing suggestions based on temperature
	•	Eyewear guidance based on UV index
	•	Future: extend recommendations for rain, snow, wind or extreme heat

Search + Location
	•	Search bar for entering or changing city
	•	Future: integrate real weather API (OpenWeather / Tomorrow.io)
	•	Header shows location and supports mobile responsiveness

Responsive Layout
	•	Clean, minimal layout
	•	Works on desktop and mobile
	•	Uses Tailwind’s grid and spacing utilities for structured cards

⸻

🛠️ Tech Stack

Frontend:
	•	React
	•	Vite
	•	Tailwind CSS
	•	Heroicons (UI icons)

Planned Integrations:
	•	OpenWeather API or Tomorrow.io API
	•	Local storage for user preferences
	•	Automatic daily summary notifications

⸻

📦 Installation

Clone the repository:
git clone https://github.com/joshua-odubu/ALX-FE-Capstone-Project-Weather_Dashboard.git

Navigate into the project:
cd weather-app

Install dependencies:
npm install

Start development server:
npm run dev

Open in your browser:
http://localhost:5173/


🧩 Project Structure
src/
 ├── components/
 │    ├── Header.jsx
 │    ├── WeatherCard.jsx
 │    ├── DailySummaryCard.jsx
 │    ├── ClothingCard.jsx
 │    └── EyewearCard.jsx
 ├── pages/
 │    └── Home.jsx
 ├── styles/
 │    └── tailwind.css
 ├── App.jsx
 ├── main.jsx
 └── utils/ (future helpers and API functions)


 🔮 Roadmap

Short-term
	•	Connect to real weather API
	•	Replace random data with real-time conditions
	•	Improve recommendations for more weather types
	•	Add loading animations
	•	Add error handling (invalid city, API failure)

Medium-term
	•	7-day forecast page
	•	User settings page
	•	Light/dark theme toggle
	•	Save preferred city

Long-term
	•	Push notifications for daily 5 AM summary
	•	Use geolocation to detect user’s current position
	•	Offline mode / caching

⸻

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss the change.

⸻

📄 License

This project is for educational and personal learning use under the ALX Frontend Engineering programme.
You may modify and expand it as needed.
