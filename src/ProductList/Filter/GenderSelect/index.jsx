import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="filter-gender-select">
        <button className="filter-gender filter-active filter-hover">
          MAN
        </button>
        <button className="filter-gender filter-hover">WOMAN</button>
      </div>
    );
  }
}

export default App;
