import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';


ReactDOM.render(
  <Router>
    <App />
    <Route path="/about" component={() => null} />
    <Route path="/articles" component={() => null} />
    <Route path="/contact" component={() => null} />
  </Router>,
  document.getElementById('root')
);