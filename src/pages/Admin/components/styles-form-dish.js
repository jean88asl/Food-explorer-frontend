import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;

    fieldset {
        border: none;
        padding: 0;

        font-size: 2rem;
        font-family: 'Poppins';
        color: ${({ theme }) => theme['LIGHT-300']}
    }

    div {
        display: flex; 
        width: 100%;
    }

    .name {
        max-width: 28.9375rem;
    }

    .ingredients {
        max-width: 52.3125rem;
    }    
`