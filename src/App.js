import React, { Component } from 'react';
import Content from './Content/index'
import Sidebar from './Sidebar/index'
import './css/style.css';
import './css/details.css';
// import './css/filter.css';
import './css/grid.css';
import './css/product-cards.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
