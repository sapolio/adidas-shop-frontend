import React from  'react';

export default () => {
  return (
    <aside className="nav-panel">
			<div className="logo"></div>
			<form action="#" className="search">
				<img src="images/group.png" alt="search icon" className="search-icon"></img>
				<input type="text" className="search-input"></input>
			</form>
			<nav className="menu">
				<a href="#" className="menu-item menu-active menu-hover">SPORTS
					<img src="images/group-2.png" alt="strelka" className="menu-active-icon"></img>
				</a>
				<nav className="submenu">
					<a href="#" className="submenu-item submenu-active menu-hover">SHOES</a>
					<a href="#" className="submenu-item menu-hover">CLOTHING</a>
					<a href="#" className="submenu-item menu-hover">ACCESSORIES</a>
				</nav>
				<a href="#" className="menu-item menu-hover">BRANDS</a>
				<a href="#" className="menu-item menu-hover">MICOACH</a>
			</nav>
		</aside>
  );
};
