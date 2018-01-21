import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import Home from './components/Home.jsx';

export default class Routes extends Component {

  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </App>
      </Router>
    );
  }
}