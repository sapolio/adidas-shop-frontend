import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubMenu = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const Category = styled(Link)`
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
    <Category to="/details">
      SHOES
    </Category>
    <Category to="/details">CLOTHING</Category>
    <Category to="/details">ACCESSORIES</Category>
  </SubMenu>
);
