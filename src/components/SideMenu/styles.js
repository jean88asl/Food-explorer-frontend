import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints";

export const Container = styled.aside`
    height: 100vh;
    display: none;
    flex-direction: column;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 50%;
        position: absolute;
        z-index: 2;
        display: none;

        &[data-menu-is-open="true"] {
            display: block;
        }
    }  

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
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
    height: 78px;
    background-color: ${({ theme }) => theme['DARK-700']};
    padding: 0;
    
    button {
        color: ${({ theme }) => theme['LIGHT-100']};
        background: transparent;
        display: flex;
        align-items: end;
        margin: 2rem 1.5rem 0;
        padding: 0;
        border: 0;
        
        font-size: 1.3125rem;

        svg{
            margin: 0;
            font-size: 22px;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        button {
            margin: 3.5rem 1.5rem 0;
        }
    }
`

export const MenuContent = styled.section`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme['DARK-400']};
    padding: 2.25rem 1.75rem 1rem;    
`

export const LogOut = styled.button`    
   padding: 10px;
   background: transparent;
   border: 0;
   border-bottom: 1px solid ${({theme}) => theme['DARK-1000']};
   color: ${({theme}) => theme['LIGHT-300']};
   width: 100%;
   margin-top: 2.5rem;
   text-align: left;
   font-family: 'Poppins';
`
