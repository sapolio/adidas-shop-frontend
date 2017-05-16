import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import Label from '../../SaleLabel';

function ProductCard({ icon, title, price, sale }) {
  const classNames = sale ? 'card product-sale' : 'card';
  const label = sale ? <Label /> : null;

  return (
    <div className={classNames}>
      {label}
      <img src={icon} alt={title} className="icon" />
      <Link to="/details" className="product-price">${price}</Link>
    </div>
  );
}

ProductCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string,
  price: PropTypes.string.isRequired,
  sale: PropTypes.bool,
};

ProductCard.defaultProps = {
  title: 'card image',
  sale: false,
};

export default ProductCard;
