import React from 'react';
import styled from 'styled-components';
// import './styles.css';

function saleLabel() {
  const Label = styled.span`
    box-sizing: border-box;
    padding: 8px 21px;
    width: 76px;
    height: 32px;
    background-color: #ff5c5c;
    color: #fff;
    font-size: 14px;
    font-family: AvenirNext-Bold;
  `;
  return <Label className="label">SALE</Label>;
}

export default saleLabel;
