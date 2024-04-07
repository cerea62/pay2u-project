import React from 'react';
import { useState} from 'react';
import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
export default function SearchForm() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  const handleSubmit = () => {

  }

  return (
    <>
      <section className='search'>
          <form className='search__form' onSubmit={handleSubmit}>
            <img className='search__form-icon' src={searchIcon} alt="Иконка лупа" />
            <input
              className='search__field'
              name="search"
              type='text'
              placeholder='Поиск'
              value={inputValue}
              onChange={handleChange}
            />
          </form>
      </section>
    </>
  )
}