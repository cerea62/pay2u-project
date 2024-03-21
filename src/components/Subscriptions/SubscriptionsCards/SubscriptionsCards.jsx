import React from 'react';
import './SubscriptionsCards.css'

function SubscriptionsCards({props}) {
    return (
        <div key={props.id} className="subscriptions__card">
            <div className='subscription__up'>
                <img className='subscription__logo' alt='#' src={props.logo} />
                <div className='subscription_pay'>
                    <p className='subscription__cost'>{props.cost}&#8381;</p>
                    <p className='subscription__period'>в {props.period}</p>
                </div>
            </div>
            <h3 className='subscription__title'>{props.title}</h3>
            <p className='subscription__duration'>до {props.duration}</p>        
        </div>
    );
}

export default SubscriptionsCards;