import React from 'react';
import './Calendar.css'
import PlannedCosts from '../PlannedCosts/PlannedCosts';
import PaymentCalendar from '../PaymentCalendar/PaymentCalendar';
import Holidays from '../Holidays/Holidays';
import Statistics from '../Statistics/Statistics';
import Payment from '../Payment/Payment';

function Calendar(props) {
    return (
        <>
            <section className='calendar'>
                <h2 className='calendar__title'>Календарь платежей</h2>
                <PlannedCosts />
                <PaymentCalendar />
                <Holidays />
                <Statistics />
                <Payment />
            </section>
        </>


    );
}

export default Calendar;