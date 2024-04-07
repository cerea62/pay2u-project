import ivi from '../images/services-icons/ivi.svg';
import yandexMusic from '../images/services-icons/yandex-music.svg';
import plus from '../images/services-icons/plus-icon.svg';
import premier from '../images/services-icons/icon-premier.svg';
import storytel from '../images/services-icons/storytel-icon.svg'

const subscriptions = [
    {
        id: 1,
        logo: ivi,
        cost: 340,
        period: 'месяц',
        title: 'Иви',
        duration: '14 апреля',
        cash: 5,
    },
    {
        id: 2,
        logo: yandexMusic,
        cost: 100,
        period: 'месяц',
        title: 'Яндекс Музыка на\u00A0 месяц',
        duration: '20 апреля',
        cash: 10,
    },
    {
        id: 3,
        logo: plus,
        cost: 2500,
        period: 'год',
        title: 'Яндекс Плюс на\u00A012\u00A0месяцев',
        duration: '15 декабря',
        cash: 12,
    },
    {
        id: 4,
        logo: premier,
        cost: 107,
        period: 'месяц',
        title: 'Premier',
        duration: '16 апреля',
        cash: 8,
    },
    {
        id: 5,
        logo: storytel,
        cost: 279,
        period: 'месяц',
        title: 'Storytel',
        duration: '16 апреля',
        cash: 12,
    },

]
export default subscriptions;