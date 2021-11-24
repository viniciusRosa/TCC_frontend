import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import SchoolRotes from './SchoolRotes';
import VacancyRoutes from './VacancyRoutes';
import PointRotes from './PointRotes';
import RouteRoutes from './RouteRoutes';
import UserRotes from './UserRotes';

import { VacancyContextProvider } from '../contexts/VacancyContext';
import { PointContextProvider } from '../contexts/PointContext';
import { RouteContextProvider } from '../contexts/RouteContext';
import { SchoolContextProvider } from '../contexts/SchoolContext';
import { UserContextProvider } from '../contexts/UserContext';
import { DataContextProvider } from '../contexts/DataContext';
import { AuthProvider } from '../contexts/AuthContext';


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
          <AuthProvider>
            <Route exact path="/" component={Login} />

            <DataContextProvider>
              <Route path="/dashboard" component={Dashboard} />
            </DataContextProvider>

            <SchoolContextProvider>
              <SchoolRotes />
            </SchoolContextProvider>

            <RouteContextProvider>
              <VacancyContextProvider>
                <VacancyRoutes />
              </VacancyContextProvider>
            </RouteContextProvider>


            <PointContextProvider>
              <PointRotes />
            </PointContextProvider>

            <RouteContextProvider>
              <PointContextProvider>

                <RouteRoutes />
              </PointContextProvider>

            </RouteContextProvider>

            <UserContextProvider>
              <UserRotes />
            </UserContextProvider>
          </AuthProvider>

        </>
      }



      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
