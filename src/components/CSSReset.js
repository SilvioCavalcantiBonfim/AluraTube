import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color .3s;
  }
  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
    animation: show linear .3s;
  }
  @keyframes show {
    0% {filter: blur(3px)}
    100% {filter: blur(0px)}
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
    overflow-y: visible;
    overflow-x: hidden;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    all: unset;
    text-decoration: none;
    opacity: 1;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;