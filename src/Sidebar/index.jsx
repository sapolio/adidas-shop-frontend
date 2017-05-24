import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from './Search';
import Navigation from './Navigation';
import logo from './images/logo.png';

const Aside = styled.aside`
  display:block;
  position: relative;
  box-sizing: border-box;
  min-height: 64px;
  padding: 17px 15px;
  background-color: #0e0e0e;
  @media (min-width: 768px) {
    display:block;
    max-width: 414px;
    height: inherit;
    padding-top: 50px;
  };
`;
const Logo = styled.img`
  display: block;
  height: 30px;
  @media (min-width: 768px) {
    height: 54px;
  };
`;

const Button = styled.div`
  position: absolute;
  right: 15px;
  top: 17px;
  width: 40px;
  height: 30px;
  box-sizing: border-box;
  border-top: solid #ffffff 4px;
  border-bottom: solid #ffffff 4px;
  &:after {
    content: '';
    display: block;
    width: 100%;
    position: relative;
    top: 9px;
    border-bottom: solid #ffffff 4px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

class NavPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }
  render() {
    return (
      <Aside>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <Button onClick={this.handleClick} />
        <Search isActive={this.state.isActive} />
        <Navigation isActive={this.state.isActive} />
      </Aside>
    );
  }
}
export default NavPanel;
