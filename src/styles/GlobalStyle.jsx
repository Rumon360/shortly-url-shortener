import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
        background-color: hsl(0, 0%, 75%);
    }
`;

export default GlobalStyle;
