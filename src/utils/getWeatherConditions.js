export default function getWeatherConditions(main, desc) {
  if (
    desc === "few clouds" ||
    desc === "scattered clouds" ||
    desc === "broken clouds"
  ) {
    return "Slightly Cloudy";
  }

  if (main === "Clouds") {
    return "Cloudy";
  }

  if (main === "Drizzle" || desc === "light rain") {
    return "Light Rain";
  }

  if (main === "Clear") {
    return "Clear Skies";
  }

  return main;
}
