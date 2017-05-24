import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from './Search';
import Navigation from './Navigation';

const Aside = styled.aside`
  display:block;
  position: relative;
  box-sizing: border-box;
  min-height: 64px;
  padding: 6px 12px 6px 10px;
  background-color: #0e0e0e;
  @media (min-width: 768px) {
    display:block;
    max-width: 414px;
    height: inherit;
    padding-top: 50px;
  };
`;
const Logo = styled(Link)`
  display: block;
  width: 52px;
  height: 52px;
  margin: 0;
  background-image: url(${require('./images/logo.png')});
  background-position: 8px 10px;
  background-repeat: no-repeat;
  background-size: 80%;
  @media (min-width: 768px) {
    width: 80px;
    height: 54px;
    margin: 0 auto;
    background-size: initial;
    background-position: initial;
  };
`;

const Button = styled.div`
  position: absolute;
  right: 12px;
  top: 17px;
  width: 53px;
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
        <Logo to="/" />
        <Button onClick={this.handleClick} />
        <Search isActive={this.state.isActive} />
        <Navigation isActive={this.state.isActive} />
      </Aside>
    );
  }
}
export default NavPanel;
