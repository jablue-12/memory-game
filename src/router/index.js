import Vue from 'vue'
import VueRouter from 'vue-router'
import UserScoresPage from '@/views/UserScoresPage.vue'
import NumberCardsPage from '@/views/NumberCardsPage.vue'
import PictureCardsPage from '@/views/PictureCardsPage.vue'
import ErrorPage from '@/views/ErrorPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserScoresPage',
    component: UserScoresPage
  },
  {
    path: '/numbers',
    name: 'NumberCardsPage',
    component: NumberCardsPage
  },
  {
    path: '/pictures',
    name: 'PictureCardsPage',
    component: PictureCardsPage
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: ErrorPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
