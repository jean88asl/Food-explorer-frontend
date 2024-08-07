import styled from "styled-components";

export const TagContainer = styled.div`
    padding: 8px;
    background: ${({theme}) => theme['DARK-1000']};
    color: ${({theme}) => theme['LIGHT-100']};
    border-radius: 5px;
    display: flex;
    align-items: center;
`