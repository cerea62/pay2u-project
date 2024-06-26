import React from 'react';
import './Statistics.css'
import image from '../../images/Statistic.jpg';

function Statistics(props) {
    return (
        <section className='statistics'>
            <h2 className='statistics__title'>Категории ваших подписок</h2>
            <div className='statistics__content'>
                {/* заглушка с картинкой */}
                <img className='statistics__image' alt="#" src={image} />
            </div>
        </section>
    );
}

export default Statistics;