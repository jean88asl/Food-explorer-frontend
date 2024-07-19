import styled from "styled-components"

export const Container = styled.section`
    width: 70rem;
    height: 33,125rem;
    margin: 0 auto 3.875rem;

    h2 {
        font-size: 2rem;
        font-weight: 400;
        font-family: "Poppins", sans-serif;
        color: ${({theme}) => theme['LIGHT-300']};
        margin-bottom: 1.375rem;
    }

    div {
        display: flex;
        gap: 1.6875rem;
        
        --swiper-navigation-size: 2.5rem;
        --swiper-navigation-top-offset: 50%;
        --swiper-navigation-color: white;
    }
`