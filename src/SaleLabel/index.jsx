import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function saleLabel({ details }) {
  const classNames = details ? 'detail-sale-label' : 'product-sale-label';

  return <span className={classNames}>SALE</span>;
}

saleLabel.propTypes = {
  details: PropTypes.bool,
};
saleLabel.defaultProps = {
  details: false,
};

export default saleLabel;
