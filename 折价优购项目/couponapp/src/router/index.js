import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hot from '../views/Hot.vue'
import Cart from '../views/Cart.vue'
import User from '../views/User.vue'
import Search from '../views/Search.vue'
import SearchRs from '../views/SearchRs.vue'
import Goods from '../views/Goods.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Collection from '../views/Collection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/goods/:gid/:coupon_amount/:share_url',
    name: 'goods',
    component: Goods
  },
  {
    path: '/home/search',
    name: 'search',
    component: Search
  },
  {
    path: '/home/search/:kw',
    name: 'searchrs',
    component: SearchRs
  },
  {
    path: '/hot',
    name: 'hot',
    component: Hot
  },
  {
    path: '/cart',
    name: 'cart',
    component: Collection
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/user/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user/register',
    name: 'register',
    component: Register
  },
  {
    path: '/user/collection',
    name: 'collection',
    component: Collection
  },
  {
    path: '/',
    redirect:"/home"
  }
  
]

const router = new VueRouter({
  routes
})

export default router
