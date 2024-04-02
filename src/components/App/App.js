import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Calendar from '../Calendar/Calendar';
import Subscribe from '../Subscribe/Subscribe';

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
      </Routes>
    </div>
  );
}

export default App;
