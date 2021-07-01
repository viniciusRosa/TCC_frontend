import React from 'react';
import { Route } from 'react-router-dom';

import Vacancy from '../pages/Vacancy/Vacancy';
import Update from '../pages/Vacancy/Update';
import Overview from '../pages/Vacancy/Overview';

const VacancyRotes = () => (
  <>
    <Route exact path='/vacancy' component={ Vacancy } />
    <Route path='/vacancy/update' component={ Update } />
    <Route path='/vacancy/overview' component={ Overview } />
  </>
);

export default VacancyRotes;
