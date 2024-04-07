import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../Swiper/Swiper.css';

// import required modules
import { FreeMode } from 'swiper/modules';

export default function Slider({ cards }) {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={16}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {cards.map(item => (
                    <SwiperSlide>
                        <div key={item.id} className="banner__card">
                            <img className="banner__image" src={item.image} alt="#" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
