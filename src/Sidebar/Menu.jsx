import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import MenuArrow from './images/menu-arrow.png';

const Button = styled.button`
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
  margin-left: 4px;
  `;
const LinkWrapper = styled.div`
  display: ${props => (props.isActive ? 'flex' : 'none')};
  flex-direction: column;
  margin-top: 16px;
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
        <Button onClick={this.handleClick} isActive={this.state.isActive}>
          {this.props.title}
          <Arrow src={MenuArrow} alt="menu-arrow" />
        </Button>
        <LinkWrapper isActive={this.state.isActive}>
          {this.props.children}
        </LinkWrapper>
      </div>
    );
  }
}
Menu.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
Menu.defaultProps = {
  children: null,
};
export default Menu;
