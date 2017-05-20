import React from 'react';
import styled from 'styled-components';
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
const Logo = styled.div`
  width: 80px;
  height: 54px;
  margin: 0;
  background-image: url(${require('./images/logo.png')});
  background-position: 8px 10px;
  background-repeat: no-repeat;
  background-size: 80%;
  @media (min-width: 768px) {
    margin: 0 auto;
`;

export default () => (
  <NavPanel className="nav-panel">
    <Logo />
    <Search />
    <Menu />
  </NavPanel>
);
