import React from 'react';
import DetailHeaderBlock from './HeadlineBlock';
import DetailPriceBlock from './PriceBlock';
import DetailPictures from './DetailPictures';
import ProductDescription from './ProductDescription';
import BuyNowButton from './BuyNowButton';
import './styles.css';

export default () => (
  <div className="detail">
    <DetailHeaderBlock />
    <DetailPriceBlock />
    <DetailPictures />
    <ProductDescription />
    <BuyNowButton />
  </div>
);
