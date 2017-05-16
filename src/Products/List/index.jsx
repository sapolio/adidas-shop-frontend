import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import icon1 from '../images/00001/bitmap.png';
import icon2 from '../images/00002/bitmap.png';
import icon3 from '../images/00003/bitmap.png';
import Filters from './Filters/index';
import Card from './Card';

export default () => (
  <div className="content">
    <Filters />
    <div className="cards-wrapper">
      <Row>
        <Col type="row" xs={12} sm={6} md={6} lg={4}>
          <Card icon={icon1} title="0001" price="170" sale />
        </Col>
        <Col type="row" xs={12} sm={6} md={6} lg={4}>
          <Card icon={icon3} title="0003" price="240.99" />
        </Col>
        <Col type="row" xs={12} sm={6} md={6} lg={4}>
          <Card icon={icon1} title="0001" price="1024" />
        </Col>
        <Col type="row" xs={12} sm={6} md={6} lg={4}>
          <Card icon={icon1} title="0001" price="170" />
        </Col>
        <Col type="row" xs={12} sm={6} md={6} lg={4}>
          <Card icon={icon2} title="0002" price="170" sale />
        </Col>
        <Col type="row" xs={12} sm={6} md={6} lg={4}>
          <Card icon={icon3} title="0003" price="170" />
        </Col>
      </Row>
    </div>
  </div>
);
