import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../services/auth';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import SchoolRotes from './SchoolRotes';
import VacancyRotes from './VacancyRotes';
import PointRotes from './PointRotes';

import {VacancyContextProvider} from '../contexts/VacancyContext';

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
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <SchoolRotes />

          <VacancyContextProvider>
            <VacancyRotes />
          </VacancyContextProvider>

          <PointRotes />
        </>
      }



      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
