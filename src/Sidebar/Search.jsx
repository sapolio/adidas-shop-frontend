import React from 'react';
import SearchIcon from './images/search-icon.png';
import './styles.css';

export default () => (
  <form action="#" className="search">
    <img src={SearchIcon} alt="search icon" className="search-icon" />
    <input type="text" className="search-input" />
  </form>
);
