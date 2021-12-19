import { createRouter, createWebHistory } from 'vue-router'
//import { createRouter } from 'vue-router'
//import Home from '../views/Home.vue'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'



const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    {
        path: '/',
        name: 'EventList',
        component: EventList
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About
        // component: () =>
        //     import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
    ,
    {
        path: '/debug',
        name: 'Debug',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Debug.vue')
    }
]

const router = createRouter({
    //history: createWebHistory(process.env.BASE_URL),

    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router