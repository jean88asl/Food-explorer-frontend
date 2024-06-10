import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const SignInContainer = styled.div`
    width: 320px;
    height: 100vh;
    margin: 0 auto;
    color: ${({ theme }) => theme['LIGHT-400']};
    display: grid;
    grid-area: 
    'header' 
    'form';

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      
    }       
`
export const SignInHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-bottom: 4.5rem;

    svg {
        width: 2.625rem;
        height: 2.625rem;
    }

    h1 {
        font-size: 2.25rem;
        font-weight: bold;
    }
`

export const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;

    div {
        display: flex;
        flex-direction: column;

        label {
            padding-bottom: 0.5rem;
        }

        input {
            padding: 0.875rem;
            border: 0;
            border-radius: 8px;
            color: ${({ theme }) => theme['LIGHT-400']};
            background: ${({ theme }) => theme['DARK-900']};

            &::placeholder {
                color: ${({ theme }) => theme['LIGHT-500']}
            }
        }
    }

    button {
        padding: 0.75rem;
        border: 0;
        border-radius: 5px;
        background: ${({ theme }) => theme['TOMATO-100']};
        color: ${({ theme }) => theme['LIGHT-100']};
        font-family: "Poppins";
        font-size: medium;
        cursor: pointer;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 950px;
    }  
`

export const SignInLink = styled.a`
    display: flex;
    justify-content: center;
    font-family: "Poppins";
    font-size: medium;

    color: ${({ theme }) => theme['LIGHT-100']}
`
