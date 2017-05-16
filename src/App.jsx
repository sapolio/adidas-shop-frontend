import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './Products';
import Show from './Products/Show';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Products} />
        <Route path="/details" component={Show} />
      </div>
    </Router>
  );
}

export default App;
