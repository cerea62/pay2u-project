import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Category from '../Category/Category';
import ServicesCardList from '../ServicesCardList/ServicesCardList';
import Calendar from '../Calendar/Calendar';



function App() {

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path='/'
          element={<Main />}>
          <Route path='category'
            element={<Category />} />
          {/* <Route path='all' exact
            element={<ServicesCardList />} /> */}
        </Route>
        <Route path='calendar'
          element={<Calendar />} />

      </Routes>
    </div>
  );
}

export default App;
