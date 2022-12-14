const _nav =  [
{
  _tag: 'CSidebarNavItem',
  name: 'Painel Geral',
  to: '/dashboard',
  icon: 'cil-speedometer'
},
{
  _tag: 'CSidebarNavTitle',
  _children: ['Opções']
},
{
  _tag: 'CSidebarNavItem',
  name: 'Cadastro de Competidor',
  to: '/wall',
  icon: 'cil-warning'
},
{
  _tag: 'CSidebarNavItem',
  name: 'Regras',
  to: '/documents',
  icon: 'cil-file'
},
{
  _tag: 'CSidebarNavItem',
  name: 'Reservas',
  to: '/reservations',
  icon: 'cil-calendar'
},
{
  _tag: 'CSidebarNavItem',
  name: 'Ocorrencias',
  to: '/warnings',
  icon: 'cil-bell'
},
{
  _tag: 'CSidebarNavItem',
  name: 'Achados e Perdidos',
  to: '/foundandlost',
  icon: 'cil-lock-locked'
},
{
  _tag: 'CSidebarNavTitle',
  _children: ['Dados']
},
{
  _tag: 'CSidebarNavItem',
  name: 'Usuários',
  to: '/users',
  icon: 'cil-people'
},
{
  _tag: 'CSidebarNavItem',
  name: 'Unidades',
  to: '/units',
  icon: 'cil-home'
},
{
  _tag: 'CSidebarNavItem',
  name: 'Áreas Comuns',
  to: '/commonareas',
  icon: 'cil-paperclip'
},
{
  _tag: 'CSidebarNavTitle',
  _children: ['Configurações']
},
{
  _tag: 'CSidebarNavItem',
  name: 'Meu Perfil',
  to: '/profile',
  icon: 'cil-user'
},
{
  _tag: 'CSidebarNavItem',
  name: 'Sair',
  to: '/logout',
  icon: 'cil-drop'
},
]

export default _nav
