import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './images/search-icon.png';

const Form = styled.form`
  display: ${props => (props.isOpened ? 'block' : 'none')};
  flex-direction: row;
  padding-left: 10px;
  padding-bottom: 10px;
  margin: 37px 22px 0;
  border-bottom: 4px solid #373737;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const Input = styled.input`
  background-color: transparent;
  color: #3a3a3a;
  font-size: 24px;
  border: none;
  outline: none;
  padding-left: 10px;
  font-family: AndaleMono;
`;
function Search(props) {
  return (
    <Form action="#" isOpened={props.isOpened}>
      <img src={Icon} alt="search icon" />
      <Input type="text" />
    </Form>
  );
}

Search.propTypes = {
  isOpened: PropTypes.bool,
};
Search.defaultProps = {
  isOpened: true,
};

export default Search;
