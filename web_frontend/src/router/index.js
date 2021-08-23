import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userEnter',
    name: 'UserEnter',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserEnter.vue')
  },
  {
    path: '/dayPlan',
    name: 'DayPlan',
    component: () => import(/* webpackChunkName: "about" */ '../views/DayPlan.vue')
  },
  {
    path: '/monthPlan',
    name: 'MonthPlan',
    component: () => import(/* webpackChunkName: "about" */ '../views/MonthPlan.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
