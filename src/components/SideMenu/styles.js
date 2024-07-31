import styled from "styled-components";
// import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const Container = styled.div`
    max-width: 100%;
    margin: 1.75rem;
`

export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    svg {
        margin-left: 6rem;
        color: ${({ theme }) => theme['LIGHT-500']};
        font-size: 1.5rem;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
        height: 1.875rem;
        width: 1.875rem;
    }

    div {
        display: flex;
        flex-direction: column;

        h1 {
            margin: 0;
            font-size: 2rem;
            font-weight: bold;

            color: ${({ theme }) => theme['LIGHT-100']}
        } 

        p {
            font-size: 0.75rem;
            font-family: 'Roboto';
            text-align: right;
            color: ${({ theme }) => theme['CAKE-200']};
        }
    }
    
`