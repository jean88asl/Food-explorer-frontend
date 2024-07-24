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
                slidesPerView={3.5}
                allowSlideNext={true}
                spaceBetween={0}
                loop={true}
                navigation
                rewind={true}
                loopPreventsSliding={true}
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

