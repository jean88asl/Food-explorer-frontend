import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
   
    main {
        min-height:  calc(100vh - 13rem);
        width: 70rem;
        margin: 0 auto
    }
`

export const ContainerContent = styled.div`
    display: grid;
    grid-template-columns: minmax(20.8125rem, 27.75rem) minmax(22.0625rem, 100%);

    margin-top: 2rem;
    gap: 4.6875rem;

    h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
`

export const OderInformation = styled.div`
    width: 100%;
    height: auto;   

    footer {
        padding: 1rem 0;
        font-size: 1.25rem;
        font-family: 'Poppins';
    }
`

export const PayInfo = styled.div`
    width: 100%;
    
`