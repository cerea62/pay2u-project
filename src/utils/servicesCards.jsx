import image1 from '../images/services-icons/yandex-music.svg';
import image2 from '../images/services-icons/ivi.svg';
import image3 from '../images/services-icons/kinopoisk.svg';
import image4 from '../images/services-icons/okko.svg';

const servicesCards = [
    {
        id: 1,
        image: image1,
        title: 'Яндекс Музыка',
        description: 'Персональный музыкальный мир, который воодушевляет',
        isActive: true,
        cash: 50,
        rating: 4.7,
    },
    {
        id: 2,
        image: image2,
        title: 'Иви',
        description: 'Это мое кино',
        isActive: true,
        cash: 50,
        rating: 4.1,
    },
    {
        id: 3,
        image: image3,
        title: 'Яндекс Плюс',
        description: 'Скидки и привилегии на сервисах Яндекса',
        isActive: false,
        cash: 50,
        rating: 3.8,
    },
    {
        id: 4,
        image: image4,
        title: 'Okko',
        description: 'Онлайн-кинотеатр, встречи с которым ждешь',
        isActive: false,
        cash: 50,
        rating: 2.5,
    },
]
 export default servicesCards;