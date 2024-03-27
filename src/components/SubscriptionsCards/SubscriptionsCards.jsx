import React from 'react';
import { useLocation } from 'react-router-dom';
import './SubscriptionsCards.css'

function SubscriptionsCards({id, logo, cost, period, title, duration, cash}) {
    const location = useLocation();
    const path = location.pathname;
    return (
        <li key={id} className={`subscriptions__card ${path === '/subscribe' && "subscriptions__card_type_big"}` }>
            <div className='subscription__up'>
                <img className='subscription__logo' alt={title} src={logo} />
                <div className='subscription_pay'>
                    <p className='subscription__cost'>{cost} &#8381;</p>
                    <p className='subscription__period'>в {period}</p>
                </div>
            </div>
            <h3 className='subscription__title'>{title}</h3>
            <p className='subscription__duration'>до {duration}</p> 
            <p className='subscription__cashback'>Кешбек {cash}&#37;</p>       
        </li>
    );
}

export default SubscriptionsCards;