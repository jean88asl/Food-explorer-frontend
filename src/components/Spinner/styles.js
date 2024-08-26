import styled from "styled-components"
import { spinnerAnimation } from "../../styles/animations/index"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 208px);
    display: flex;
    align-items: center;
    justify-content: center;
    
    section {
        position: relative;
        width: 6rem;
        height: 6rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        height: calc(100vh - 156px);
    }
`

const DefaultContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({theme}) => theme["DARK-1000"]};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    animation: ${spinnerAnimation} 2.0s infinite ease-in-out;
` 

export const SpinnerContainerOne = styled(DefaultContainer)`
`

export const SpinnerContainerTwo = styled(DefaultContainer)`
    animation-delay: -1.0s;
`