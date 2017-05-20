import React from 'react';
import styled from 'styled-components';
import ColorSelect from './ColorSelect';
import Label from '../../../../components/Label';

const Header = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  @media (min-width: 678px) {
    position: absolute;
    right: 33px;
    top: 39px;
  }
`;
const Meta = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    width: 217px;
  }
`;
const Price = styled.h2`
  margin: 49px 0px 55px;
  font-family: AvenirNext-Bold;
  font-size: 80px;
  font-weight: bold;
  line-height: 0;
  color: #e2e2e2;
  @media (min-width: 768px) {
  margin: 21px -6px;

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
