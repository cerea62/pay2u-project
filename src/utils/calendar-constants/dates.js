const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const monthsFull = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const monthsShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const totalDatesPerMonthView = 42; // 6 rows, 7 days a week...

const selectedDates = [
  {
    date: new Date("2024-04-20"),
    sbscrible: 'yandexMusic'
  },
  {
    date: new Date("2024-04-16"),
    sbscrible: 'premier'
  },
  {
    date: new Date("2024-04-16"),
    sbscrible: 'storytel'
  },
  {
    date: new Date("2024-04-14"),
    sbscrible: 'ivi'
  },
];

export { weekdays, monthsFull, monthsShort, totalDatesPerMonthView, selectedDates };
