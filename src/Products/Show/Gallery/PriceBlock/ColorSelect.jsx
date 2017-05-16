import React from 'react';
import styled from 'styled-components';

const ColorSelect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 111px;
`;
const ColorSelButton = styled.button`
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
    <ColorSelButton bgcolor="#c5c5c5" />
    <ColorSelButton bgcolor="#4d87ca" />
    <ColorSelButton bgcolor="#4a4a4a" />
    <ColorSelButton bgcolor="#e0e0e0" />
  </ColorSelect>
);
