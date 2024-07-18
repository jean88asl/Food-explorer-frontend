import styled from "styled-components";

export const ContainerFooter = styled.div`
    grid-area: 'footer';
    width: 100%;
    /* position: sticky; */
    bottom: 0;

    background: ${({theme}) => theme['DARK-600']};
`

export const FooterContent = styled.footer`
    width: 70rem;
    height: 6.5rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    div {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        h2 {
            font-size: 1.75rem;
            color: ${({theme}) => theme['LIGHT-700']}
        }
    }

    p {
        color: ${({theme}) => theme['LIGHT-200']}
    }
`