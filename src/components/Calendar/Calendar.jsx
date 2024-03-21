import React from 'react';
import './Calendar.css'
import PlannedCosts from '../PlannedCosts/PlannedCosts';
import calendar from '../../images/calendar.jpg'
import Holidays from '../Holidays/Holidays';
import Statistics from '../Statistics/Statistics';
import Payment from '../Payment/Payment';

function Calendar(props) {
    return (
        <>
            <section className='calendar'>
                <h2 className='calendar__title'>Календарь платежей</h2>
                <PlannedCosts />
                <div className='calendar__img'>
                    {/* заглушка с календарем */}
                    <img className='calendar__image' src={calendar} alt='Календарь' />
                </div>
                <Holidays />
                <Statistics />
                <Payment />
            </section>
        </>


    );
}

export default Calendar;