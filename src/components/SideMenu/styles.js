import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints";
// import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const Container = styled.aside`
    height: 100vh;
    display: none;
    flex-direction: column;


    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 100%;
        position: absolute;
        z-index: 2;
        display: none;

        &[data-menu-is-open="true"] {
            display: block;
        }
    }   
`

export const Header = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme['DARK-700']};
    padding: 3.5rem 1.75rem 1.5rem;
    
    button {
        color: ${({ theme }) => theme['LIGHT-100']};
        background: transparent;
        border: 0;
        display: flex;
        align-items: center;
        font-size: 1.3125rem;

        svg{
            font-size: 18px;
        }
    }
`

export const MenuContent = styled.section`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme['DARK-400']};
    padding: 2.25rem 1.75rem 1rem;    
`
