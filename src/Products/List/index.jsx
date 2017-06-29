import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import icon1 from '../images/00001/bitmap.png';
import icon2 from '../images/00002/bitmap.png';
import icon3 from '../images/00003/bitmap.png';
import Filters from './Filters';
import Card from './Card';

const CardsWrapper = styled.div`
  padding: 22px 24px 0 25px;
  background-color: #ffffff;
`;
export default () => (
  <div>
    <Filters />
    <CardsWrapper>
      <Row>
        <Col type="row" xs={12} sm={6} md={4} lg={3}>
          <Card icon={icon1} title="0001" price="170" sale />
        </Col>
        <Col type="row" xs={12} sm={6} md={4} lg={3}>
          <Card icon={icon3} title="0003" price="240.99" />
        </Col>
        <Col type="row" xs={12} sm={6} md={4} lg={3}>
          <Card icon={icon1} title="0001" price="1024" />
        </Col>
        <Col type="row" xs={12} sm={6} md={4} lg={3}>
          <Card icon={icon1} title="0001" price="170" />
        </Col>
        <Col type="row" xs={12} sm={6} md={4} lg={3}>
          <Card icon={icon2} title="0002" price="170" sale />
        </Col>
        <Col type="row" xs={12} sm={6} md={4} lg={3}>
          <Card icon={icon3} title="0003" price="170" />
        </Col>
      </Row>
    </CardsWrapper>
  </div>
);
