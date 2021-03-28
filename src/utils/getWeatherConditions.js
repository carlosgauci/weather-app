export default function getWeatherConditions(main, desc) {
  if (desc === "few clouds" || desc === "scattered clouds") {
    return "Slightly Cloudy";
  } else if (main === "Clouds") {
    return "Cloudy";
  } else return main;
}
