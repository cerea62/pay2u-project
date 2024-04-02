import React, { useEffect, useState } from 'react';
import './ServicesCardList.css'
import ServicesCard from '../ServicesCard/ServicesCard';
import servicesCards from '../../utils/servicesCards';
import api from '../../utils/Api';

function ServicesCardList() {
    // const [servicesCards, setServicesCards] = useState([]);

    // const getServicesCards = async () => {
    //     try {
    //         const cardData = await api.getServicesCards();
    //         if (cardData) {
    //             console.log(cardData)
    //             setServicesCards(cardData);
    //         }

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getServicesCards();
        // debugger
        // api.getServicesCards()
        //     .then((cardsData) => {
        //         console.log(cardsData)
        //         setServicesCards(cardsData)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    // })
    // console.log(servicesCards);
    return (
        <ul className='services-cards'>
            {servicesCards.map(item =>
                <ServicesCard key={item.id}
                    path={item.path}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    isActive={item.isActive}
                    cash={item.cash}
                    rating={item.rating}
                />)}
        </ul>
    );
}

export default ServicesCardList;