import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const Container = styled.div`
    max-width: 100%;
    height: 100vh;
`

export const Content = styled.div`
    max-width: 71rem;
    margin: 0 auto;
    padding: 0 1.25rem; 
    min-height: calc(100vh - 208px);

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        min-height: calc(100vh - 163px);
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SX}) {
        padding: 0 10px;
    }    
`