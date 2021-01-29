import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

import Login from './pages/login'

import Demo from './pages/Demo'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />

      {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}


      <Route path="/demo" component={Demo} />
      <Route path="*" component={() => <h1>Page not found</h1>} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
