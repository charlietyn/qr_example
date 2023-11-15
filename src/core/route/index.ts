import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../../views/index.vue')
    },
    {
        path: '/icon',
        name: 'icon',
        component: () => import('../../views/icon.vue')
    },
    {
        path: '/qr',
        name: 'qr',
        component: () => import('../../views/qr.vue')
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes,
    strict: true,
})

