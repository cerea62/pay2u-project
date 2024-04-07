import yandex from '../images/services-icons/yandex-music.svg';
import premier from '../images/services-icons/icon-premier.svg';
import storytel from '../images/services-icons/storytel-icon.svg';
import ivi from '../images/services-icons/ivi.svg'


const paymentCards = [
    {
        id: 1,
        icon: yandex,
        title: 'Яндекс Музыка',
        dateOfDebiting: '20.04.2024',
        cashback: '50',
        cost: '100',
        paided: false,
    },
    {
        id: 2,
        icon: premier,
        title: 'Premier',
        dateOfDebiting: '16.04.2024',
        cashback: '20',
        cost: '107',
        paided: false,
    },
    {
        id: 3,
        icon: storytel,
        title: 'Storytel',
        dateOfDebiting: '16.04.2024',
        cashback: '30',
        cost: '279',
        paided: false,
    },
    {
        id: 4,
        icon: ivi,
        title: 'Иви',
        dateOfDebiting: '14.04.2024',
        cashback: '68',
        cost: '340',
        paided: true,
    },
]
export default paymentCards;