import React from 'react'
import { Route } from 'react-router-dom'

import Create from '../pages/School/Create'
import Schools from '../pages/School/Schools'
import Update from '../pages/School/Update'


const SchoolRotes = () => (
  <>
    <Route exact path='/schools' component={ Schools } />
    <Route path='/schools/create' component={ Create } />
    <Route path='/schools/update' component={ Update } />


  </>
);

export default SchoolRotes;
