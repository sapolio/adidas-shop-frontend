import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import './styles.css';

export default () => {
  return (
    <aside className="nav-panel">
      <Logo />
      <Search />
      <Menu />
    </aside>
  );
};
