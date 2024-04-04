import React from 'react';
import {
    getReadableMonthDate,
} from '../../../utils/calendar-constants/moment-utils';

import { getMonthSet } from '../../../utils/calendar-constants/date-utils';

const CalendarHeader = ({ selectDate, setSelectDate }) => {

    const changeDate = (e) => {
        setSelectDate(e.target.getAttribute('data-date'));
    };

    const monthSet = getMonthSet(selectDate);

    return (
        <div className="calendar-header">
            <div className="left-container">
                <h3 className='calendar-header__title'>{getReadableMonthDate(selectDate)}</h3>
            </div>
            <div className="right-container">
                <div className="change-moonth prev-moonth" data-date={monthSet.prev} onClick={changeDate}></div>
                <div className="change-moonth next-moonth" data-date={monthSet.next} onClick={changeDate}></div>
            </div>
        </div>
    );
};

export default CalendarHeader;
