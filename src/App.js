import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { UserSignin } from './pages/UserSignin';

function App() {
  return (
    <Router>
      <Route exact path="/" component={UserSignin} />
      <Route exact path="/user-signin" component={UserSignin} />
    </Router>
  );
}

export default App;
