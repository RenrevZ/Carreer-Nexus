import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../firebase/config'

// ROUTE GUARD
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
    name: 'Profile',
    component: () => import('../views/Profile'),
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('@/components/Setup')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('@/views/Message'),
    beforeEnter: requireAuth
  },
  {
    path: '/Mylisting',
    name: 'Mylisting',
    component: () => import('@/views/MyLisiting'),
    beforeEnter: requireAuth
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404Notfound')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
