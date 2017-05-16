import React from 'react';
import styled from 'styled-components';

const HeadLineBlock = styled.div`
  position: absolute;
  top: 30px;
  left: 32px;
`;
const ModelName = styled.h1`
  margin: 0;
  font-family: AvenirNext-Bold;
  font-size: 64px;
  line-height: 1.0;
  color: #3a3a3a;
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
`;
export default () => (
  <HeadLineBlock>
    <ModelName>ULTRA<br />BOOST</ModelName>
    <SaveButton>SAVE</SaveButton>
  </HeadLineBlock>
);
