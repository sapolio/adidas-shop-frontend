import React from 'react';
import Button from './Button';
import Label from './Label';

export default () => (
  <div className="filter">
    <div className="filter-icon" />

    <div className="filter-gender-select">
      <Button className="filter-gender filter-active filter-hover">MAN</Button>
      <Button className="filter-gender filter-hover">WOMAN</Button>
    </div>

    <div className="filter-size-select">
      <Label>SIZE</Label>
      <Button className="filter-size filter-hover">36</Button>
      <Button className="filter-size filter-hover">37</Button>
      <Button className="filter-size filter-hover">38</Button>
      <Button className="filter-size filter-hover">39</Button>
      <Button className="filter-size filter-hover">40</Button>
      <Button className="filter-size filter-active filter-hover">41</Button>
      <Button className="filter-size filter-hover">42</Button>
    </div>
  </div>
);
