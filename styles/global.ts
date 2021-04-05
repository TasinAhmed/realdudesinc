  
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *, 
    *:before, 
    *:after {
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        height: 100%;
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
`