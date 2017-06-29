import React, { Component } from 'react';
import styled from 'styled-components';
import Large from './images/details/large-4.png';
import Miniature1 from './images/details/mini-1.png';
import Miniature2 from './images/details/mini-2.png';
import Miniature3 from './images/details/mini-3.png';
import Miniature4 from './images/details/mini-4.png';

const LargePicture = styled.img`
  display: block;
  max-height: 250px;
  max-width: 75%;
  margin: 0 auto;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    display: block;
    margin: 0 auto;
    max-height: 525px;
  }
`;
const MiniatureRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Miniature = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  &:hover {
    border: solid 5px #e8e8ea;
  }
`;
const Img = styled.img`
  max-height: 55px;
  @media (min-width: 768px) {
    max-height: 120px;
  }
`;
// In progress...
export default class ImgCollection extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 1 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isActive: 1,
    });
  }
  render() {
    return (
      <div>
        <LargePicture src={Large} alt="large" />
        <MiniatureRow>
          <Miniature onClick={this.handleClick}>
            <Img src={Miniature1} alt="1" />
          </Miniature>
          <Miniature onClick={this.handleClick}>
            <Img src={Miniature2} alt="2" />
          </Miniature>
          <Miniature onClick={this.handleClick}>
            <Img src={Miniature3} alt="3" />
          </Miniature>
          <Miniature onClick={this.handleClick}>
            <Img src={Miniature4} alt="4" />
          </Miniature>
        </MiniatureRow>
      </div>
    );
  }
}
