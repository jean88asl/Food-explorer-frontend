import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

import { appear } from "../../styles/animations"

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 208px);

    h1 {
        margin: 0;
        padding: 2rem 0;
        font-family: 'Poppins';
        font-weight: normal;
        font-size: 2rem;
    }

    main{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
        overflow-y: auto;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        height: calc(100vh - 156px);
        
        main {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 372px;
        margin: auto;
        main {
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            margin-left: 0.75rem;
        }
    }
`

export const Card = styled.article`
    width: 100%;
    height: 6.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
    animation: ${appear} 1200ms cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

    img {
        height: 4.5rem;
        width: 4.5rem;
        object-fit: cover;
        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
    }
    
    a {
        font-family: 'Poppins';
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.5;
        color: ${({theme}) => theme['LIGHT-300']};
        cursor: pointer;
    }
    
    button {
        background: transparent;
        border: 0;
        color: ${({ theme }) => theme['TOMATO-400']};
        font-size: 0.75rem;
        cursor: pointer;
        text-align: left;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        a {
            font-size: 1.5rem;
            margin-bottom: 8px;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        a {
            font-size: 1.25rem;
            line-height: 2;
            margin-bottom: 0px;
        }
    }
`