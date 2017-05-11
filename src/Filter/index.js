import React, { Component } from 'react';
import Gender_select from './Filter-gender-select/index';
import Size_select from './Filter-size-select/index';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-icon"></div>
        <Gender_select />
        <Size_select />
      </div>
    );
  }
}

export default App;
