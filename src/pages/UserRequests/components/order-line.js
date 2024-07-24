import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    div {
        height: 104px;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }
`
export const OrderImage = styled.img`
        height: 4.6875rem;
        width: 4.6875rem;
        border-radius: 50%;
        object-fit: cover;
`

export const ItemInfo = styled.section`
    display: inline-block;
    line-height: 1.5;

    p {
        font-size: 1.25rem;
        font-family: 'Poppins';

        span {
            font-size: 0.75rem;
            font-family: 'Roboto';
            color: ${({theme}) => theme['LIGHT-400']}
        }
    }

    button{
        background: transparent;
        border: 0;
        color: ${({theme}) => theme['TOMATO-400']};
        font-size: 0.75rem;
        cursor: pointer;
        font-family: 'Roboto';
    }
`

export const OrderTotals = styled.footer`
    padding: 1rem 0;
    font-size: 1.25rem;
    font-family: 'Poppins';
`