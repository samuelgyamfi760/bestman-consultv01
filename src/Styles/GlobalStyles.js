import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    font-family: inherit;
    cursor: pointer;
  }
  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
export default GlobalStyles;
