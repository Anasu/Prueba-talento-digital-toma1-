import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      login: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      login: false
    }
  },
  {
    path: '/ordenes',
    name: 'Ordenes',
    component: () => import(/* webpackChunkName: "login" */ '../views/Ordenes.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/ordenes/:orderID',
    name: 'Orden',
    component: () => import(/* webpackChunkName: "login" */ '../views/Ordenes.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/inventario',
    name: 'Inventario',
    component: () => import(/* webpackChunkName: "login" */ '../views/Inventario.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "login" */ '../views/Profile.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/*',
    name: 'Not Found',
    component: () => import(/* webpackChunkName: "login" */ '../views/Not-Found.vue'),
    meta: {
      login: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  let authRequired = to.matched.some(route => route.meta.login);
  if (store.state.token.length == 0 && authRequired) {
    
    next('login');
  } else {
    next();
  }
});

export default router
