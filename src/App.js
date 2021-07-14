import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { UserSignin } from './pages/UserSignin';
// import { UserList } from "./pages/LandOfficer";
import { AppNav } from "./pages/AppNav";

function App() {
  return (
    <Router>
       <div className="App">
        <h1 className="alert alert-primary p-3">Welcome To HomeLoan Page!🏠</h1>     
      </div>
      {/* <Route exact path="/user-list" component={UserList} /> */}
      <Route exact path="/" component={UserSignin} />
      <Route exact path="/user-signin" component={UserSignin} />
    </Router>
  );
}

export default App;
