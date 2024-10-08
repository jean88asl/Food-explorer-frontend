import styled from "styled-components";
import { appear } from "../../styles/animations"
import { DEVICE_BREAKPOINTS } from "../../styles/layoutBreakpoints"

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas: 
    'header'
    'content'
    'footer';
    grid-template-rows: max-content 100% max-content;
`

export const Content = styled.div`
    grid-area: content;
    max-width: 100%;
    margin: 0 auto 1.5rem; 
`

export const Banner = styled.div`
    width: 100%;
    height: 524;
    margin: 70px auto 0;
    position: relative;

    display: flex;    
    align-items: center;

    div {
        position: absolute;
        width: 100%; 
        height: 16.25rem;
        background: ${({ theme }) => theme['GRADIENT-200']};
        border-radius: 8px;
        animation: ${appear} 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        z-index: -2;
    }   

    img {
        max-width: 41rem;
        max-height: 25.75rem;
        position: relative;
        top: -3.9rem; 
        left: -4.2rem;
        z-index: -1;
        animation: ${appear} 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }

    section {
        position: relative;
        margin-left: -6.25rem;
        color: ${({ theme }) => theme['LIGHT-300']};
        animation: ${appear} 1.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

        h2 {
            font-family: 'Poppins';
            font-size: 2.5rem;
            margin-bottom: 8px;
            font-weight: 500;
        }

         p {
             font-size: 1rem;
             font-family: 'Roboto';
         }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        max-width: 100%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        margin-top: 44px;

        div {
            height: 120px
        } 

        img {
            width: 191px;
            height: 149px;
            top: -0.8rem; left: -1.4rem;
        }

        section {
            margin-left: -1rem;
           
            h2 {
                font-size: 1.4rem;
            }

            p {
                font-size: 0.875rem;
            }
        }

    }   
`