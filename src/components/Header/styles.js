import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    height: 6.5rem;
    grid-area: 'header';

    background: ${({theme}) => theme['DARK-600']};
`

export const HeaderContainer = styled.header`
    width: 1120px;
    height: 6.5rem;
    margin: 0 auto;
        
    display: grid;
    grid-template-columns: max-content auto max-content max-content;
    align-items: center;

    gap: 32px;

    button {
        color: ${({theme}) => theme['LIGHT-100']};

        svg {
           font-size: 2rem;
        }
    }
`

export const ButtonRequests = styled.button`
    display: flex;
    align-items: center;
    padding: 0.75rem 2rem;
    border: 0;
    border-radius: 5px;
    background: ${({theme}) => theme['TOMATO-100']};
    color: ${({theme}) => theme['LIGHT-100']};
    cursor: pointer;

    img {
        margin-right: 4px;
    }
`

export const ButtonSignOut = styled.button`
    color: ${({theme}) => theme['LIGHT-100']};
    margin: 0;
    background: transparent;
    border: none;
    cursor: pointer;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
        height: 1.875rem;
        width: 1.875rem;
    }

    h1{
        font-size: 2rem;
        font-weight: bold;

        color: ${({theme}) => theme['LIGHT-100']}
    } 
`