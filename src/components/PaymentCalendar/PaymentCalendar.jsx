import './PaymentCalendar';
import React, { useEffect, useState, useRef } from 'react';
import { getToday } from '../../utils/calendar-constants/moment-utils';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import DateIndicator from './DateIndicator/DateIndicator';
import { presetDateTracker } from '../../utils/calendar-constants/date-utils';

function PaymentCalendar() {

  const activeDates = [];
  const [selectDate, setSelectDate] = useState(getToday());
  const presetActiveDates = useRef(presetDateTracker(activeDates || []));

  const onDateSelect = (date) => {
    return date;
  }

  useEffect(() => {
    if (onDateSelect) {
      onDateSelect(selectDate);
    }
  }, [selectDate]);

  return (
    <section className='calendar-container'>
      <CalendarHeader selectDate={selectDate} setSelectDate={setSelectDate} />
      <DateIndicator
        activeDates={presetActiveDates.current}
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      />
    </section>
  );
}

export default PaymentCalendar;
