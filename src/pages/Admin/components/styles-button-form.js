import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const Container = styled.button`
    padding: 0.75rem 1.5rem;
    border: 0;
    border-radius: 5px;
    background: ${({theme}) => theme['TOMATO-400']};
    color: ${({theme}) => theme['LIGHT-100']};
    font-family: 'Poppins';
    cursor: pointer;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 100%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
        padding: 0.75rem 1rem;;
    }
`