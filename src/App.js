import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ProductList from './Product-list/index';
import ProductDetails from './Product-details/index';
import './css/style.css';
import './css/grid.css';
import './css/product-cards.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={ProductDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
