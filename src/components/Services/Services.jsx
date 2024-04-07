import React from 'react';
import './Services'
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import ServicesToolbar from '../ServicesToolbar/ServicesToolbar';


function Services() {

    return (
        <>
            <section className="services">
                <div className="services__nav">
                    <h2 className="services__title">Сервисы</h2>
                    <ButtonNavigation />
                </div>
                <ServicesToolbar />
            </section>
        </>
    );
}

export default Services;

