import React from 'react';
import styled from 'styled-components';

const ProductDescription = styled.p`
  margin: 20px 0 129px 3px;
  width: 927px;
  height: 150px;
  font-family: AvenirNext-Medium;
  font-size: 33px;
  font-weight: 500;
  line-height: 1.52;
  text-align: left;
  color: #d8d8d8;
`;
const BrandHilihgt = styled.span`
  color: #6e6e6e;
`;
export default () => (
  <ProductDescription>
    <BrandHilihgt>
      Adidas&nbsp;
    </BrandHilihgt>
    is a German multinational corporation,
    headquartered in Herzogenaurach, Germany,
    that designs and manufactures shoes,
    clothing and accessories.
  </ProductDescription>
);
