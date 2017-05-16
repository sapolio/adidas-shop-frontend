import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  margin: 30px auto 19px;
`;
export default () => (
  <Logo to="/">
    <img src={logo} alt="" />
  </Logo>
);
