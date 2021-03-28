import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/600.css";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,*:before,*:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  h1,h2,h3,p {
    font-family: "Mulish";
    color: #fff;
  }

  h1,h2,h3 {
    font-weight: 600;
    margin:0;
  }

  p{
    font-weight: 400;
  }

`;
