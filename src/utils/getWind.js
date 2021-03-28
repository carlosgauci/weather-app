export default function getWind(deg, speed) {
  // Get wind direction
  const compassPoints = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const value = Math.floor(deg / 22.5 + 0.5);

  // Get wind speed in knots
  const knots = Math.round(speed * 1.944);

  return `${compassPoints[value % 16]} ${knots}`;
}
