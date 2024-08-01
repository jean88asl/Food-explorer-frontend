/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { Card } from "../../../components/Card";
import { SwiperContainer } from './styles';

export function SwiperComponent({ items }) {
    return (
        <SwiperContainer>
            <Swiper
                modules={[Pagination, Navigation]}
                allowSlideNext={true}
                spaceBetween={0}
                loop={true}
                rewind={true}
                navigation={true}
                loopPreventsSliding={true}
                breakpoints={{
                    425: {
                      slidesPerView: 2,
                      spaceBetween: 18,

                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                      navigation: false,
                    },
                    1024: {
                      slidesPerView: 3.5,
                      spaceBetween: 27,
                    },
                  }}
            >
                {items.map(item => (
                    <SwiperSlide key={item.id}>
                        <Card
                            className="teste"
                            dishName={item.name}
                            description={item.description}
                            price={item.price}
                            url={item.image_dish}
                            id={item.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperContainer>
    );
}

