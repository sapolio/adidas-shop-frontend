import React from  'react';
import Sidebar from '../Sidebar/index';
import './styles.css';

export default () => {
  return (
    <div className="wrapper">
  		<Sidebar />
  		<div className="content">
  			<div className="detail">
  				<div className="detail-hl-block">
  					<h1 className="detail-model-name">ULTRA<br />BOOST</h1>
  					<button className="detail-svbtn">SAVE</button>
  				</div>
  				<div className="detail-price-block">
  					<div className="upper">
  						<div className="color-select">
  							<button className="color-select-1"></button>
  							<button className="color-select-2"></button>
  							<button className="color-select-3"></button>
  							<button className="color-select-4"></button>
  						</div>
  						<span className="detail-sale-label">SALE</span>
  					</div>
  					<h2 className="detail-price-header">170$</h2>
  				</div>
  				<div className="detail-pictures">
  					<img src="images/details/large.png" alt="large" className="detail-large" />
  					<div className="detail-miniature-row">
  						<button className="detail-miniature">
  							<img src="images/details/mini-1.png" alt="1" />
  						</button>
  						<button className="detail-miniature">
  							<img src="images/details/mini-2.png" alt="2" />
  						</button>
  						<button className="detail-miniature">
  							<img src="images/details/mini-3.png" alt="3" />
  						</button>
  						<button className="detail-miniature">
  							<img src="images/details/mini-4.png" alt="4" />
  						</button>
  						<div className="detail-stripes detail-miniature">
  							<hr />
  							<hr />
  							<hr />
  						</div>
  						<span className="detail-more-pictures detail-miniature">see<br />more<br />photos</span>
  					</div>
  				</div>
  				<p className="detail-product-description"><span className="detail-product-description-highlight">Adidas</span> is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.</p>
  				<button className="detail-buy-now">BUY NOW</button>
  			</div>
  		</div>
  	</div>
  );
};
