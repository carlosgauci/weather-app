import React, { useState, useEffect } from "react";
import { GlobalStyle } from "../styles/globalStyles";
import styled from "styled-components";
import { useWindowSize } from "../utils";
import background from "../images/bg.jpg";
import backgroundLarge from "../images/bg-lg.jpg";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function App() {
  // Use different bg image on mobile/desktop
  const width = useWindowSize();
  const bgImage = width >= 650 ? backgroundLarge : background;

  // State to store weather data
  const [weather, setWeather] = useState();

  // Fetch data on load
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=35.8997&lon=14.5147&units=metric&exclude=minutely,hourly&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container style={{ backgroundImage: `url(${bgImage})` }}>
        {weather && <CurrentWeather weather={weather} />}
        {weather && <Forecast weather={weather.daily} />}
      </Container>
    </>
  );
}

const Container = styled.main`
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  padding: 1rem;
`;
