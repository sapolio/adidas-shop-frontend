import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubMenu = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const SubMenuItem = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  padding-bottom: 26px;
  font-family: AndaleMono;
  color: ${props => (props.isActive ? '#ffffff' : '#3c3c3c')};
  transition-property: color;
  transition-duration: 200ms;

  &:hover {
    color: #797979;
    }
`;

export default () => (
  <SubMenu className="submenu">
    <SubMenuItem to="/details" className="submenu-item submenu-active menu-hover">
      SHOES
    </SubMenuItem>
    <SubMenuItem to="/details" className="submenu-item menu-hover">CLOTHING</SubMenuItem>
    <SubMenuItem to="/details" className="submenu-item menu-hover">ACCESSORIES</SubMenuItem>
  </SubMenu>
);
