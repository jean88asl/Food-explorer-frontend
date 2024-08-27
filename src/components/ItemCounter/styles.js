import { styled } from "styled-components"
import { appear } from "../../styles/animations"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
    animation: ${appear} 1650ms cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

    @media (max-width:${DEVICE_BREAKPOINTS.XS}) {
        gap: 0.5rem;
    }
`

export const GroupButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;

    span {
        color: ${({ theme }) => theme['LIGHT-300']};
        font-size: 1.5rem;
    }

    button {
        display: flex;
        align-items: center;
        background: transparent;
        border: 0;
        cursor: pointer;
    }

    @media (max-width:${DEVICE_BREAKPOINTS.XS}) {
       font-size: 1rem;
    }
`

const buttonDefault = styled.button`
    display: flex;
    align-items: center;
    border: 0;
    cursor: pointer;
    color: ${({ theme }) => theme['LIGHT-100']};
`

export const QuantityButton = styled(buttonDefault)`
    background: transparent;
`

export const ExternalButton = styled(buttonDefault)`
    gap: 4px;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    background: ${({ theme }) => theme['TOMATO-100']};

    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {        
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;        
    }

    @media (max-width:${DEVICE_BREAKPOINTS.XS}) {
        padding: 0.5rem 1rem;
    }
`