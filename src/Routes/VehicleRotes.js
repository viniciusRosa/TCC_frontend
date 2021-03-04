import React from 'react';
import { Route } from 'react-router-dom';

import Create from '../pages/Vehicle/Create';
import Schools from '../pages/Vehicle/Vehicles';
import Update from '../pages/Vehicle/Update';
import Overview from '../pages/Vehicle/Overview';


const VehicleRotes = () => (
  <>
    <Route exact path='/vehicles' component={ Schools } />
    <Route path='/vehicles/create' component={ Create } />
    <Route path='/vehicles/update' component={ Update } />
    <Route path='/vehicles/overview' component={ Overview } />


  </>
);

export default VehicleRotes;
