import React from 'react';
import './PaymentCard.css'

function PaymentCard({props}) {
    console.log(props);
    return (
        <li className='payment-card' key={props.id}>
            <img className='payment-card__image' src={props.icon} alt='#' />
            <div className='payment-card__name'>
                <p className='payment-card__title'>{props.title}</p>
                <p className='payment-card__date'>{props.dateOfDebiting}</p>
            </div>
            <div className='payment-card__cash'>
                <p className='payment-card__cashback'>Кешбэк {props.cashback}&#8381;</p>
                <p className='payment-card__cost'>{props.cost}&#8381;</p>
                {props.paided ? 
                (<p className='payment-card__paided'>Оплачено</p>)
                : (<p className='payment-card__paided payment-card__paided_type_waited'>Ожидается</p>)}
            </div>
        </li>
    );
}

export default PaymentCard;