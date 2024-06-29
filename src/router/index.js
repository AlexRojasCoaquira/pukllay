import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import LayoutPukllay from "../layouts/LayoutPukllay.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue'),
    },
    {
      path: '/pukllay',
      component: () => import('../layouts/LayoutPukllay.vue'),
      children: [
        {
          path: '',
          name: 'pukllay',
          component: () => import('../views/PukllayView.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: 'date',
          name: 'date',
          component: () => import('../views/DateView.vue'),
        },
        {
          path: 'marry',
          name: 'marry',
          component: () => import('../views/MarryView.vue'),
        },
        {
          path: 'detail',
          name: 'detail',
          component: () => import('../views/DetailView.vue'),
        },
      ]
    },


  ],
})

export default router
