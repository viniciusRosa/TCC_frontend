import React from 'react';
import { Route } from 'react-router-dom';

import Create from '../pages/User/Create';
import Points from '../pages/User/Users';
import Update from '../pages/User/Update';
import Overview from '../pages/User/Overview';


const UserRotes = () => (
  <>
    <Route exact path='/usuarios' component={ Points } />
    <Route path='/usuarios/create' component={ Create } />
    <Route path='/usuarios/update' component={ Update } />
    <Route path='/usuarios/overview' component={ Overview } />
  </>
);

export default UserRotes;
