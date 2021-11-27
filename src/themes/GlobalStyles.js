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
`;

export default GlobalStyle;
