import React from 'react';
import styled from 'styled-components';

const HeadLineBlock = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    top: 27px;
    left:30px;
  }
`;
const Title = styled.h1`
  margin: 0;
  font-family: AvenirNext-Bold;
  font-size: 36px;
  line-height: 1.0;
  color: #3a3a3a;
  @media (min-width: 768px) {
    font-size: 64px;
    max-width: 230px;
  }
`;
const SaveButton = styled.button`
  margin-top: 14px;
  width: 75px;
  height: 75px;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background-color: #e3e3e3;
  font-family: AvenirNext-Bold;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  transition-property: background-color;
  transition-duration: 200ms;

  &:hover { background-color: #ffc2c2; }
  @media (max-width: 768px) {
    display: none;
  }
`;
export default () => (
  <HeadLineBlock>
    <Title>ULTRA BOOST</Title>
    <SaveButton>SAVE</SaveButton>
  </HeadLineBlock>
);
