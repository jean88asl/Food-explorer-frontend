import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const Container = styled.section`
    max-width: 71rem;
    margin: 0 auto 1.5rem;
    overflow-x: none;
    
    h2 {
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 2rem;
        color: ${({theme}) => theme['LIGHT-300']};
        margin-bottom: 1.375rem;
    }
    
    div {
        display: flex;
        
        --swiper-navigation-size: 2.5rem;
        --swiper-navigation-top-offset: 50%;
        --swiper-navigation-color: white;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 100%;
        margin-left: 44px;
        max-width: calc(100vw - ((100vw - 426px) / 2));

        h2 {
            font-size: 1.5rem;
        }

        div {
            --swiper-navigation-size: 1.5rem; 
        }
    }
`