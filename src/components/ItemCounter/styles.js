import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const GroupButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;

    span {
        color: ${({theme}) => theme['LIGHT-300']};
        font-size: 1.5rem;
    }

    button {
        display: flex;
        align-items: center;
        background: transparent;
        border: 0;
        cursor: pointer;
    }
`

const buttonDefault = styled.button`
    display: flex;
    align-items: center;
    border: 0;
    cursor: pointer;
    color: ${({theme}) => theme['LIGHT-100']};
`

export const QuantityButton = styled(buttonDefault)`
    background: transparent;
`

export const ExternalButton = styled(buttonDefault)`
    gap: 4px;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    background: ${({theme}) => theme['TOMATO-100']};
`