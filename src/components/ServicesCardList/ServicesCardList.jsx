import React from 'react';
import './ServicesCardList.css'
import ServicesCard from '../ServicesCard/ServicesCard';
import servicesCards from '../../utils/servicesCards';

function ServicesCardList() {
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