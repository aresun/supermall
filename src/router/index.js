import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home/Home')
const Category = () => import('@/views/Category/Category')
const Cart = () => import('@/views/Cart/Cart')
const Profile = () => import('@/views/Profile/Profile')

Vue.use(VueRouter)

const routes = [{
            path: '/',
            redirect: '/home'
      }, {
            path: '/home',
            component: Home
      }, {
            path: '/category',
            component: Category
      }, {
            path: '/cart',
            component: Cart
      }, {
            path: '/profile',
            component: Profile
      }
      // {
      //   path: '/about',
      //   name: 'about',
      //   // route level code-splitting
      //   // this generates a separate chunk (about.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      // }
]

const router = new VueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes
})

export default router