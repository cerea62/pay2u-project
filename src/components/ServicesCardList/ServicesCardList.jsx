import React from 'react';
import './ServicesCardList.css'
import ServicesCard from '../ServicesCard/ServicesCard';
import servicesCards from '../../utils/servicesCards';
function ServicesCardList() {

    return (
        <ul className='services-cards'>
               {servicesCards.map(item => 
               <ServicesCard key={item.id} {...item} />)}
        </ul>
    );
}

export default ServicesCardList;