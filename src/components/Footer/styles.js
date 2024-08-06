import styled from "styled-components";
import { appear } from "../../styles/animations"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints";

export const ContainerFooter = styled.div`
    grid-area: 'footer';
    width: 100%;
    bottom: 0;

    background: ${({ theme }) => theme['DARK-600']};
`

export const FooterContent = styled.footer`
    max-width: 71.25rem;
    height: 6.5rem;
    margin: auto;
    padding: 0 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    animation: ${appear} 0.5ms cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation-timeline: view();
    animation-range: entry 10% cover 10%;
    
    div {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        img {
            width: 1.875rem;
            height: 1.875rem;
        }

        h2 {
            font-size: 1.5rem;
            color: ${({ theme }) => theme['LIGHT-700']}
        }
    }

    p {
        color: ${({ theme }) => theme['LIGHT-200']};
        font-size: 0.875rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        max-width: 376px;
    }
`