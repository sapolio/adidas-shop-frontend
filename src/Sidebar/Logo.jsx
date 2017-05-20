import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  display: block;
  width: 52px;
  height: 52px;
  background-image: url(${require('./images/logo.png')});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90%;
  @media (min-width: 768px) {
    width: 80px;
    height: 54px;
    margin: 0 auto;
    background-size: contain;
  }
`;

export default () => <Logo to="/" />;
