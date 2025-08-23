import { createRouter, createWebHistory } from 'vue-router'
import UserIndex from '../views/UserIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user-index',
      component: UserIndex,
    },
  ]
})

export default router
