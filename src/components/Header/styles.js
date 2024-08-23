import styled from "styled-components";
import { appearContentHeader } from "../../styles/animations"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"
import { Link } from "react-router-dom";

export const Container = styled.div`
    max-width: 100%;
    height: 6.5rem;
    grid-area: header;

    background: ${({ theme }) => theme['DARK-600']};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        height: 7.125rem;
    }    
`

export const HeaderContainer = styled.header`
    max-width: 71rem;
    height: 6.5rem;
    margin: 0 auto;
    padding: 0 1.25rem;
        
    display: grid;
    grid-template-columns: max-content auto max-content max-content max-content;
    align-items: center;
    animation: ${appearContentHeader} 850ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    gap: 32px;

    button {
        color: ${({ theme }) => theme['LIGHT-100']};

        svg {
           font-size: 2rem;
        }
    }
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 100%;
        grid-template-columns: max-content auto max-content;
        padding: 2rem 1.5rem;
        align-items: center;
        gap: 0;

        span {
            display: none;
        }

        .admin-login {
            display: none;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        max-width: 372px;
        padding: 3.5rem 0rem 1.5rem;
    }     
`

export const ContainerFavoriteis = styled.section`
    button {
        background: transparent;
        border: 0;
        color: ${({ theme }) => theme['DARK-1000']};
        cursor: pointer;
        margin: 0;
        transition: color 250ms ease-in;

        &:hover {
            color: #e5fa0a;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`

export const HistoryLink = styled(Link)`
    color: ${({theme}) => theme['LIGHT-100']};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`

export const ButtonRequests = styled.button`
    width: 13.5rem;
    height: 3.5rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: 'Poppins';
    font-size: 0.875rem;
    border: 0;
    border-radius: 5px;
    background: ${({ theme }) => theme['TOMATO-100']};
    color: ${({ theme }) => theme['LIGHT-100']};
    cursor: pointer;
    position: relative;
    
    .user-login {
        position: absolute;
        top: -20%; right: -5px;
        display: none;

        width: 20px;
        height: 20px;

        align-items: center;
        justify-content: center;

        border-radius: 50%;

        background: ${({ theme }) => theme['TOMATO-100']};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 2.375rem;
        height: 2.375rem;
        background: transparent;

        span {
            display: none;
        }

        .user-login {
            display: flex;
        }
    }
`

export const ButtonSignOut = styled.button`
    color: ${({ theme }) => theme['LIGHT-100']};
    margin: 0;
    background: transparent;
    border: none;
    cursor: pointer;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;    

    img {
        height: 1.875rem;
        width: 1.875rem;
    }

    div {
        h1 {
            margin: 0;
            font-size: 1.5rem;
            font-weight: bold;
            
            a {
                color: ${({ theme }) => theme['LIGHT-100']};
            }
        } 

        p {
            font-size: 0.75rem;
            font-family: 'Roboto';
            text-align: right;
            color: ${({ theme }) => theme['CAKE-200']};
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        gap: 6px;
        justify-content: center;

        img {
            width: 1.5rem;
            height: 1.5rem;
        }

        div {
            display: flex;
            align-items: center;
            gap: 8px
        }
    }    
`

export const BtnMenu = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: none;

    svg {
        font-size: 10px;
        transform: scale(1.4);
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: block;        
    }
`