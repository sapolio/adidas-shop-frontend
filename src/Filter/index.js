import React, { Component } from 'react';
import GenderSelect from './Filter-gender-select/index';
import SizeSelect from './Filter-size-select/index';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-icon"></div>
        <GenderSelect />
        <SizeSelect />
      </div>
    );
  }
}

export default App;
