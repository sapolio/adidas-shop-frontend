import React from 'react';
import DetailHeaderBlock from './HeadlineBlock';
import PriceBlock from './PriceBlock';
import ImgCollection from './ImgCollection';
import Description from './Description';
import BuyNow from './BuyNow';

export default () => (
  <div className="detail">
    <DetailHeaderBlock />
    <PriceBlock />
    <ImgCollection />
    <Description />
    <BuyNow />
  </div>
);
