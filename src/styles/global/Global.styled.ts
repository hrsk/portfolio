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
        background-color: #111;
        margin: 0;
        color: ${theme.colors.fonts.font};
        font-size: 14px;
        font-weight: 400;
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
        color: ${theme.colors.fonts.font};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0.1em;
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
        color: ${theme.colors.fonts.headers}
    }

    h2 {
        font-weight: 500;
        line-height: 1.2;
        color: ${theme.colors.fonts.headers};
    }

    h3 {
        font-weight: 400;
        line-height: 1.2;
        color: ${theme.colors.fonts.headers}
    }
`