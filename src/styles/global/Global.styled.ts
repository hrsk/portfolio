import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-size: cover;
    //background-color: #1a181d;
    background-color: #0f0f0f;
    margin: 0;
    //color: #f5f5f7;
    color: ${theme.colors.fonts.font};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.95;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  section {
    padding: 80px 0; 
  }

  a {
    text-decoration: none;
    color: ${theme.colors.fonts.font};
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: unset;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1px;
    color: ${theme.colors.fonts.text};
  }

  span {
    font-size: 18px;
    font-weight: 600;
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  h2 {
    font-weight: 500;
    line-height: 1.2;
  }
  h3 {
    font-weight: 400;
    line-height: 1.2;
  }
`