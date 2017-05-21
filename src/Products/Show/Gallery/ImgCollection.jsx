import React from 'react';
import styled from 'styled-components';
import Large from './images/details/large.png';
import Miniature1 from './images/details/mini-1.png';
import Miniature2 from './images/details/mini-2.png';
import Miniature3 from './images/details/mini-3.png';
import Miniature4 from './images/details/mini-4.png';

const LargePicture = styled.img`
  display: block;
  max-height: 250px;
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
  align-items: center;
  justify-content: center;
`;
const Miniature = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;
const Img = styled.img`
  @media (max-width: 768px) {
    max-height: 55px;
  }
`;

export default () => (
  <div>
    <LargePicture src={Large} alt="large" />
    <MiniatureRow>
      <Miniature>
        <Img src={Miniature1} alt="1" />
      </Miniature>
      <Miniature>
        <Img src={Miniature2} alt="2" />
      </Miniature>
      <Miniature>
        <Img src={Miniature3} alt="3" />
      </Miniature>
      <Miniature>
        <Img src={Miniature4} alt="4" />
      </Miniature>
    </MiniatureRow>
  </div>
);
