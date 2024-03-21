import React from 'react';
import { useState} from 'react';
import { Link, Outlet, useLocation  } from 'react-router-dom';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import './Services'
import ServicesCardList from '../ServicesCardList/ServicesCardList';

function Services() {

    const location = useLocation();
    const path = location.pathname;
    return (
        <>
            <section className="services">
                <div className="services__nav">
                    <h2 className="services__title">Сервисы</h2>
                    <ButtonNavigation />
                </div>
                < ul className='services__toolbar'>
                    <li><Link to='/'
                    className={`services__button ${path === "/" && "services__button_selected"}`}>Все</Link></li>
                    <li><Link to='category' 
                     className={`services__button ${path === "/category" && "services__button_selected"}`}>Категори</Link></li>
                </ul>
                {path==='/' ? (
                    <ServicesCardList />
                ): (null)}
                <Outlet />
            </section>
        </>
    );
}

export default Services;

