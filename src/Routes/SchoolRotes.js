import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


import Create from '../pages/School/Create';
import Schools from '../pages/School/Schools';
import Update from '../pages/School/Update';
import Overview from '../pages/School/Overview';



const PrivateRoute = ({ component: Component, ...rest }) => {

  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  )};

const SchoolRotes = () => (
  <>
    <PrivateRoute exact path='/schools' component={ Schools } />
    <Route path='/schools/overview' component={ Overview } />
    <Route path='/schools/create' component={ Create } />
    <Route path='/schools/update' component={ Update } />
  </>
);

export default SchoolRotes;
