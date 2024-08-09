import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints";

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

    img {
        height: 4.5rem;
        width: 4.5rem;
        object-fit: cover;
        border-radius: 50%;
    }

    h2 {
        font-family: 'Poppins';
        font-weight: normal;
        font-size: 1.25rem;
        line-height: 1.5;
    }

    button {
        background: transparent;
        border: 0;
        color: ${({theme}) => theme['TOMATO-400']};
        font-size: 0.75rem;
        cursor: pointer;
    }
`