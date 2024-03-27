import React from "react";
import { useSelector } from "react-redux";
import './Banner';
import PlannedCosts from "../PlannedCosts/PlannedCosts";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import 'react-multi-carousel/lib/styles.css';
import { cardsOfSignedUser, cardsOfUnsignedUser } from '../../utils/cards'

export default function Banner() {

    const isSigned = useSelector((state) => state.isSigned);
    console.log(isSigned);
    const cards = isSigned ? (cardsOfSignedUser) : (cardsOfUnsignedUser)
    return (
        <>
            <section className="banner">
                {/* <Carousel responsive={responsive}
                    swipeable={true} >
                    {cards.map(item => (
                        <div key={item.id} className="banner__card swiper-slide">
                            <img className="banner__image" src={item.image} alt="#" />
                        </div>
                    ))}

                </Carousel> */}
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

                {isSigned ? (
                    <PlannedCosts />
                ) : (null)
                }
            </section>
        </>

    )
}