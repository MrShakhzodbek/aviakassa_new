import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path: "/",
        name: 'home',
        component: ()=> import('../pages/home.vue')
    },
    {
        path: "/hotel",
        name: 'hotel',
        component: ()=> import('../pages/hotel.vue')
    },
    {
        path: "/ticket",
        name: 'ticket',
        component: ()=> import('../pages/ticket.vue')
    }
]



const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router