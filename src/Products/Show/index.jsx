import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../Sidebar';
import Gallery from './Gallery';

const Wrapper = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
`;
export default () => (
  <Wrapper>
    <Sidebar />
    <div>
      <Gallery />
    </div>
  </Wrapper>
);
