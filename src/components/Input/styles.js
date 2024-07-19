import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme['DARK-900']};
    border-radius: 8px;

    :focus {
        border: green;
    }

    input{
        width: 100%;
        padding: 0.875rem;
        border: 0;
        border-radius: 8px;
        color: ${({ theme }) => theme['LIGHT-400']};
        background: ${({ theme }) => theme['DARK-900']};

        &:placeholder {
             color: ${({ theme }) => theme['LIGHT-500']}
        }
    }

    svg {
        margin-left: 6rem;
        color: ${({ theme }) => theme['LIGHT-500']};
        font-size: 1.5rem;
    }
`