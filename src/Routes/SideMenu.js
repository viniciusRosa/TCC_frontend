
export default [
  {
    path: '/dashboard',
    title: 'Dashboard',
  },
  {
    path: '/vacancyrequest',
    title: 'Solicitações pendentes',
    children: [
      {
        path: '/vacancyqueue',
        title: 'Fila de espera'
      },
      {
        path: '/vacancyaccepted',
        title: 'Deferidos'
      },
      {
        path: 'vacancyrejected',
        title: 'Indeferidos'
      }
    ]
  },
  {
    path: '/schools',
    title: 'Escolas',
  },
  {
    path: '/points',
    title: 'Pontos',
  },
  {
    path: '/rotas',
    title: 'Rotas',
  },
]
