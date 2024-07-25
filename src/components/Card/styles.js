import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    width: 19rem;
    min-height: 28.875rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    border-radius: 8px;
    padding: 1rem 1.125rem;

    background: ${({theme}) => theme['DARK-200']};

    img {
        width: 11rem;
        height: 11rem;
        object-fit: cover;
        border-radius: 50%;
    }

    a {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${({theme}) => theme['LIGHT-300']};
        font-family: 'Poppins', sans-serif;
        text-align: center;
    }

    p {
        color: ${({theme}) => theme['LIGHT-400']};
    }
`

export const PriceContainer = styled.span`
    display: block;
    font-size: 2.5rem;
    color: ${({theme}) => theme['CAKE-200']};
`

export const IconCard = styled.div`
    position: absolute;
    font-size: 22px;
    top: 16px; right: 18px;
    color: ${({theme}) => theme['LIGHT-300']};
    cursor: pointer;


    button {
        background: transparent;
        border: none;
        cursor: pointer;

        color: white;

        svg {
            height: 1.5rem;
            width: 1.5rem;
        }

        img {
            height: 1.5rem;
            width: 1.5rem;
        }
    }

    .liked {
        color: red;
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.875rem;
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
            color: ${({theme}) => theme['LIGHT-100']};
        }
    }

    .include {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 0.75rem 1.5rem;
        border: 0;
        border-radius: 5px;
        background: ${({theme}) => theme['TOMATO-100']};
        color: ${({theme}) => theme['LIGHT-100']};
        cursor: pointer;
    }
`
