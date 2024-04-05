import React from 'react';
import './SubscriptionCatalog.css'
import SearchForm from '../SearchForm/SearchForm';
import ServicesToolbar from '../ServicesToolbar/ServicesToolbar';

function SubscriptionCatalog() {
    return (
        <main className='subscription-catalog'>
              <h1 className='subscription-catalog__title'>Каталог подписок</h1>
              <SearchForm />
              <ServicesToolbar />
        </main>
    );
}

export default SubscriptionCatalog;