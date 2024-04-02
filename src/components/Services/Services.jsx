import React from 'react';
import { useState } from 'react';
import './Services'
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import ServicesCardList from '../ServicesCardList/ServicesCardList';
import Category from '../Category/Category'

function Services() {
    const [isAllActive, setIsAllActive] = useState(true);
    const [isCategoryActive, setIsCategoryActive] = useState(false)

    const handleAllClick = () => {
        setIsAllActive(true);
        setIsCategoryActive(false);
    }
    const handleCategoryClick = () => {
        setIsCategoryActive(true);
        setIsAllActive(false);
    }
    return (
        <>
            <section className="services">
                <div className="services__nav">
                    <h2 className="services__title">Сервисы</h2>
                    <ButtonNavigation />
                </div>
                < ul className='services__toolbar'>
                    <li>
                        <button className={`services__button ${isAllActive ? 'services__button_selected' : ''}`}
                            onClick={handleAllClick}>Все</button>
                    </li>
                    <li>
                        <button className={`services__button ${isCategoryActive ? 'services__button_selected' : ''}`}
                            onClick={handleCategoryClick}>Категории</button>
                    </li>
                </ul>
                {isAllActive ? (<ServicesCardList />) : (null)}
                {isCategoryActive ? (<Category />) : (null)}
            </section>
        </>
    );
}

export default Services;

