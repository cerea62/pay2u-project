import React from 'react';
import {
    getDayOfMonth,
    getMonthDayYear,
    getMonth,
    getYear,
} from '../../../utils/calendar-constants/moment-utils';
import { getDatesInMonthDisplay } from '../../../utils/calendar-constants/date-utils';
import { selectedDates } from '../../../utils/calendar-constants/dates'


const DateIndicator = ({ activeDates, selectDate, setSelectDate }) => {
    const changeDate = (e) => {
        setSelectDate(e.target.getAttribute('data-date'));
    };

    const datesInMonth = getDatesInMonthDisplay(
        getMonth(selectDate) + 1,
        getYear(selectDate)
    );

    const monthDates = datesInMonth.map((i, key) => {
        const active =
            getMonthDayYear(selectDate) === getMonthDayYear(i.date) ? 'active' : '';
        let obj = selectedDates.filter(d => getMonthDayYear(d.date) === getMonthDayYear(i.date));

        const selected = (obj.length === 0) ? '' : 'selected'
        let iconName = ''
        if (selected === 'selected') {

            if (obj.length > 1) {
                iconName = 'many';
            } else {
                iconName = obj[0].sbscrible;
            }
        }

        return (
            <div className={`date-grid ${selected} ${active}`}>
                <div
                    className={`date-icon ${selected} ${active}`}
                    data-active-month={i.currentMonth}
                    data-date={i.date.toString()}
                    key={key}
                    onClick={changeDate}
                >
                    {getDayOfMonth(i.date)}
                </div>
                <div className={`icon-img ${selected} ${active} ${iconName}`}
                    data-active-month={i.currentMonth}
                >  </div>
            </div>

        );
    });

    return <div className="date-indicator">{monthDates}</div>;
};

export default DateIndicator;
