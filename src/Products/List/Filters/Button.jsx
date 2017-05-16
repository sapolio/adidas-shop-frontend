import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return <button className={props.className}>{props.children}</button>;
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
