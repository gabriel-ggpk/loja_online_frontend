import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    justify-content: center;
    display: flex;

    margin: 0;
    padding: 0;
    background: #202020;
    height: 100vh;
    font-family: "Roboto";
    }
    h1{
color: #fff;
    }
    a{
      text-decoration: none;
      color: #fff;
    }
`;

export default GlobalStyle;
