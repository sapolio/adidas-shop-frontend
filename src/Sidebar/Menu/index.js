import React from  'react';
import Submenu from './Submenu/index';
import menu_arrow from './images/menu-arrow.png';
import './styles.css';

export default () => {
  return (
    <nav className="menu">
		    <a href="#" className="menu-item menu-active menu-hover">SPORTS
					<img src={menu_arrow} alt="strelka" className="menu-active-icon"></img>
				</a>
				<Submenu />
				<a href="#" className="menu-item menu-hover">BRANDS</a>
				<a href="#" className="menu-item menu-hover">MICOACH</a>
		</nav>
  );
};
