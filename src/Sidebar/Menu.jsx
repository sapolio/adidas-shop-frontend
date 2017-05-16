import React from 'react';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';
import MenuArrow from './images/menu-arrow.png';
import './styles.css';

export default () => (
  <nav className="menu">
    <Link to="/details" className="menu-item menu-hover menu-active">
      SPORTS
      <img src={MenuArrow} alt="strelka" className="menu-active-icon" />
    </Link>
    <SubMenu />
    <Link to="/details" className="menu-item menu-hover">BRANDS</Link>
    <Link to="/details" className="menu-item menu-hover">MICOACH</Link>
  </nav>
);
