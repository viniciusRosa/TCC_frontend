import {
  vehicleOverview,
  schoolOverview,
  pointOverview } from './pages'


export default [
  {
    component: schoolOverview,
    path: '/schools',
    title: 'Escolas',
  },
  {
    component: vehicleOverview,
    path: '/vehicles',
    title: 'Veiculos',
  },
  {
    component: pointOverview,
    path: '/Points',
    title: 'Pontos',
  },
]
