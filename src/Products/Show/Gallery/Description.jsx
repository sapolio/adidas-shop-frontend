import React from 'react';
import styled from 'styled-components';

const ProductDescription = styled.p`
    margin: 0;
    padding-top: 22px;
    font-family: AvenirNext-Medium;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    text-align: left;
    color: #d8d8d8;
  @media (min-width: 768px) {
    margin: 20px 0 129px 3px;
    font-size: 33px;
    line-height: 1.5;
  }
`;
const Accent = styled.span`
  color: #6e6e6e;
`;
export default () => (
  <ProductDescription>
    <Accent>
      Adidas&nbsp;
    </Accent>
    is a German multinational corporation,
    headquartered in Herzogenaurach, Germany,
    that designs and manufactures shoes,
    clothing and accessories.
  </ProductDescription>
);
