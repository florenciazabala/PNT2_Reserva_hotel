import { createRouter, createWebHistory } from '@ionic/vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import misReservas from '../views/misReservasView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/misReservas',
      name: 'Reservas',
      component: misReservas
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
