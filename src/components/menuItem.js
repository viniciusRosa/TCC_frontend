const items = [
  {
    name: 'cadastrar',
    label: 'Cadastrar',
    subitems: [
      { name: 'aluno', label: 'Aluno', href: '/alunos' },
      { name: 'escola', label: 'Escola', href: '/' },
    ],
  },
  {
    name: 'listar',
    label: 'Listar',
    subitems: [
      { name: 'alunos', label: 'Alunos', href: '/' },
      { name: 'escola', label: 'Escola', href: '/' }
    ]
  }
]

module.exports = items;