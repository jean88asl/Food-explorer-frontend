import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    height: 6.5rem;
    grid-area: 'header';

    background: ${({ theme }) => theme['DARK-600']};
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
        color: ${({ theme }) => theme['LIGHT-100']};

        svg {
           font-size: 2rem;
        }
    }    
`

export const SearchContainer = styled.div`
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

    img {
        margin-right: 4px;
    }
`

export const ButtonSignOut = styled.button`
    color: ${({ theme }) => theme['LIGHT-100']};
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
            color: ${({theme}) => theme['CAKE-200']};
        }
    }
    
`

