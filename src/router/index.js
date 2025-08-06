import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import InboxGeneral from '@/components/inboxGeneral.vue'
import DocumentLinks from '@/components/documentLinks.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            component: Home 
        },
        {
            path: '/about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/inbox',
            component: () => import('../components/inbox.vue')
        },
        {
            path: '/inbox/1',
            component: InboxGeneral
        },
        {
            path: '/inbox/2',
            component: DocumentLinks
        },
        {
            path: '/emailTable',
            component: () => import('../components/emailTable.vue')
        }
    ]
})  

export default router