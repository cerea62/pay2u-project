import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCard.css';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';

function ServicesCard({ id, path, image, title, description, isActive, cash, rating }) {

    let modificator;
    if (rating >= 4) {
        modificator = 'green';
    }
    else {
        if ( rating  < 4 &&  rating > 3) {
            modificator = 'orange'
        }
        else if ( rating < 3) {
            modificator = 'red'
        }
    }
    console.log(modificator)

    const classNameRating = "services-card__rating services-card__rating_" + modificator;
    return (
        <>
            <li key={id}>
                <Link to={path} className='services-card'>
                    <img className='services-card__image' alt={title} src={image} />
                    <div className='services-card__content'>
                        <div className='services-card__heading'>
                            <h3 className='services-card__title'>{title}</h3>
                            {isActive ? (
                                <div className='services-card__marker'></div>
                            ) : (null)
                            }
                        </div>
                        <p className='services-card__description'>{description}</p>
                        <div className='services-card__cashback'>
                            <p className='services-card__percent'>Кешбек до {cash}&#37;</p>
                            <p className={classNameRating}>{rating}</p>
                        </div>
                    </div>
                    <ButtonNavigation />
                </Link>
            </li>

        </>

    );
}

export default ServicesCard;