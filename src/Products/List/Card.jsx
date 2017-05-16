import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import SaleLabel from '../../components/Label';

const CardSaleLebel = styled.div`
    position: absolute;
    top: 27px;
    right: 17px;
`;
function ProductCard({ icon, title, price, sale }) {
  const classNames = sale ? 'card product-sale' : 'card';

  return (
    <div className={classNames}>
      {sale &&
        <CardSaleLebel>
          <SaleLabel />
        </CardSaleLebel>}
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
