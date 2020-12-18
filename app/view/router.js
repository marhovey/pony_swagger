import Login from './pages/login/index.jsx';
import Index from './pages/index/index.jsx';
import Project from './pages/project/index.jsx';
import ProjectList from './pages/project-list/index.jsx';

export const routes = [
  {
    component: Login,
    path: '/login',
    exact: true
  },
  {
    component: Index,
    path: '/index',
    routes: [
      {
        component: Project,
        path: 'project/:id',
        exact: true
      },
      {
        component: ProjectList,
        path: '',
        exact: true
      },
    ]
  }
]