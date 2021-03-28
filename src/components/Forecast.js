import React from "react";
import styled from "styled-components";
import WeatherCard from "./WeatherCard";

export default function Forecast({ weather }) {
  return (
    <Container>
      <Title>7 Day Forecast</Title>
      <CardContainer>
        {weather.slice(1).map((day) => {
          return <WeatherCard key={day.dt} day={day} />;
        })}
      </CardContainer>
    </Container>
  );
}

const Container = styled.section`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  width: 100%;
  max-width: 1440px;
  margin: 2rem auto 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
