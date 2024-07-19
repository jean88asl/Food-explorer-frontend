import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas: 
    'header'
    'content'
    'footer';
    grid-template-rows: max-content 100% max-content;
`

export const Content = styled.div`
    grid-area: 'content';
`

export const Banner = styled.div`
    width: 70rem;
    margin: 0 auto 3.8125rem;
`

export const BannerContent = styled.section`
    div {
        display: flex;
        flex-direction: column;

        margin-top: 10.25rem;
        
        width: 70rem;
        height: 16.25rem;

        border-radius: 8px;

        padding: 6rem 0 0 37.375rem;
        background: ${({ theme }) => theme['GRADIENT-200']};

        font-family: 'Poppins';

        position: absolute;
        z-index: -1;

        h2 {
            font-weight: 500;
            font-size: 2.3rem;
            margin-bottom: 8px;
        }

        p {
            font-size: 0.8125rem;
        }
    }

    img {
        width: 41rem;
        height: 25.75rem;
        position: relative;
        top: 1.6rem; left: -4.2rem;
        z-index: 1;
    }
`
