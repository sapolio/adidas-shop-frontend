import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 0;
  border: none;
  outline: none;
  width: 100%;
  padding: 23px 0;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  font-family: AvenirNext-Bold;
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  color: #ffffff;

  &:hover {
    background-image: linear-gradient(to right, #27275d, #4949aa);
  }
  @media (min-width: 768px) {
    position: sticky;
    bottom: 0;
    right: 0;
    padding: 35px 0;
    font-size: 32px;
  }
`;
export default () => <Button>BUY NOW</Button>;
