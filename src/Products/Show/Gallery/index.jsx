import React from 'react';
import styled from 'styled-components';
import DetailHeaderBlock from './HeadlineBlock';
import PriceBlock from './PriceBlock';
import ImgCollection from './ImgCollection';
import Description from './Description';
import BuyNow from './BuyNow';

const Details = styled.div`
    padding: 30px 15px 0 15px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    position: relative;
    padding-left: 32px;
  }
`;
export default () => (
  <div>
    <Details>
      <DetailHeaderBlock />
      <PriceBlock />
      <ImgCollection />
      <Description />
    </Details>
    <BuyNow />
  </div>
);
