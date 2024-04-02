import React from 'react';
import './InactiveSubscriptionsCard.css'

function InactiveSubscriptionsCard({ title, logo, description, cost }) {
    return (
        <li className='inactive-subscribe__card'>
            <div className='inactive-subscribe__content'>
                <img className='inactive-subscribe__logo' alt={title} src={logo} />
                <div className='inactive-subscribe__text'>
                    <h3 className='inactive-subscribe__title'>{title}</h3>
                    <p className='inactive-subscribe__description'>{description}</p>
                </div>

            </div>
            <button className='inactive-subscribe__button'>Возобновить за {cost} &#8381;</button>
        </li>
    );
}

export default InactiveSubscriptionsCard;