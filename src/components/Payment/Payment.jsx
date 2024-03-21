import React from 'react';
import './Payment.css'
import PaymentCardsList from './PaymentCardsList/PaymentCardsList';

function Payment(props) {
    return (
        <div className='payment'>
            <h2 className='payment__title'>Оплаты</h2>
            <p className='payment__mounth'>Март</p>
            <PaymentCardsList />
            
        </div>
    );
}

export default Payment;