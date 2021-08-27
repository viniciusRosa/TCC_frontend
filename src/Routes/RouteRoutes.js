import React from 'react';
import { Route } from 'react-router-dom';

import Routes from '../pages/Route/Routes';
import OverView from '../pages/Route/Overview';
import Create from '../pages/Route/Create';
import Update from '../pages/Route/Update';


const RouteRoutes = () => (
  <>
    <Route exact path='/routes' component={ Routes } />
    <Route path='/routes/overview' component={ OverView } />
    <Route path='/routes/create' component={ Create } />
    <Route path='/routes/update' component={ Update } />

  </>
);

export default RouteRoutes;
