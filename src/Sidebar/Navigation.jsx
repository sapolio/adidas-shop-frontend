import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuItem from './Menu';

const Menu = styled.nav`
  display: ${props => (props.isActive ? 'block' : 'none')};
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
    <Menu isActive={props.isActive}>
      <MenuItem title="FOOTBALL&nbsp;" />
      <MenuItem title="RUNNING&nbsp;" />
      <MenuItem title="BASKETBALL&nbsp;" />
    </Menu>
  );
}

Navigation.propTypes = {
  isActive: PropTypes.bool,
};
Navigation.defaultProps = {
  isActive: true,
};

export default Navigation;
