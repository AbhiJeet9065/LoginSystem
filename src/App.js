import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
          status : 0
      };
    }
  
    render(){
    return (
      <div className="App">
        <Router>
          <Switch>
           
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            
          </Switch>
        </Router>
      </div>
    
    );}
  }
  