import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'

const routes = [
  { path: '/', redirect: '/login' },  // ให้ root path ไปหน้า login
  { path: '/login', component: LoginPage },
  { path: '/home', component: HomePage }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('loggedIn') === 'true'
  if (to.path === '/home' && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})
