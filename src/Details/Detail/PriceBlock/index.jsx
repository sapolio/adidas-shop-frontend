import React from 'react';

import ColorSelect from './ColorSelect';
import SaleLabel from '../../../SaleLabel';
import './styles.css';

export default () => (
  <div className="detail-price-block">
    <div className="upper">
      <ColorSelect />
      <SaleLabel details />
    </div>
    <h2 className="detail-price-header">170$</h2>
  </div>
);
