import React from "react";
import {useSelector } from "react-redux";
import './Banner';
import PlannedCosts from "../PlannedCosts/PlannedCosts";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { cardsOfSignedUser, cardsOfUnsignedUser } from '../../utils/cards'
import { store } from '../../store/store.jsx';

const responsive = {
    mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 2
    }
};
//не удается добавить тени в слайдер
export default function Banner() {

    const isSigned = useSelector((state) => state.isSigned);
    
    const cards = isSigned ? (cardsOfSignedUser) : cardsOfUnsignedUser
    return (
        <>
            <section className="banner">
                <Carousel responsive={responsive}
                    swipeable={true} >
                    {cards.map(item => (
                        <div key={item.id} className="banner__card">
                            <img className="banner__image" src={item.image} alt="#" />
                        </div>
                    ))}

                </Carousel>
                {isSigned ? (
                    <PlannedCosts />
                ) : (null)
                }
            </section>
        </>

    )
}