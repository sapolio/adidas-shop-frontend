import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

const NavPanel = styled.aside`
  min-width: 414px;
  min-height: 100hv;
  display: flex;
  flex-direction: column;
  background-color: #0e0e0e;
  @media (max-width: 768px) {
      display: block;
      height: 64px;
  }
`;
export default () => (
  <NavPanel className="nav-panel">
    <Logo />
    <Search />
    <Menu />
  </NavPanel>
);
