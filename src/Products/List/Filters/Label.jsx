import React from 'react';
import PropTypes from 'prop-types';

function Label(props) {
  return <span className="filter-size filter-active filter-size-label">{props.children}</span>;
}

Label.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Label;
