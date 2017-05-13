import React from 'react';
import './styles.css';

export default () => (
  <div className="detail-price-block">
    <div className="upper">
      <div className="color-select">
        <button className="color-select-1" />
        <button className="color-select-2" />
        <button className="color-select-3" />
        <button className="color-select-4" />
      </div>
      <span className="detail-sale-label">SALE</span>
    </div>
    <h2 className="detail-price-header">170$</h2>
  </div>
);
