import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import StartPage from '@/components/StartPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'startPage',
      component: StartPage
    },
    {
      path: '/game',
      name: 'game',
      component: Game,
      props: true
    }
  ]
})
