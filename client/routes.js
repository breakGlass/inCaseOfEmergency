import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './app';

/**
 * COMPONENT
 */
export default class Routes extends Component {
//   componentDidMount() {
//     this.props.loadInitialData();
//   }

  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/home" component={UserHome} />
          </Switch>
        </App>
      </Router>
    );
  }
}