import { keyframes } from "styled-components";

export const appear = keyframes`
    0% {
        filter: blur(12px);
        opacity: 0;
    }
    100% {
        filter: blur(0px);
        opacity: 1;
    }     
`

export const appearContentHeader = keyframes`
    0% {
        transform: translateY(-1000px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }    
`

export const heartBeat = keyframes`
    from {    
        transform: scale(1);
        transform-origin: center center;
        animation-timing-function: ease-out;
    }
    10% {
        transform: scale(0.91);
        animation-timing-function: ease-in;
    }
    17% {
        transform: scale(0.98);
        animation-timing-function: ease-out;
    }
    33% {
        transform: scale(0.87);
        animation-timing-function: ease-in;
    }
    45% {
        transform: scale(1);
        animation-timing-function: ease-out;
    }
`

export const textAnimation = keyframes`
  0% {
    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
    transform-origin: 0% 50%;
    filter: blur(40px);
    opacity: 0;
  }
  
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }    
`

export const openMenu = keyframes`
    0% {
        transform: translateX(-1000px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }    
`

export const openMenuBtn = keyframes`
    0% {
    transform: rotate(0);
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg);
    opacity: 0;
  }
`

export const closeMenu = keyframes`
    0% {
        transform: translateX(-1000px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`
export const spinnerAnimation = keyframes`
    0%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
    } 50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }    
`

