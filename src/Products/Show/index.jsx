import React from 'react';
import Sidebar from '../../Sidebar';
import Gallery from './Gallery';
import Wrapper from '../Wrapper';

export default () => (
  <Wrapper>
    <Sidebar />
    <div>
      <Gallery />
    </div>
  </Wrapper>
);
