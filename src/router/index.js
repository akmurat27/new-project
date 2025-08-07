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
        },
        {
            path: '/reportTable',
            component: () => import('../components/reportTable.vue')
        },
        {
            path: '/archive',
            name: 'Archive',
            component: () => import('../components/archive.vue'),
            props: route => ({ archivedEmails: route.query.archivedEmails ? JSON.parse(route.query.archivedEmails) : [] }) 
        }
    ]
})  

export default router