import React from "react";
import { useSelector } from "react-redux";
import './Banner';
import PlannedCosts from "../PlannedCosts/PlannedCosts";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { cardsOfSignedUser, cardsOfUnsignedUser } from '../../utils/cards'

export default function Banner() {

    const isSigned = useSelector((state) => state.isSigned);
    const cards = isSigned ? (cardsOfSignedUser) : (cardsOfUnsignedUser)
    return (
        <>
            <section className="banner">
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
                        <SwiperSlide key={item.id}>
                            <div className="banner__card">
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