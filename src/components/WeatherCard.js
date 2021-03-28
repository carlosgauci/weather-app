import React from "react";
import styled from "styled-components";
import {
  getCurrentDate,
  getIcon,
  getWeatherConditions,
  getWind,
} from "../utils";

export default function WeatherCard({ day }) {
  const today = getCurrentDate(day.dt, true);

  return (
    <Container>
      <Day>{today[0]}</Day>
      <Month>{today[1]}</Month>
      <SVG>{getIcon(day.weather[0].main)}</SVG>
      <Text>
        {getWeatherConditions(day.weather[0].main, day.weather[0].description)}
      </Text>
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
  margin-bottom: 2rem;
  width: 10rem;
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
