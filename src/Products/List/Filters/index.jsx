import React from 'react';
import Button from './Button';
import Label from './Label';

export default () => (
  <div className="filter">
    <div className="filter-icon" />

    <div className="filter-gender-select">
      <Button className="filter-gender filter-active">MAN</Button>
      <Button className="filter-gender">WOMAN</Button>
    </div>

    <div className="filter-size-select">
      <Label>SIZE</Label>
      <Button className="filter-size">36</Button>
      <Button className="filter-size">37</Button>
      <Button className="filter-size">38</Button>
      <Button className="filter-size">39</Button>
      <Button className="filter-size">40</Button>
      <Button className="filter-size filter-active">41</Button>
      <Button className="filter-size">42</Button>
    </div>
  </div>
);
