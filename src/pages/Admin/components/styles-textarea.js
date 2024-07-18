import styled from "styled-components";

export const Container = styled.textarea`
    resize: none;
    width: 100%;
    height: 10.75rem;
    padding: 12px 14px;
    border: 0;
    border-radius: 8px;
    background: ${({ theme }) => theme['DARK-800']};
    color: ${({ theme }) => theme['LIGHT-500']}   
`