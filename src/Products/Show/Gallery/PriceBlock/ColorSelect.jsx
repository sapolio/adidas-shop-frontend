import React from 'react';
import styled from 'styled-components';

const ColorSelect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 111px;
`;
const Button = styled.button`
  height: 18px;
  width: 18px;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props => props.bgcolor};

  &:hover { border: #ff5c5c 1px solid; }
`;
export default () => (
  <ColorSelect>
    <Button bgcolor="#c5c5c5" />
    <Button bgcolor="#4d87ca" />
    <Button bgcolor="#4a4a4a" />
    <Button bgcolor="#e0e0e0" />
  </ColorSelect>
);
