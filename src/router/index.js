import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Suscriptors from '../views/Suscriptors.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog/:post',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/suscriptors',
    name: 'Suscriptors',
    component: Suscriptors,
  },
  {/* esta ruta es notfound con un redirect automatico al inicio tambien podria hacer una vista notfound 404 y con un boton hacerla volver al inicio*/
    path: '/*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
