import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Menu from './Menu';

const NavPanel = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 64px;
  padding: 6px 12px 6px 10px;
  background-color: #0e0e0e;
  @media (min-width: 768px) {
    display:block;
    min-width: 414px;
    min-height: 100vh;
    padding-top: 50px;
  }
`;
const Logo = styled.div`
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
`;

const Button = styled.div`
  float: right;
  width: 53px;
  height: 30px;
  box-sizing: border-box;
  border-top: solid #ffffff 5px;
  border-bottom: solid #ffffff 5px;
  &:after {
    content: '';
    display: block;
    width: 100%;
    position: relative;
    top: 7.5px;
    border-bottom: solid #ffffff 5px;
  }
  @media (min-width: 768px) {
    display: none;
`;

export default () => (
  <NavPanel className="nav-panel">
    <Logo />
    <Button />
    <Search />
    <Menu />
  </NavPanel>
);
