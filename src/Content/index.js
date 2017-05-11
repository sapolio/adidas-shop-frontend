import React from  'react';
import './styles.css';
import icon1 from './images/goods/00001/bitmap.png';
import icon2 from './images/goods/00002/bitmap.png';
import icon3 from './images/goods/00003/bitmap.png';

export default () => {
  return(
    <div className="content">
      <div className="filter">
        <div className="filter-icon"></div>
        <div className="filter-gender-select">
          <button className="filter-gender filter-active filter-hover">MAN</button>
          <button className="filter-gender filter-hover">WOMAN</button>
        </div>
        <div className="filter-size-select">
          <span className="filter-size filter-active filter-size-label">SIZE</span>
          <button className="filter-size filter-hover">36</button>
          <button className="filter-size filter-hover">37</button>
          <button className="filter-size filter-hover">38</button>
          <button className="filter-size filter-hover">39</button>
          <button className="filter-size filter-hover">40</button>
          <button className="filter-size filter-active filter-hover">41</button>
          <button className="filter-size filter-hover">42</button>
        </div>
      </div>
      <div className="cards-wrapper">
        <div className="row">
          <div className="col-lg-4">
            <div className="card product-sale">
              <span className="product-sale-label">SALE</span>
              <img src={icon1} alt="00001" className="icon"></img>
              <a href="#" className="product-price">$170</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={icon3} alt="00003" className="icon"></img>
              <a href="#" className="product-price">$240.99</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={icon1} alt="00001" className="icon"></img>
              <a href="#" className="product-price">$1024</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img src={icon1} alt="00001" className="icon"></img>
              <a href="#" className="product-price">170$</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card product-sale">
              <span className="product-sale-label">SALE</span>
              <img src={icon2} alt="00002" className="icon"></img>
              <a href="#" className="product-price">$170</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={icon3} alt="00003" className="icon"></img>
              <a href="#" className="product-price">$170</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
