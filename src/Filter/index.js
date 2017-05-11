import React, { Component } from 'react';
import Gender_select from './Filter-gender-select/index'
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-icon"></div>
        <Gender_select />
        {/* <div className="filter-gender-select">
          <button className="filter-gender filter-active filter-hover">MAN</button>
          <button className="filter-gender filter-hover">WOMAN</button>
        </div> */}
        <div className="filter-size-select">
          <span className="filter-size filter-active filter-size-label">SIZE</span>
          <button className="filter-size filter-hover">36</button>
          <button className="filter-size filter-hover">37</button>
          <button className="filter-size filter-hover">38</button>
          <button className="filter-size filter-hover">39</button>
          <button className="filter-size filter-hover">40</button>
          <button className="filter-size filter-active filter-hover">41</button>
          <button className="filter-size filter-hover">42</button>
        </div>
      </div>
    );
  }
}

export default App;
