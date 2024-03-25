import React from 'react';
import { useLocation } from 'react-router-dom';
import './SubscriptionsCards.css'

function SubscriptionsCards({props}) {
    const location = useLocation();
    const path = location.pathname;
    return (
        <li key={props.id} className={`subscriptions__card ${path === '/subscribe' && "subscriptions__card_type_big"}` }>
            <div className='subscription__up'>
                <img className='subscription__logo' alt='#' src={props.logo} />
                <div className='subscription_pay'>
                    <p className='subscription__cost'>{props.cost} &#8381;</p>
                    <p className='subscription__period'>в {props.period}</p>
                </div>
            </div>
            <h3 className='subscription__title'>{props.title}</h3>
            <p className='subscription__duration'>до {props.duration}</p>        
        </li>
    );
}

export default SubscriptionsCards;