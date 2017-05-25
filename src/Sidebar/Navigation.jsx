import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from './Menu';

const MenuWrapper = styled.nav`
  display: ${props => (props.isOpened ? 'block' : 'none')};
  flex-direction: column;
  justify-content: center;
  margin-top: 122px;
  margin-bottom: 60px;
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
  }
`;
function Navigation(props) {
  return (
    <MenuWrapper isOpened={props.isOpened}>
      <Menu title="FOOTBALL" />
      <Menu title="RUNNING" />
      <Menu title="BASKETBALL" />
    </MenuWrapper>
  );
}

Navigation.propTypes = {
  isOpened: PropTypes.bool,
};
Navigation.defaultProps = {
  isOpened: true,
};

export default Navigation;
