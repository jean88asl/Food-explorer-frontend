import styled from "styled-components";

const DefaultSpan = styled.span`
    height: 2rem;
    display: flex;
    gap: 8px;
    border-radius: 8px;
    padding: 10px 1rem;

    button {
        display: flex;
        align-items: center;
        background: transparent;
        border: none;
        cursor: pointer;
    }
`

export const Container = styled(DefaultSpan)`
    display: flex;
    align-items: center;
    height: 2rem;
    min-width: auto;
    background: ${({ theme, $isnew }) => $isnew ? `transparent` : `${theme['LIGHT-600']}`};
    border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme['LIGHT-500']}` : "none"};
    
    input {
        background: transparent;
        border: none;
        max-width: 4.5rem;
        color: ${({ theme, $isnew }) => $isnew ? `${theme['LIGHT-500']}` : `${theme['LIGHT-100']}`};
        text-align: center
    }

    svg {
        color:  ${({ theme, $isnew }) => $isnew ? `${theme['LIGHT-500']}` : `${theme['LIGHT-100']}`};
    }
`