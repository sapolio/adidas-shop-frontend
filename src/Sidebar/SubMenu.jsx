import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="submenu">
    <Link to="/details" className="submenu-item submenu-active menu-hover">SHOES</Link>
    <Link to="/details" className="submenu-item menu-hover">CLOTHING</Link>
    <Link to="/details" className="submenu-item menu-hover">ACCESSORIES</Link>
  </nav>
);
