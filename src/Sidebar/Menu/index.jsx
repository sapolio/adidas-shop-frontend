import React from 'react';
import Submenu from './Submenu';
import MenuArrow from './images/menu-arrow.png';
import './styles.css';

export default () => (
  <nav className="menu">
    <a href="/" className="menu-item menu-active menu-hover">
        SPORTS
        <img src={MenuArrow} alt="strelka" className="menu-active-icon" />
    </a>
    <Submenu />
    <a href="/" className="menu-item menu-hover">BRANDS</a>
    <a href="/" className="menu-item menu-hover">MICOACH</a>
  </nav>
  );
