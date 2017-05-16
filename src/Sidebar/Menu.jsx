import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuArrow from './images/menu-arrow.png';

const MenuItem = styled(Link)`
  font-size: 24px;
  color: ${props => (props.isActive ? '#ffffff' : '#303030')};
  text-decoration: none;
  padding-top: 26px;
  font-family: AvenirNext-Bold;
  font-weight: bold;
  transition-property: color;
  transition-duration: 200ms;

  &:hover {
    color: #797979;
    }
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
const Arrow = styled.img`
  margin-bottom: 4px;
  `;
const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 122px;
  text-align: center;
`;
const SubMenu = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
export default () => (
  <Menu>
    <MenuItem to="/details" isActive>
      SPORTS&nbsp;
      <Arrow src={MenuArrow} alt="strelka" />
    </MenuItem>
    <SubMenu>
      <SubMenuItem to="/details" isActive>SHOES</SubMenuItem>
      <SubMenuItem to="/details">CLOTHING</SubMenuItem>
      <SubMenuItem to="/details">ACCESSORIES</SubMenuItem>
    </SubMenu>
    <MenuItem to="/details">BRANDS</MenuItem>
    <MenuItem to="/details">MICOACH</MenuItem>
  </Menu>
);
