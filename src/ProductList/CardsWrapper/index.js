import React from 'react';
import SaleLabel from '../../SaleLabel';
import './styles.css';
import icon1 from './images/goods/00001/bitmap.png';
import icon2 from './images/goods/00002/bitmap.png';
import icon3 from './images/goods/00003/bitmap.png';

export default () => {
  return (
    <div className="cards-wrapper">
      <div className="row">
        <div className="col-lg-4">
          <div className="card product-sale">
            <SaleLabel />
            <img src={icon1} alt="00001" className="icon" />
            <a href="#" className="product-price">$170</a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <img src={icon3} alt="00003" className="icon" />
            <a href="#" className="product-price">$240.99</a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <img src={icon1} alt="00001" className="icon" />
            <a href="#" className="product-price">$1024</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <img src={icon1} alt="00001" className="icon" />
            <a href="#" className="product-price">170$</a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card product-sale">
            <SaleLabel />
            <img src={icon2} alt="00002" className="icon" />
            <a href="#" className="product-price">$170</a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <img src={icon3} alt="00003" className="icon" />
            <a href="#" className="product-price">$170</a>
          </div>
        </div>
      </div>
    </div>
  );
};
