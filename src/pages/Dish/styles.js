import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const Container = styled.div`
    width: 100%;

    main {
        height:  calc(100vh - 15rem);
        margin: 0 auto;
        max-width: 100%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        min-height: auto;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        main {
            max-width: 316px;
            padding: 0;
        }
    }
`

export const DishLink = styled.nav`
    display: block;
    margin: auto;
    margin: 1.5rem 0 2.625rem;
    
    a {
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        font-weight: bold;
        font-family: 'Poppins';
        color: ${({ theme }) => theme['LIGHT-300']};
    }
`

export const DishDetails = styled.div`
    display: flex;
    /* width: 100%; */
    gap: 2.875rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: block;
    }
`

export const ImageContainer = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 24.32rem;
        max-height: 24.32rem;
        border-radius: 50%;
        object-fit: cover;
    }  
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
    color: ${({ theme }) => theme['LIGHT-300']};

    h2 {
        font-size: 2.5rem;
        font-weight: 500;
        margin: 1rem 0 1.5rem;
    }
    
    p {
        font-size: 1.5rem;
        line-height: 1.4;
        font-weight: 300;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        text-align: center;

        .bnt-dish {
            width: 100%;
        }
    }
`

export const TagContainer = styled.div`
    display: flex;
    gap: 8px;
    margin: 1.5rem 0 3rem;
    flex-wrap: nowrap;
`
