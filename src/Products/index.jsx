import React from 'react';
import Sidebar from '../Sidebar/index';
import List from './List';
import Wrapper from './Wrapper';

export default () => (
  <Wrapper>
    <Sidebar />
    <List />
  </Wrapper>
);
