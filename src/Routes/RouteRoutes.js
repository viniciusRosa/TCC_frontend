import React from 'react';
import { Route } from 'react-router-dom';

import Routes from '../pages/Route/Routes';
import OverView from '../pages/Route/Overview';

const RouteRoutes = () => (
  <>
    <Route exact path='/routes' component={ Routes } />
    <Route path='/routes/overview' component={ OverView } />
    
  </>
);

export default RouteRoutes;
