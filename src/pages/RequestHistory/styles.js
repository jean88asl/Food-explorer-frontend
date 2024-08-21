import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const Container = styled.div`
    margin: 0 auto;
    padding-top: 2rem;

    h1 {
        font-family: 'Poppins';
        font-size: 2rem;
        font-weight: normal;
        padding-bottom: 2rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        h1 {
            display: none;
        }
    }
`

export const HistoryTable = styled.div`
    flex: 1;
    overflow: auto;

    table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        text-align: left;
        margin: 0 auto 3rem;
        
        th, td {
            border: 1px solid ${({ theme }) => theme['DARK-1000']};
            font-family: 'Roboto';
            color: ${({ theme }) => theme['LIGHT-300']};
            font-size: 0.875rem;
            width: auto;
        }
        
        th {
            padding: 2rem;
            font-weight: bold;
            position: relative;
                        
            &:first-child {
                border-top-left-radius: 10px
            }

            &:last-child {
                border-top-right-radius: 10px;
            }
        }

        td {
            padding: 1rem 2rem;
        }

        .different-size{
            max-width: 45rem;
        }      
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        table {
            display: none;
        }
    }
`

export const SelectContainer = styled.section`
    height: 3rem;
    width: 100%;
    position: relative;

    select{
        height: 100%;
        width: 100%;
        appearance: none;
        -webkit-appearance: none; 
        -moz-appearance: none;
        background: ${({ theme }) => theme['DARK-900']};
        color: ${({ theme }) => theme['LIGHT-400']};
        padding: 0.5rem 1rem;
        border: 0;
        padding-right: 2rem;
    }

    > svg {
        position: absolute;
        font-size: 0.75rem;
        color: ${({ theme }) => theme['LIGHT-100']};
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none; 
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        margin-top: 1rem;
        
        select{
            border-radius: 8px;
        }
    }
`

export const ContainerStatus = styled.span`
    display: flex;
    align-items: center;
    text-transform: capitalize;
    gap: 7px;

    &::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({ theme, $statusName }) => {
        switch ($statusName) {
            case 'pendente':
                return theme['TOMATO-300'];
            case 'preparando':
                return theme['CARROT-100'];
            case 'entregue':
                return theme['MINT-100'];
            default:
                return theme['DARK-1000'];
        }
        }};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        padding: 0;
    }
`

export const SizeContainerMobile = styled.section`
    max-width: 372px;
    margin: 0 auto 2rem;
    display: none;
    flex-direction: column;
    gap: 1rem;

    h2 {
        padding: 3.5rem 0 1rem;
        font-size: 2rem;
    }
    
    div {
        width: 100%;
        min-height: 7.125rem;
        border: 2px solid ${({ theme }) => theme['DARK-1000']};
        border-radius: 8px;
        padding: 1rem 1.5rem;

        header{
            display: flex;
            align-items: center;
            margin-bottom: 1rem;

            span{
                padding-right: 2rem;
            }
        }
    }
  

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        display: flex;
    }
`