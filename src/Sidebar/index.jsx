import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

const NavPanel = styled.aside`
  display: block;
  box-sizing: border-box;
  height: 64px;
  padding: 6px 10px;
  background-color: #0e0e0e;
  @media (min-width: 768px) {
    flex-direction: column;
    min-width: 414px;
    min-height: 100vh;
    padding-top: 50px;
  }
`;
export default () => (
  <NavPanel className="nav-panel">
    <Logo />
    <Search />
    <Menu />
  </NavPanel>
);
