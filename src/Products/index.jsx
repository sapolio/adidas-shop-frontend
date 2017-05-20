import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar/index';
import List from './List';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  height: 100%;
  @media (min-width: 768px) {
    display: flex;
    max-width: 1440px;
  }
`;
export default () => (
  <Wrapper>
    <Sidebar />
    <List />
  </Wrapper>
);
