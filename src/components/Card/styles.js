import styled from "styled-components"
import { heartBeat } from "../../styles/animations"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 28.875rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    border-radius: 8px;
    padding: 1rem 1.125rem;

    background: ${({ theme }) => theme['DARK-200']};

    img {
        width: 11rem;
        height: 11rem;
        object-fit: cover;
        border-radius: 50%;
    }

    a {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${({ theme }) => theme['LIGHT-300']};
        font-family: 'Poppins', sans-serif;
        text-align: center;
    }

    article {
        p {
            color: ${({ theme }) => theme['LIGHT-400']};
            text-align: center;
        }
    }
        

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        align-items: center;
        article {
            display: none;
        }
    }
`

export const PriceContainer = styled.span`
    display: block;
    font-size: 2.5rem;
    color: ${({ theme }) => theme['CAKE-200']};
`

export const IconCard = styled.div`
    position: absolute;
    font-size: 22px;
    top: 16px; right: 18px;
    color: ${({ theme }) => theme['LIGHT-300']};
    cursor: pointer;

    button {
        background: transparent;
        border: none;
        cursor: pointer;

        color: white;

        svg {
            height: 1.5rem;
            width: 1.5rem;
        }

        img {
            height: 1.5rem;
            width: 1.5rem;
        }
    }

    .liked {
        color: red;
        animation: ${heartBeat} 2.5s ease-in-out both;
    }
`
