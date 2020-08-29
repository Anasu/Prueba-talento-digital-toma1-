import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/ordenes',
    name: 'Ordenes',
    component: () => import(/* webpackChunkName: "login" */ '../views/Ordenes.vue')
  },
  {
    path: '/*',
    name: 'Not Found',
    component: () => import(/* webpackChunkName: "login" */ '../views/Not-Found.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
