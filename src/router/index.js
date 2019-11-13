import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
// import planMap from './planMap.js'
import planMap from '../views/planMap.vue'
import real from '../views/real.vue'
import assess from '../views/assess.vue'
import mind from '../views/mind.vue'
import bigData from '../views/bigData.vue'
import manage from '../views/manage.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // planMap,
  {
    path: '/',
    name: 'planMap',
    component: planMap
  },
  {
    path: '/assess',
    name: 'assess',
    component: assess
  },
  {
    path: '/manage',
    name: 'manage',
    component: manage
  },
  {
    path: '/bigData',
    name: 'bigData',
    component: bigData
  },
  {
    path: '/real',
    name: 'real',
    component: real
  },
  {
    path: '/mind',
    name: 'mind',
    // route level code-splitting
    // this generates a separate chunk (mind.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: mind
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
