import React from "react";
import styled from "styled-components";
import {
  getCurrentDate,
  getWeatherConditions,
  getWind,
  getIcon,
} from "../utils";

export default function CurrentWeather({ weather }) {
  return (
    <Container>
      {/* Todays date */}
      <Today>{getCurrentDate(weather.current.dt)}</Today>
      <Text>Current Conditions in Malta</Text>

      <FlexContainer>
        {/* Weather icon & temperature section */}
        <MainInfo>
          <SVG>{getIcon(weather.current.weather[0].main)}</SVG>
          <Temp>
            <Degrees>{Math.round(weather.current.temp)}°C</Degrees>
            <Text>
              High: {Math.round(weather.daily[0].temp.max)}°C | Low:{" "}
              {Math.round(weather.daily[0].temp.min)}°C
            </Text>
            {/* Weather conditions eg. Clear, Cloudy etc */}
            <Text>
              {getWeatherConditions(
                weather.current.weather[0].main,
                weather.current.weather[0].description
              )}
            </Text>
          </Temp>
        </MainInfo>

        {/* Extra info section */}
        <ExtraInfo>
          <FlexGroup>
            <Text>UV</Text>
            <Text>{Math.round(weather.current.uvi)}</Text>
          </FlexGroup>
          <FlexGroup>
            <Text>Wind Speed</Text>
            <Text>
              {getWind(weather.current.wind_deg, weather.current.wind_speed)}{" "}
              kts
            </Text>
          </FlexGroup>
          <FlexGroup>
            <Text>Humidity</Text>
            <Text>{Math.round(weather.current.humidity)}%</Text>
          </FlexGroup>
          <FlexGroup>
            <Text>Pressure</Text>
            <Text>{Math.round(weather.current.pressure)}hpa</Text>
          </FlexGroup>
        </ExtraInfo>
      </FlexContainer>
    </Container>
  );
}

const Container = styled.section`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Today = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const SVG = styled.div`
  width: 15rem;
  padding: 1rem;

  @media (min-width: 1024px) {
    margin-right: 1rem;
  }
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const MainInfo = styled.section`
  flex-basis: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 15%;
    width: 70%;
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    flex-basis: 60%;

    &:after {
      bottom: 15%;
      right: 0;
      left: unset;
      height: 70%;
      border-bottom: none;
      border-right: 2px solid rgba(255, 255, 255, 0.15);
    }
  }

  @media (min-width: 1280px) {
  }
`;

const Temp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p:nth-child(3) {
    margin-bottom: 0;
  }
`;

const Degrees = styled.h3`
  font-size: 5rem;
  margin-bottom: 0.5rem;
`;

const ExtraInfo = styled.section`
  flex-basis: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 2rem 0;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-basis: 40%;
    place-items: center;
    grid-gap: 0;
  }
`;

const FlexGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p:first-of-type {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  p:nth-child(2) {
    font-size: 1rem;
  }
`;
