import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 0.75rem;
    border: 0;
    border-radius: 5px;
    background: ${({ theme }) => theme['TOMATO-100']};
    color: ${({ theme }) => theme['LIGHT-100']};
    font-family: "Poppins";
    font-size: medium;
    cursor: pointer;
`