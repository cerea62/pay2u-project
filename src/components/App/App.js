import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Category from '../Category/Category';
import Calendar from '../Calendar/Calendar';
import Subscribe from '../Subscribe/Subscribe';

function App() {

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route exact path='/'
          element={<Main />}>
          <Route path='category'
            element={<Category />} />
        </Route>
        <Route path='calendar'
          element={<Calendar />} />
        <Route path='subscribe'
          element={<Subscribe />} />      </Routes>
    </div>
  );
}

export default App;
