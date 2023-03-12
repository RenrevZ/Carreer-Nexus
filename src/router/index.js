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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
