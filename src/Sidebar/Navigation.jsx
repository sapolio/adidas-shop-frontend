import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from './Menu';

const MenuWrapper = styled.nav`
  display: ${props => (props.isOpened ? 'block' : 'none')};
  flex-direction: column;
  justify-content: center;
  margin-top: 122px;
  margin-bottom: 60px;
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
  }
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
function Navigation(props) {
  return (
    <MenuWrapper isOpened={props.isOpened}>
      <Menu title="FOOTBALL">
        <Category to="/details">
          SHOES
        </Category>
        <Category to="/details">CLOTHING</Category>
        <Category to="/details">ACCES</Category>
      </Menu>
      <Menu title="RUNNING">
        <Category to="/details">
          SHOES
        </Category>
        <Category to="/details">TROUSERS</Category>
        <Category to="/details">ACCESSORIES</Category>
      </Menu>
      <Menu title="BASKETBALL">
        <Category to="/details">
          SOCKS
        </Category>
        <Category to="/details">CLOTHING</Category>
        <Category to="/details">ACCESSORIES</Category>
      </Menu>
    </MenuWrapper>
  );
}

Navigation.propTypes = {
  isOpened: PropTypes.bool,
};
Navigation.defaultProps = {
  isOpened: true,
};

export default Navigation;
