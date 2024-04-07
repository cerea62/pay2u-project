import React from 'react';
import { useLocation } from 'react-router-dom';
import './SubscriptionsCards.css'

function SubscriptionsCards({ logo, cost, period, title, duration, cash }) {
    const location = useLocation();
    const path = location.pathname;
    return (
       <>
            <div className='subscription__up'>
                <img className='subscription__logo' alt={title} src={logo} />
                {path === '/pay2u-project/subscribe' ? (
                    <div className='subscription__content-big'>
                        <h3 className='subscription__title subscription__title_big'>{title}</h3>
                        <p className='subscription__duration'>до {duration}</p>
                        <p className='subscription__cashback'>Кешбек {cash} &#37;</p>
                    </div>
                ) : (null)}
                <div className='subscription_pay'>
                    <p className='subscription__cost'>{cost} &#8381;</p>
                    <p className='subscription__period'>в {period}</p>
                </div>
            </div>
            {path === '/pay2u-project/subscribe' ? (null) : (
                <div className='subscription__content'>
                    <h3 className='subscription__title'>{title}</h3>
                    <p className='subscription__duration'>до {duration}</p>
                    <p className='subscription__cashback'>Кешбек { cash } &#37;</p>
                </div>
            )}
        </>
    );
}

export default SubscriptionsCards;