import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    section {
        display: flex;
        flex-direction: column;
        line-height: 1.2;

        color: ${({theme}) => theme['LIGHT-200']};

        h1 {
            font-size: 4rem;
            margin: 0;
        }

        p {
            color: ${({theme}) => theme['LIGHT-400']};
        }

        a {
            color: ${({theme}) => theme['CAKE-200']};
        }
    }
`