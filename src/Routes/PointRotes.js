import React from 'react';
import { Route } from 'react-router-dom';

import Create from '../pages/Point/Create';
import Points from '../pages/Point/Points';
import Update from '../pages/Point/Update';
import Overview from '../pages/Point/Overview';


const SchoolRotes = () => (
  <>
    <Route exact path='/points' component={ Points } />
    <Route path='/points/create' component={ Create } />
    <Route path='/points/update' component={ Update } />
    <Route path='/points/overview' component={ Overview } />
  </>
);

export default SchoolRotes;
