import React from 'react';
import GenderSelect from './GenderSelect';
import SizeSelect from './SizeSelect';
import './styles.css';

export default () => (
  <div className="filter">
    <div className="filter-icon" />
    <GenderSelect />
    <SizeSelect />
  </div>
);
