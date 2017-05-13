import React, { Component } from 'react';
import GenderSelect from './GenderSelect';
import SizeSelect from './SizeSelect';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-icon" />
        <GenderSelect />
        <SizeSelect />
      </div>
    );
  }
}

export default App;
