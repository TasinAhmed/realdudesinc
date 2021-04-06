import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, 
    *:before, 
    *:after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html,
    body,
    body > div:first-child,
    div#__next,
    div#__next > div {
        height: 100%;
    }

    html {
        font-size: 62.5%;
        font-family: 'Spartan', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input, 
    select, 
    textarea, 
    button {
        font-family:inherit;
    }
`;
