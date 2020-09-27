import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {HashRouter as Router, Switch,Route} from 'react-router-dom';
import ForgetPassword from './Components/ForgetPassword';

function App() {
  return (
    <Router> 
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/forgetPassword" exact component={ForgetPassword} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
