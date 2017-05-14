import React from 'react';
import Sidebar from '../Sidebar/index';
import Filter from './Filter/index';
import CardsWrapper from './CardsWrapper';

export default () => (
  <div className="wrapper">
    <Sidebar />
    <div className="content">
      <Filter />
      <CardsWrapper />
    </div>
  </div>
  );
