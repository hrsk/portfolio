import {createGlobalStyle} from "styled-components";
import background_image from './../../assets/background/background.jpg';

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
    background:url(${background_image});
    margin: 0;
    color: #f5f5f7;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.95;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
