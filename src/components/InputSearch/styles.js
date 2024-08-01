import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints";

export const Container = styled.div`
    width: auto;
    position: relative;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme['DARK-900']};
    border-radius: 8px;

    button{
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
    }

    input {
        width: 100%;
        height: 3rem;
        padding: 0.875rem 0 0.875rem 1rem;
        border: 0;
        border-radius: 8px;
        color: ${({ theme }) => theme['LIGHT-400']};
        background: ${({ theme }) => theme['DARK-900']};

        &::placeholder {
            color: ${({ theme }) => theme['LIGHT-500']};
        }
    }

    div {
        position: absolute;
        top: 3rem;
        width: 100%;
        background: ${({ theme }) => theme['DARK-900']};
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-height: 200px;
        overflow-y: auto;
        z-index: 2;

        a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            padding: 0.875rem ;
            text-decoration: none;
            color: white;
        }

        a:hover {
            background-color: #FFFFFF20; 
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`