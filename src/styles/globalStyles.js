import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/700.css";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,*:before,*:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,h2,h3 {
    font-family: "Mulish";
    font-weight: 700;
    margin:0;
  }

  p,li,button,a,input,label{
    font-family: "Mulish";
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }
`;
