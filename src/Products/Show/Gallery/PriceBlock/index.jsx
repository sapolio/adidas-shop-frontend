import React from 'react';

import ColorSelect from './ColorSelect';
import Label from '../../../../components/Label';

export default () => (
  <div className="detail-price-block">
    <div className="upper">
      <ColorSelect />
      <Label details />
    </div>
    <h2 className="detail-price-header">170$</h2>
  </div>
);
