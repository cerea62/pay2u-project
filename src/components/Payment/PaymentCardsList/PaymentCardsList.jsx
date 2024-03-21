import React from 'react';
import './PaymentCardsList.css'
import paymentCards from '../../../utils/paymentCards'
import PaymentCard from '../PaymentCard/PaymentCard';

function PaymentCardsList(props) {
    console.log(paymentCards);
    return (
        <ul className='payment-cards'>
            {paymentCards.map(item => (
                <PaymentCard props={item} />
            ))}

        </ul>
    );
}

export default PaymentCardsList;