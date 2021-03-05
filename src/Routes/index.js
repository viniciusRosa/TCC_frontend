import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../services/auth'
import Login from '../pages/Login'

import SchoolRotes from './SchoolRotes';
import VehicleRotes from './VehicleRotes'

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
        <>
          <SchoolRotes />
          <VehicleRotes />
        </>
      }



      {/* <Route path="/schoolregister" component={SchoolRegister} /> */}
      <Route exact path="/" component={Login} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
      {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
