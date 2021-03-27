import React from "react";
import styled from "styled-components";
import { SunnyIcon } from "../svg/svg";

export default function CurrentWeather() {
  return (
    <Container>
      <Date>Saturday 27th March</Date>
      <Text>Current Conditions in Malta</Text>
      <MainInfo>
        <SVG>
          <SunnyIcon />
        </SVG>
        <Temp>
          <Degrees>17°C</Degrees>
          <Text>High: 20°C | Low: 12°C</Text>
          <Text>Sunny</Text>
        </Temp>
      </MainInfo>
      <ExtraInfo>
        <FlexGroup>
          <Text>UV</Text>
          <Text>6</Text>
        </FlexGroup>
        <FlexGroup>
          <Text>Wind Force</Text>
          <Text>SW 4</Text>
        </FlexGroup>
        <FlexGroup>
          <Text>Humidity</Text>
          <Text>63%</Text>
        </FlexGroup>
        <FlexGroup>
          <Text>Pressure</Text>
          <Text>1028hpa</Text>
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

const Date = styled.h1`
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
