import React from 'react';
import { SwiperSlide } from 'swiper/react';

function BannerCardsList({cards}) {
    return (
        <>
        {cards.map(item => (
            <SwiperSlide>
                <div key={item.id} className="banner__card">
                    <img className="banner__image" src={item.image} alt="#" />
                </div>
            </SwiperSlide>
        ))}
        </>
    );
}

export default BannerCardsList;