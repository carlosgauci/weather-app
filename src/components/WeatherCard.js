import React from "react";
import styled from "styled-components";
import {
  getCurrentDate,
  getIcon,
  getWeatherConditions,
  getWind,
} from "../utils";

export default function WeatherCard({ day }) {
  // Get date from unix time
  const today = getCurrentDate(day.dt, "array");

  return (
    <Container>
      {/* Day & date */}
      <Day>{today[0]}</Day>
      <Month>{today[1]}</Month>
      {/* Get weather icon, pass in "forecast" to always show day icons */}
      <SVG>{getIcon(day.weather[0].main, "forecast")}</SVG>
      {/* Weather description */}
      <Text>
        {getWeatherConditions(day.weather[0].main, day.weather[0].description)}
      </Text>
      {/* Info */}
      <Text>High {Math.round(day.temp.max)}°C</Text>
      <Text>Low {Math.round(day.temp.min)}°C</Text>
      <Text>UV {Math.round(day.uvi)}</Text>
      <Text>{getWind(day.wind_deg, day.wind_speed)} kts</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
  flex-basis: 100%;
  position: relative;

  @media (min-width: 480px) {
    flex-basis: 50%;
  }

  @media (min-width: 768px) {
    flex-basis: 33.3%;
  }

  @media (min-width: 1024px) {
    flex-basis: 25%;
  }

  @media (min-width: 1280px) {
    flex-basis: 14.2%;
  }
`;

const Day = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
`;

const Month = styled.p`
  margin-bottom: 0.25rem;
`;

const SVG = styled.div`
  width: 100%;
  max-width: 5rem;
  margin: 0.75rem 0;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 0.35rem;
`;
