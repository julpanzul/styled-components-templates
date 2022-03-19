import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  :root {
    body {
      background-color: #fff;
      color: #121212;
    }
  }
  
  [data-theme="dark"] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }

  /* Default Styles */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1rem;
    /* background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1}; */
    transition: all ${(props) => props.theme.transition.time};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  input, button, select {
    outline: none;
  }

`;

export default GlobalStyles;
