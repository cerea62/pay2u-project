import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Calendar from '../Calendar/Calendar';
import Subscribe from '../Subscribe/Subscribe';
import MyHolidays from '../MyHolidays/MyHolidays';
import SubscriptionCatalog from '../SubscriptionCatalog/SubscriptionCatalog';

function App() {

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route exact path='/pay2u-project'
          element={<Main />} />
        <Route path='/pay2u-project/calendar'
          element={<Calendar />} />
        <Route path='/pay2u-project/subscribe'
          element={<Subscribe />} />
          <Route path='/pay2u-project/holidays'
          element={<MyHolidays />} />
          <Route path='/pay2u-project/subscription-catalog'
          element={<SubscriptionCatalog /> } />
      </Routes>
    </div>
  );
}

export default App;
