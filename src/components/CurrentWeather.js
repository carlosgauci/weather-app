import React from "react";
import styled from "styled-components";
import { SunnyIcon } from "../svg/svg";
import getCurrentDate from "../utils/getCurrentDate";

export default function CurrentWeather({ weather }) {
  return (
    <Container>
      {/* Todays date */}
      <Today>{getCurrentDate(weather.current.dt)}</Today>
      <Text>Current Conditions in Malta</Text>

      {/* Weather icon & temperature section */}
      <MainInfo>
        <SVG>
          <SunnyIcon />
        </SVG>
        <Temp>
          <Degrees>{Math.round(weather.current.temp)}°C</Degrees>
          <Text>
            High: {Math.round(weather.daily[0].temp.max)}°C | Low:{" "}
            {Math.round(weather.daily[0].temp.min)}°C
          </Text>
          <Text>{weather.current.weather[0].main}</Text>
        </Temp>
      </MainInfo>

      {/* Extra info section */}
      <ExtraInfo>
        <FlexGroup>
          <Text>UV</Text>
          <Text>{Math.round(weather.current.uvi)}</Text>
        </FlexGroup>
        <FlexGroup>
          <Text>Wind Force</Text>
          <Text>SW 4</Text>
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
    </Container>
  );
}

const Container = styled.section`
  background-color: rgba(0, 0, 0, 0.65);
  border-radius: 10px;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Today = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const SVG = styled.div`
  width: 100%;
  padding: 1rem;
  max-width: 15rem;
`;

const MainInfo = styled.section`
  width: 100%;
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
    border-bottom: 2px solid rgba(255, 255, 255, 0.4);
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
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 2rem 0;
  justify-content: space-between;
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
