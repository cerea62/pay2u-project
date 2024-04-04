import { monthsFull } from '../calendar-constants/dates';

const moment = require('moment');

export const getSpecificDate = (month, dayOfMonth, year) => {
  return moment(`${month}-${dayOfMonth}-${year}`, 'MM-DD-YYYY').toDate();
};

moment.locale('ru');
moment.updateLocale('ru', { months : monthsFull });

export const getDayOfMonth = (date) => moment(date).date();

export const getMonth = (date) => moment(date).month();

export const getYear = (date) => moment(date).year();

export const getToday = () => moment().toDate();

export const getReadableWeekday = (date) => moment(date).format('dddd');

export const getReadableMonthDate = (date) => moment(date).format('MMMM YYYY');

export const getMonthDayYear = (date) => moment(date).format('MM-DD-YYYY');

// console.log(moment().toDate().toISOString());
