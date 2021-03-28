export default function getWeatherConditions(main, desc) {
  if (
    desc === "few clouds" ||
    desc === "scattered clouds" ||
    desc === "broken clouds"
  ) {
    return "Slightly Cloudy";
  } else if (main === "Clouds") {
    return "Cloudy";
  } else if (main === "Clear") {
    return "Clear Skies";
  } else return main;
}
