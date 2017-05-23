import React, { Component } from 'react';
import styled from 'styled-components';
import MenuItem from './Menu';

const Menu = styled.nav`
  display: none;
  flex-direction: column;
  margin-top: 122px;
  margin-bottom: 60px;
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
  }
`;
class Navigation extends Component {
  render() {
    return (
      <Menu>
        <MenuItem title isActive>
          FOOTBALL&nbsp;
        </MenuItem>
        <MenuItem title>RUNNING</MenuItem>
        <MenuItem title>BASKETBALL</MenuItem>
      </Menu>
    );
  }
}
export default Navigation;
