import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../firebase/config'

const requireAuth = (to,from,next) => {
  let user = projectAuth.currentUser

  if(!user){
    next({name:'Home'})
  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/jobs',
    name: 'JobList',
    component: () => import('../views/Jobs.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: () => import('../components/jobsDetails.vue'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/jobs/postJob',
    name: 'postJob',
    component: () => import('../components/CreateJob'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/Profile',
    name: 'mylistng',
    component: () => import('../views/Profile'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('@/components/Setup'),
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
