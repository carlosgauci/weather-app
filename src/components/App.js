import React from "react";
import { GlobalStyle } from "../styles/globalStyles";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container></Container>
    </>
  );
}

const Container = styled.div`
  min-height: 100vh;
`;
