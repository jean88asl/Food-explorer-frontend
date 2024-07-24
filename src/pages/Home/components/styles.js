import styled from 'styled-components';

export const SwiperContainer = styled.div`
    position: relative;
    width: 100%;

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 25px; 
        pointer-events: none;
        z-index: 2;
    }

    &::before {
        left: 0;
        box-shadow: inset 20px 20px 0px 20px #ffffff;
    }

    &::after {
        right: 0;
        box-shadow: inset 20px 20px 150px 20px rgba(1, 23, 0, 0.5);
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