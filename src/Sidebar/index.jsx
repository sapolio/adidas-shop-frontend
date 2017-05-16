import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

const NavPanel = styled.aside`
  min-width: 414px;
  display: flex;
  flex-direction: column;
  background-color: #0e0e0e;
`;
export default () => (
  <NavPanel>
    <Logo />
    <Search />
    <Menu />
  </NavPanel>
);
