import React from 'react';
import styled from 'styled-components';
import Large from './images/details/large.png';
import Miniature1 from './images/details/mini-1.png';
import Miniature2 from './images/details/mini-2.png';
import Miniature3 from './images/details/mini-3.png';
import Miniature4 from './images/details/mini-4.png';

const LargePicture = styled.img`
  height: 525px;
  margin-left: 47px;
  margin-top: 20px;
`;
const MiniatureRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -6px;
  padding-right: 23px;
`;
const Miniature = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;
const Stripes = styled.div`
  margin: 0 22px;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;
const Hr = styled.hr`
  margin: 3px;
  width: 159px;
  height: 3px;
  border-radius: 1.5px;
  border: none;
  background-color: #e7e7e7;
`;
const SeeMore = styled.span`
  width: 46px;
  height: 54px;
  font-family: AndaleMono;
  font-size: 14px;
  color: #c0c0c0;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;
export default () => (
  <div>
    <LargePicture src={Large} alt="large" />
    <MiniatureRow>
      <Miniature>
        <img src={Miniature1} alt="1" />
      </Miniature>
      <Miniature>
        <img src={Miniature2} alt="2" />
      </Miniature>
      <Miniature>
        <img src={Miniature3} alt="3" />
      </Miniature>
      <Miniature>
        <img src={Miniature4} alt="4" />
      </Miniature>
      <Stripes>
        <Hr />
        <Hr />
        <Hr />
      </Stripes>
      <SeeMore>
        see<br />more<br />photos
      </SeeMore>
    </MiniatureRow>
  </div>
);
