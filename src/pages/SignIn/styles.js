import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const SignInContainer = styled.div`
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;
    color: ${({ theme }) => theme['LIGHT-400']};

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 19.125rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: block;
        width: 90%;
        margin: auto;
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

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
       justify-content: center;
       margin-top: 11.5625rem;
    }
`

export const SignInForm = styled.form`
    width: 29.75rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
    background: ${({ theme }) => theme['DARK-700']};
    padding: 4rem;
    border-radius: 1rem;

    h2 {
        text-align: center;
        font-family: 'Poppins';
        font-weight: 400;
    }

    div {
        display: flex;
        flex-direction: column;

        label {
            padding-bottom: 0.5rem;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
       width: 100%;
       padding: 0;
       background: none;

       h2 {
        display: none;
       }
    }
`

export const SignInLink = styled.a`
    display: flex;
    justify-content: center;
    font-family: "Poppins";
    font-size: medium;

    color: ${({ theme }) => theme['LIGHT-100']}
`
