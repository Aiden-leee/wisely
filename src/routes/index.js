import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/',
            component: ()=> import('@/components/Cart.vue')
        },
        {
            path: '/phase_cycle',
            component: ()=> import('@/components/Cycle.vue')
        },
        {
            path: "*",
            component: ()=> import("@/components/NotFound.vue")
        }
    ]
})

export default router;