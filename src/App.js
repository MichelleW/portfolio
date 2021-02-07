import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import Home from '../src/Components/Home'; 
import Blog from './Components/Blog'; 

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch> 
          <Route path="/blog" component={Blog} /> 
          <Route path="/" component={Home} />
        </Switch> 

      </div>
    </Router>
  );
}

export default App;
