import GameRoutes from './game'

import AboutPage from 'src/components/pages/About.vue'
import MainPage from 'src/components/pages/Home.vue'

export default [
  ...GameRoutes,
  {
    name: 'main',
    path: '/',
    component: MainPage
  },
  {
    name: 'about',
    path: '/about/',
    component: AboutPage
  }
]
