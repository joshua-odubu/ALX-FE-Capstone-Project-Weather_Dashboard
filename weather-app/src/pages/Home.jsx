import Header from "../components/Header";
import WeatherCard from "../components/WeatherCard";
import DailySummaryCard from "../components/DailySummaryCard";
import ClothingRecommendationCard from "../components/ClothingRecommendationCard";
import EyewearRecommendationCard from "../components/EyewearRecommendationCard";

export default function Home() {
  return (
    <div className="w-full sm:w-full md:w-4/5 lg:w-2/3 mx-auto space-y-6 p-6">

      <Header />
      <WeatherCard />
      <DailySummaryCard />
      <ClothingRecommendationCard />
      <EyewearRecommendationCard />
    </div>
  );
}