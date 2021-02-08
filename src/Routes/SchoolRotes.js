import React from 'react'
import { Route } from 'react-router-dom'

import SchoolRegister from '../pages/SchoolRegister'

const SchoolRotes = () => (
  <>
    <Route path='/school/create' component={ SchoolRegister } />
  </>
);

export default SchoolRotes;
