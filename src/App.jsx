import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './List';
import Details from './Details';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={List} />
        <Route path="/details" component={Details} />
      </div>
    </Router>
  );
}

export default App;
