import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Label from './Label';

const Filter = styled.div`
  display: flex;
  padding: 11px 0px 12px 25px;
  font-family: AvenirNext-Bold;
  border-bottom: #e7e7e7 3px solid;
`;
const GenderSelector = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`;
const SizeSelector = styled.div`
  display: flex;
  justify-content: space-between;
  width: 323px;
  margin-left: 51px;
`;
export default () => (
  <Filter>
    <div className="filter-icon" />

    <GenderSelector>
      <Button className="filter-gender filter-active">MAN</Button>
      <Button className="filter-gender">WOMAN</Button>
    </GenderSelector>

    <SizeSelector>
      <Label active>SIZE</Label>
      <Button className="filter-size">36</Button>
      <Button className="filter-size">37</Button>
      <Button className="filter-size">38</Button>
      <Button className="filter-size">39</Button>
      <Button className="filter-size">40</Button>
      <Button className="filter-size filter-active">41</Button>
      <Button className="filter-size">42</Button>
    </SizeSelector>
  </Filter>
);
