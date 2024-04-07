import React from 'react';
import './ServicesToolbar.css'
import { useState } from 'react';
import ServicesCardList from '../ServicesCardList/ServicesCardList';
import Category from '../Category/Category'

function ServicesToolbar() {
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
            < ul className='services-toolbar'>
                <li>
                    <button className={`services-toolbar__button ${isAllActive ? 'services-toolbar__button_selected' : ''}`}
                        onClick={handleAllClick}>Все</button>
                </li>
                <li>
                    <button className={`services-toolbar__button ${isCategoryActive ? 'services-toolbar__button_selected' : ''}`}
                        onClick={handleCategoryClick}>Категории</button>
                </li>
            </ul>
            {isAllActive ? (<ServicesCardList />) : (null)}
            {isCategoryActive ? (<Category />) : (null)}
        </>
    );
}

export default ServicesToolbar;