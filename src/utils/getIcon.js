import {
  ClearIcon,
  ClearNightIcon,
  CloudyIcon,
  CloudyNightIcon,
  RainIcon,
  RainNightIcon,
  StormIcon,
} from "../svg/svg";

export default function getIcon(weather) {
  // Determine daytime or nighttime
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;

  //   Choose relevant icon
  //   Cloudy
  if (weather === "Clouds" && !isDayTime) {
    return <CloudyNightIcon />;
  }
  if (weather === "Clouds") {
    return <CloudyIcon />;
  }

  //   Rainy
  if (
    (weather === "Rain" && !isDayTime) ||
    (weather === "Drizzle" && !isDayTime)
  ) {
    return <RainNightIcon />;
  }

  if (weather === "Rain" || weather === "Drizzle") {
    return <RainIcon />;
  }

  //   Thunderstorm
  if (weather === "Thunderstorm") {
    return <StormIcon />;
  }

  //   Clear
  if (weather === "Clear" && !isDayTime) {
    return <ClearNightIcon />;
  }

  return <ClearIcon />;
}
