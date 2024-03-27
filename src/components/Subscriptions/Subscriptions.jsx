import React from "react";
import './Subscriptions.css'
import { useSelector } from "react-redux";
import ButtonNavigation from "../ButtonNavigation/ButtonNavigation";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import subscriptions from "../../utils/subscriptions";
import SubscriptionsCards from "../SubscriptionsCards/SubscriptionsCards";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

// const responsive = {
//     mobile: {
//         breakpoint: { max: 700, min: 0 },
//         items: 2
//     }
// };

export default function Subscriptions() {
    const isSigned = useSelector((state) => state.isSigned);
    return (
        <>
            <section className="subscriptions">
                <div className="subscription__nav">
                    <h2 className="subscriptions__title">Мои подписки</h2>
                    <ButtonNavigation
                        path={'subscribe'} />
                </div>
                {isSigned ? (
                    // <Carousel responsive={responsive}
                    //     swipeable={true}>
                    //     {subscriptions.map(item => (
                    //         <SubscriptionsCards 
                    //         id={item.id}
                    //         cost={item.cost}
                    //         logo={item.logo}
                    //         period={item.period}
                    //         title={item.title}
                    //         duration={item.duration}
                    //          />
                    //     ))}
                    // </Carousel>
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
                        {subscriptions.map(item => (
                            <SwiperSlide>
                                <SubscriptionsCards
                                    id={item.id}
                                    cost={item.cost}
                                    logo={item.logo}
                                    period={item.period}
                                    title={item.title}
                                    duration={item.duration} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div>
                        <p className="subscriptions__proposal">Подключите подписку
                            из каталога или перенесите существующую чтобы получать кэшбек
                            и управлять своими подписками</p>
                        <div className="subscriptions__none">
                            <ButtonSubmit
                                modificator={'light'}
                                buttonTitle={'Искать мои подписки'}
                                path={'/'}
                            />
                            <ButtonSubmit
                                modificator={'color'}
                                buttonTitle={'Перейти в каталог'}
                                path={'/'} />
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}