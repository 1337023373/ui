import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import Mall from '../views/mall/Mall.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/mall',
    component: Mall,

  },
]

const router = new VueRouter({
  routes,
})

export default router
