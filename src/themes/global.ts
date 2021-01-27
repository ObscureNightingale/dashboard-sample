import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => (theme as any).primary};
        color: ${({ theme }) => (theme as any).textColor};
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: "Open Sans";
        transition: all 0.25s linear;
    }
`;