import { createRouter, createWebHistory } from 'vue-router'
import { checkAuth, isPhoneBound } from './utils/auth.js'

import Index from './pages/Index.vue'
import Profile from './pages/Profile.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/profile', component: Profile },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await checkAuth()
  const phoneBound = isPhoneBound()

  if (!isAuthenticated && to.path !== '/login') {
    next('/login')
  } else if (isAuthenticated && !phoneBound && to.path !== '/register') {
    next('/register')
  } else {
    next()
  }
})

export default router