import React from 'react';
import styled from 'styled-components';
import DetailHeaderBlock from './HeadlineBlock';
import PriceBlock from './PriceBlock';
import ImgCollection from './ImgCollection';
import Description from './Description';
import BuyNow from './BuyNow';

const Details = styled.div`
  position: relative;
  padding: 35px 32px 0 32px;
  height: 1618px;
  width: 1025px;
  box-sizing: border-box;
`;
export default () => (
  <Details>
    <DetailHeaderBlock />
    <PriceBlock />
    <ImgCollection />
    <Description />
    <BuyNow />
  </Details>
);
