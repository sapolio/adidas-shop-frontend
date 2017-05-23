import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuArrow from './images/menu-arrow.png';

const MenuItem = styled.div`
  display: block;
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
const Arrow = styled.img`
  margin-bottom: 4px;
  `;

class Menu extends Component {
  render() {
    return (
      <MenuItem title isActive>
        {this.props.title}
        <Arrow src={MenuArrow} alt="strelka" />
        <SubMenu>
          <SubMenuItem to="/details" isActive>SHOES</SubMenuItem>
          <SubMenuItem to="/details">CLOTHING</SubMenuItem>
          <SubMenuItem to="/details">ACCESSORIES</SubMenuItem>
        </SubMenu>
      </MenuItem>
    );
  }
}
Menu.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Menu;
