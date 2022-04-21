import { createRouter, createWebHistory } from 'vue-router'
import Film from "../views/Film.vue"
import Add from "../views/Add.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Film,
      
    },
    {
        path : '/add',
        name : 'add',
        component : Add
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Makan
    } */
  ]
})

export default router
