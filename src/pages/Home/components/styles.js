import styled from 'styled-components';

export const SwiperContainer = styled.div`
    position: relative;
    width: 100%;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 55px; 
        height: 100%;
        z-index: 2;
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
`;