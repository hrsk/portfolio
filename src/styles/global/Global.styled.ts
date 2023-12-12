import {createGlobalStyle} from "styled-components";
import background_image from './../../assets/background/background.jpg';
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
    background: url(${background_image});
    margin: 0;
    //color: #f5f5f7;
    color: ${theme.colors.fonts.font};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.95;
    font-family: Helvetica, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: unset;
  }

  button {
    background-color: unset;
    border: unset;
  }

  p {
    font-size: 16px;
    color: ${theme.colors.fonts.font};
  }

  h2 {
    color: ${theme.colors.fonts.font};
    font-weight: 500;
    line-height: 1.2;
  }
`