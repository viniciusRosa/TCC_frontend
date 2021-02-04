import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../services/auth'

import Login from '../pages/Login'

import SchoolRegister from '../pages/SchoolRegister'
import SandBox from '../pages/SandBox'

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
      <Route path="/sandbox" component={SandBox} />


      <Route path="/schoolregister" component={SchoolRegister} />
      <Route path="*" component={() => <h1>Page not found</h1>} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
