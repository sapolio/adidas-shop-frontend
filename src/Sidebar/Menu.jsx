import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import MenuArrow from './images/menu-arrow.png';
import SubMenu from './SubMenu';

const MenuItem = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-size: 24px;
  color: ${props => (props.isActive ? '#ffffff' : '#303030')};
  text-decoration: none;
  font-family: AvenirNext-Bold;
  font-weight: bold;
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
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }
  render() {
    return (
      <div>
        <MenuItem onClick={this.handleClick} isActive={this.state.isActive}>
          {this.props.title}
          <Arrow src={MenuArrow} alt="strelka" />
        </MenuItem>
        {this.state.isActive && <SubMenu />}
      </div>
    );
  }
}
Menu.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Menu;
