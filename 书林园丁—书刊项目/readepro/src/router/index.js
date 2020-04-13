import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Magazine from '../views/Magazine/Magazine.vue'
import Subscribe from '../views/Subscribe/Subscribe.vue'
import About from '../views/About/About.vue'
import Detail from '../views/Detail/Detail.vue'
import Magazinedetail from '../views/Magazinedetail/Magazinedetail.vue'



// import Home from '../views/Home/Home.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    // {
    //     path: `/detail`,
    //     name: 'detail',
    //     component: Detail
    // },
    {
        path: '/detail/:saleId',
        name: 'detail',
        component: Detail
    },
    {
        path: '/magazinedetail/:id',
        name: 'magazinedetail',
        component: Magazinedetail
    },

    {
        path: '/magazine',
        name: 'magazine',
        component: Magazine
    },
    {
        path: '/subscribe',
        name: 'subscribe',
        component: Subscribe
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }

    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router