import React from 'react';
import styled from 'styled-components';
import ColorSelect from './ColorSelect';
import Label from '../../../../components/Label';

const Header = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    position: absolute;
    right: 30px;
    flex-direction: column;
    align-items: flex-end;
  }
`;
const Meta = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Price = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  font-family: AvenirNext-Bold;
  font-size: 80px;
  font-weight: bold;
  line-height: 1.2;
  color: #e2e2e2;
  @media (min-width: 768px) {
    padding-top: 20px;
    line-height: normal;
  }
`;
export default () => (
  <Header>
    <Meta>
      <ColorSelect />
      <Label details />
    </Meta>
    <Price>170$</Price>
  </Header>
);
