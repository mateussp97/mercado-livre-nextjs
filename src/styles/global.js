import { css } from "@emotion/react";

export const GlobalStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  a {
    text-decoration: none;
  }

  input,
  textarea,
  button {
    outline: none;
  }

  body,
  input,
  textarea,
  button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
