import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import InboxGeneral from '@/components/inboxGeneral.vue'
import DocumentLinks from '@/components/documentLinks.vue'

import InboxPage from '@/components/InboxPage.vue';
import EmailDetails from '@/components/EmailDetails.vue';


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
            path: '/inbox',
            name: 'inbox',
            component: InboxPage,
        },
        {
            path: '/inbox/:id',
            name: 'email-details',
            component: EmailDetails,
            props: true,
        },
    ]
})  

export default router