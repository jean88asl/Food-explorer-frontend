import styled from "styled-components";

export const Container = styled.div`
    display: block;
    width: 70rem;
    margin: 2.5rem auto;
    
    a {
        margin: 1.5rem 0 2.625rem;
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        font-weight: bold;
        font-family: 'Poppins';
        color: ${({ theme }) => theme['LIGHT-300']};
    }
`