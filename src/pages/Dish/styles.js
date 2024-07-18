import styled from "styled-components";

export const DishContainer = styled.div`
    max-width: 100%;

    main {
        min-height:  calc(100vh - 14.5rem)
    }
`

export const DishLink = styled.div`
    display: block;
    width: 70rem;
    margin: auto;
    
    a {
        margin: 1.5rem 0 2.625rem;
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        font-weight: bold;
        font-family: 'Poppins';
        color: ${({theme}) => theme['LIGHT-300']};
    }
`

export const DishDetails = styled.div`
    width: 70rem;
    height: 24.125;

    margin: 0 auto;
    display: flex;
    gap: 2.875rem;
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 24.125rem;
        height: 24.125rem;
        border-radius: 50%;
        object-fit: cover;
    }
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
    color: ${({theme}) => theme['LIGHT-300']};

    h2 {
        font-size: 2.5rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
    }
    
    p {
        font-size: 1.5rem;
        line-height: 1.4;
        font-weight: 300;
    }
`

export const TagContainer = styled.div`
    display: flex;
    gap: 8px;
    margin: 1.5rem 0 3rem;
`
