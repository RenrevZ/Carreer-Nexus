import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/another',
    name: 'Another',
    component: () => import('../views/Try.vue')
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
