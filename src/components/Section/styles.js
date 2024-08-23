import styled from "styled-components"
import { appear } from "../../styles/animations"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const Container = styled.section`
    max-width: 69rem;
    margin-bottom: 1.5rem;
    overflow-x: none;
    animation: ${appear} 0.5ms cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation-timeline: view(block);
    animation-range: entry 20% cover 55%;
    
    h2 {
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 2rem;
        color: ${({ theme }) => theme['LIGHT-300']};
        margin-bottom: 1.375rem;
    }
    
    div {
        display: flex;        
    }

    @media (max-width: 1024px) {
        max-width: 990px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        max-width: 750px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 390px;

        h2 {
            font-size: 1.5rem;
        }

        div {
            --swiper-navigation-size: 1.5rem; 
        }
    }
`