import React from 'react';
import { Route } from 'react-router-dom';

import VacancyRequest from '../pages/Vacancy/VacancyRequest';
import VacancyAccepted from '../pages/Vacancy/VacancyAccepted';
import VacancyRejected from '../pages/Vacancy/VacancyRejected';
import VacancyQueue from '../pages/Vacancy/VacancyQueue';

import Update from '../pages/Vacancy/Update';
import Overview from '../pages/Vacancy/Overview';

const VacancyRotes = () => (
  <>
    <Route exact path='/vacancyrequest' component={ VacancyRequest } />
    <Route exact path='/vacancyaccepted' component={ VacancyAccepted } />
    <Route exact path='/vacancyrejected' component={ VacancyRejected } />
    <Route exact path='/vacancyqueue' component={ VacancyQueue } />

    <Route path='/vacancy/update' component={ Update } />
    <Route path='/vacancy/overview' component={ Overview } />
  </>
);

export default VacancyRotes;
