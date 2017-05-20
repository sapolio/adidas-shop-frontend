import React from 'react';
import styled from 'styled-components';

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
const FilterIcon = styled.div`
  margin-right: 29px;
  width: 55px;
  height: 55px;
  background-color: #ebebeb;
  background-image: url(${require('../../images/filter-icon.png')});
  background-repeat: no-repeat;
  background-position: center;
`;

const Button = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: center;
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  font-size: 24px;
  font-family: inherit;
  transition-property: color;
  transition-duration: 200ms;

  &:hover { color: #090098; }
`;
const Label = styled.span`
  padding: 0;
  background-color: transparent;
  border: none;
  margin-right: 13px;
  outline: none;
  cursor: pointer;
  align-self: center;
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  font-size: 24px;
  font-family: inherit;
`;
export default () => (
  <Filter>
    <FilterIcon />

    <GenderSelector>
      <Button isActive>MAN</Button>
      <Button>WOMAN</Button>
    </GenderSelector>

    <SizeSelector>
      <Label isActive>SIZE</Label>
      <Button>36</Button>
      <Button>37</Button>
      <Button>38</Button>
      <Button>39</Button>
      <Button>40</Button>
      <Button isActive>41</Button>
      <Button>42</Button>
    </SizeSelector>
  </Filter>
);
