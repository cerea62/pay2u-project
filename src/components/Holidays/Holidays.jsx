import React from 'react';
import { Link } from 'react-router-dom';
import './Holidays.css'
import image from '../../images/holidays-background.svg'

function Holidays(props) {
    return (
        <section className='holidays'>
            <h2 className='holidays__title'>Уйти на каникулы</h2>
            <Link className='holidays__link' to='/pay2u-project/holidays'>
                <div className='holidays__banner'>
                    <div className='holidays__text'>
                        <p className='holidays__bid'>Уезжаете? Запланируйте отключение подписок </p>
                        <p className='holidays__promise'>Мы включим их обратно к вашему возвращению </p>
                    </div>
                    <img className='holidays__image' src={image} alt='Шезлонг' />
                </div>
            </Link>

        </section>
    );
}

export default Holidays;