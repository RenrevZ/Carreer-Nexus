import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../firebase/config'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/jobs',
    name: 'JobList',
    component: () => import('../views/Jobs.vue')
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: () => import('../components/jobsDetails.vue'),
    props: true
  },
  {
    path: '/jobs/postJob',
    name: 'postJob',
    component: () => import('../components/CreateJob'),
    props: true
  },
  {
    path: '/Profile',
    name: 'mylistng',
    component: () => import('../views/Profile'),
    props: true
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('@/components/Setup')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
