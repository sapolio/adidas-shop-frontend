import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Btn = styled.button`
transition-property: color;
transition-duration: 200ms;

&:hover { color: #090098; }
`;
function Button(props) {
  return <Btn className={props.className}>{props.children}</Btn>;
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
