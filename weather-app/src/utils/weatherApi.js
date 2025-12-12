const API_KEY = "a3762cbe9794c892a563bee2dfeafe40"; // replace this with your real key

export async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    return {
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      wind: `${Math.round(data.wind.speed)} km/h`,
      condition: data.weather[0].description,
      uvIndex: 6 // temporary until we add separate UV API
    };

  } catch (error) {
    console.error("Weather fetch error:", error);
    return null;
  }
}