import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './Products';
import Details from './Details';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Products} />
        <Route path="/details" component={Details} />
      </div>
    </Router>
  );
}

export default App;
