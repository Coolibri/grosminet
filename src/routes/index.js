import AboutPage from 'src/components/pages/About.vue'
import MainPage from 'src/components/Main.vue'

export default [
  {
    name: 'main',
    path: '/',
    component: MainPage
  },
  {
    path: '/about/',
    component: AboutPage
  }
]
