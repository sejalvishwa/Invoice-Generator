import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../pages/LandingPage.vue'
import CreateInvoice from '../pages/CreateInvoice.vue'
import EditInvoice from '../pages/EditInvoice.vue'
import InvoiceHistory from '../pages/InvoiceHistory.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/create',
    name: 'CreateInvoice',
    component: CreateInvoice
  },
  {
    path: '/edit/:id',
    name: 'EditInvoice',
    component: EditInvoice,
    props: true
  },
  {
    path: '/history',
    name: 'InvoiceHistory',
    component: InvoiceHistory
  },
  {
    path: '/generate/:id',
    name: 'InvoiceDownload',
    component: () => import('@/components/InvoiceDownload.vue')
  },
  {
    path: '/:pathMatch(.*)*',  
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
