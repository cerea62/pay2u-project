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
            <main className='calendar'>
                <h1 className='calendar__title'>Календарь платежей</h1>
                <PlannedCosts />
                <PaymentCalendar />
                <Holidays />
                <Statistics />
                <Payment />
            </main>
        </>


    );
}

export default Calendar;