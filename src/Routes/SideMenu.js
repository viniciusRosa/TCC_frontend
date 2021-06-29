import {
  vacancyOverview,
  schoolOverview,
  pointOverview } from '../pages'


export default [
  {
    component: vacancyOverview,
    path: '/vacancy',
    title: 'Solicitações',
  },
  {
    component: schoolOverview,
    path: '/schools',
    title: 'Escolas',
  },
  {
    component: pointOverview,
    path: '/Points',
    title: 'Pontos',
  },
]
