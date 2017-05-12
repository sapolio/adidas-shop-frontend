import React from  'react';
import Logo from './Logo/index';
import Search from './Search/index';
import Menu from './Menu/index'
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
