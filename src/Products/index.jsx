import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar/index';
import List from './List';

const Wrapper = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  @media (max-width: 768px) {
    display: block;    
  }
`;
export default () => (
  <Wrapper>
    <Sidebar />
    <List />
  </Wrapper>
);
