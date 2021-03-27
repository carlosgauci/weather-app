import React from "react";
import { GlobalStyle } from "../styles/globalStyles";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import background from "../images/bg.jpg";
import backgroundLarge from "../images/bg-lg.jpg";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  // Use different bg image on mobile/desktop
  const width = useWindowSize();
  const bgImage = width >= 650 ? backgroundLarge : background;

  return (
    <>
      <GlobalStyle />
      <Container style={{ backgroundImage: `url(${bgImage})` }}>
        <CurrentWeather />
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
