import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../services/auth'
import Login from '../pages/Login'
import Create from '../pages/School/Create'
import SandBox from '../pages/SandBox'

import SchoolRotes from './SchoolRotes';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )
//     }
//   />
// );

const Routes = () => (
  <BrowserRouter>
    <Switch>

      {
        <SchoolRotes />
      }



      {/* <Route path="/schoolregister" component={SchoolRegister} /> */}
      <Route exact path="/" component={Login} />
      <Route path="/sandbox" component={SandBox} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
      {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
