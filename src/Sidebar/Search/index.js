import React from  'react';
import search_icon from './images/search-icon.png';
import './styles.css'

export default () => {
  return (
			<form action="#" className="search">
				<img src={search_icon} alt="search icon" className="search-icon"></img>
				<input type="text" className="search-input"></input>
			</form>
  );
};
