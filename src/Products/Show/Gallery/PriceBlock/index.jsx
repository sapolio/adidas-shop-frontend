import React from 'react';
import styled from 'styled-components';
import ColorSelect from './ColorSelect';
import Label from '../../../../components/Label';

const Header = styled.div`
  position: absolute;
  right: 33px;
  top: 39px;
`;
const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 217px;
`;
const Price = styled.h2`
  margin: 21px -6px;
  font-family: AvenirNext-Bold;
  font-size: 80px;
  font-weight: bold;
  text-align: right;
  color: #e2e2e2;
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
