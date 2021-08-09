import React from 'react';
import { Route } from 'react-router-dom';

import Routes from '../pages/Route/Routes';

const RouteRoutes = () => (
  <>
    <Route exact path='/rotas' component={ Routes } />
    
  </>
);

export default RouteRoutes;
