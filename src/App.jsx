import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import './css/style.css';
import './css/grid.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={ProductDetails} />
      </div>
    </Router>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Route exact path="/" component={ProductList} />
//           <Route path="/details" component={ProductDetails} />
//         </div>
//       </Router>
//     );
//   }
// }

export default App;
