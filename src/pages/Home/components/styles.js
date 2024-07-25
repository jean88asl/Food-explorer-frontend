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
        width: 45px; 
        pointer-events: none;
        z-index: 2;
    }

    &::before {
        left: 0;
        box-shadow: inset 20px 20px 350px 20px rgba(0, 0, 0, 0.5);
    }

    &::after {
        right: 0;
        box-shadow: inset 20px 20px 350px 20px rgba(0, 0, 0, 0.5);
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