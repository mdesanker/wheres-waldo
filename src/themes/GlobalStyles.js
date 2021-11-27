import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-family: arial, sans-serif;
    font-size: 18px;
  }

  body {
    width: 100%;
    /* For footer positioning */
    position: relative;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
