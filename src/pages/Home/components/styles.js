import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../../styles/layoutBreakpoints"

export const SwiperContainer = styled.div`
    position: relative;
    width: 100%;

    --swiper-navigation-size: 2.5rem;
    --swiper-navigation-top-offset: 50%;
    --swiper-navigation-color: white;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 55px; 
        height: 100%;
        z-index: 2; /* Z-index dos gradientes */
        transition: opacity 0.4s ease;
    }
    
    &::before {
        left: 0;
        background: linear-gradient(90deg, #000A0F 15%, rgba(0, 10, 15, 0.1) 95%);
    }

    &::after {
        right: 0;
        background: linear-gradient(90deg, rgba(0, 10, 15, 0.1) 0%,  #000A0F 95%);
    }

    .swiper {
        width: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Ajustando o z-index dos botões de navegação */
    .swiper-button-next,
    .swiper-button-prev {
        z-index: 3; /* Maior que o z-index dos pseudo-elementos */
        padding: 0 2.8rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        .swiper-button-next,
        .swiper-button-prev {
            display: none;
        }        
    }
`;