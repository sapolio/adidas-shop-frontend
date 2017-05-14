import React from 'react';
import { Row } from 'react-flexbox-grid';

import icon1 from './images/goods/00001/bitmap.png';
import icon2 from './images/goods/00002/bitmap.png';
import icon3 from './images/goods/00003/bitmap.png';
import ProductCard from './ProductCard';
import CardsRow from './CardsRow';
import './styles.css';

export default () => (
  <div className="cards-wrapper">
    <Row>
      <CardsRow type="row" xs={12} sm={6} md={6} lg={4}>
        <ProductCard icon={icon1} title="0001" price="170" sale />
      </CardsRow>
      <CardsRow type="row" xs={12} sm={6} md={6} lg={4}>
        <ProductCard icon={icon3} title="0003" price="240.99" />
      </CardsRow>
      <CardsRow type="row" xs={12} sm={6} md={6} lg={4}>
        <ProductCard icon={icon1} title="0001" price="1024" />
      </CardsRow>
      <CardsRow type="row" xs={12} sm={6} md={6} lg={4}>
        <ProductCard icon={icon1} title="0001" price="170" />
      </CardsRow>
      <CardsRow type="row" xs={12} sm={6} md={6} lg={4}>
        <ProductCard icon={icon2} title="0002" price="170" sale />
      </CardsRow>
      <CardsRow type="row" xs={12} sm={6} md={6} lg={4}>
        <ProductCard icon={icon3} title="0003" price="170" />
      </CardsRow>
    </Row>
  </div>
);
