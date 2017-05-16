import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Lbl = styled.span`
  padding: 0;
  background-color: transparent;
  border: none;
  margin-right: 13px;
  outline: none;
  cursor: pointer;
  align-self: center;
  color: ${props => (props.active ? '#d6d6d6' : '#4d42f8')};
  font-size: 24px;
  font-family: inherit;
`;
function Label(props) {
  return <Lbl>{props.children}</Lbl>;
}

Label.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Label;
