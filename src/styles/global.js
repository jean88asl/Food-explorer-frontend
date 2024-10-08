import { createGlobalStyle } from "styled-components"
import { DEVICE_BREAKPOINTS } from "./layoutBreakpoints"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 16px;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD} ) {
            font-size: 12px;
        }   
    }

    :focus {
        outline: transparent;
    }

    body {
        background: ${({theme}) => theme['DARK-400']};
        color: ${({theme}) => theme['LIGHT-100']};
        -webkit-font-smoothing: antialiased;
    }

    input, body, input, textarea{
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        outline: none;
    } 

    a {
        text-decoration: none;
    }

    a:hover, button:hover {
        filter: brightness(0.8);
    }

    ::-webkit-scrollbar{
        width: 12px;
    }

    ::-webkit-scrollbar-track{
        background-color: ${({theme}) => theme['DARK-900']};
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme['LIGHT-400']};;
    }

    ::-webkit-scrollbar-button {
        border-radius: 8px;
    }
`
