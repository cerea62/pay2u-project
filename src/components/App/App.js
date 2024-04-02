import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Category from '../Category/Category';
import Calendar from '../Calendar/Calendar';
import Subscribe from '../Subscribe/Subscribe';
import ServicesCardList from '../ServicesCardList/ServicesCardList';

function App() {

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route exact path='/pay2u-project'
          element={<Main />}>
            <Route exact path='services' element={<ServicesCardList />} />
          <Route path='category'
            element={<Category />} />
        </Route>
        <Route path='/pay2u-project/calendar'
          element={<Calendar />} />
        <Route path='/pay2u-project/subscribe'
          element={<Subscribe />} />
      </Routes>
    </div>
  );
}

export default App;
