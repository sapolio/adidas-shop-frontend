import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';

function CardsRow(props) {
  return (
    <Col {...props}>
      {props.children}
    </Col>
  );
}

CardsRow.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardsRow;
