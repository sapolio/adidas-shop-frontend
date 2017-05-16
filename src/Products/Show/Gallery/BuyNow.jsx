import React from 'react';
import styled from 'styled-components';

const BuyNow = styled.button`
  position: fixed;
  bottom: 0px;
  margin-left: -32px;
  padding: 35px 433px;
  border: none;
  outline: none;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  font-family: AvenirNext-Bold;
  font-size: 32px;
  font-weight: bold;
  white-space: nowrap;
  color: #ffffff;

  &:hover {
    background-image: linear-gradient(to right, #27275d, #4949aa);
  }
`;
export default () => <BuyNow>BUY NOW</BuyNow>;
