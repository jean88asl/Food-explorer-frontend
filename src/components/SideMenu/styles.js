import styled from "styled-components";
import { openMenu, closeMenu } from "../../styles/animations"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints";

export const Container = styled.aside`
    height: 100vh;
    display: none;
    flex-direction: column;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 50%;
        position: absolute;
        z-index: 2;
        border-right: 1px solid ${({theme}) => theme['DARK-1000']};
        
        &[data-menu-is-open="true"] {
            animation: ${openMenu} 850ms cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards;
            display: block;
        }

        &[data-menu-is-open="false"] {
            animation: ${closeMenu} 850ms cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
            display: block;
        }
    }  

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 100%;
        position: absolute;
        z-index: 2;
        display: none;
        
        &[data-menu-is-open="true"] {
            animation: ${openMenu} 850ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            display: block;
        }

        &[data-menu-is-open="false"] {
            animation: ${closeMenu} 850ms cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
            display: block;
        }
    }  
`

export const Header = styled.header`
    width: 100%;
    height: 7.125rem;;
    background-color: ${({ theme }) => theme['DARK-700']};
    padding: 0;
    
    button {
        color: ${({ theme }) => theme['LIGHT-100']};
        background: transparent;
        display: flex;
        align-items: center;
        padding: 26px 18px;
        border: 0;
        
        font-size: 1.3125rem;

        svg{
            margin: 0;
            font-size: 22px;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        button {
            padding: 44px 26px; 
        }    
    }
`

export const MenuContent = styled.section`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme['DARK-400']};
    padding: 2.25rem 1.75rem 1rem;

    .buttons-group {
        margin-top: 2.5rem;
    }
`

export const BtnSideBar = styled.button`    
   padding: 10px;
   background: transparent;
   font-size: 1.5rem;
   display: flex;
   align-items: start;
   gap: 6px;
   border: 0;
   border-bottom: 1px solid ${({ theme }) => theme['DARK-1000']};
   color: ${({ theme }) => theme['LIGHT-300']};
   width: 100%;
   text-align: left;
   font-family: 'Poppins';
`
