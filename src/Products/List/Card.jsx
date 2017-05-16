import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import SaleLabel from '../../components/Label';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 24px;
  padding: 9px;
  width: 311px;
  height: 311px;
  background-color: #f4f4f4;
`;
const CardSaleLebel = styled.div`
    position: absolute;
    top: 27px;
    right: 17px;
`;
const Icon = styled.img`
  display: block;
  margin: 0 auto;
  height: 197px;
  width: 294px;
`;

function ProductCard({ icon, title, price, sale }) {
  const classNames = sale ? 'card product-sale' : 'card';
  return (
    <Card className={classNames}>
      {sale &&
        <CardSaleLebel>
          <SaleLabel />
        </CardSaleLebel>}
      <Icon src={icon} alt={title} />
      <Link to="/details" className="product-price">${price}</Link>
    </Card>
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
