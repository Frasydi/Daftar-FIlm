import { createRouter, createWebHistory,useRoute } from 'vue-router'
import Film from "../views/Film.vue"
import Add from "../views/Add.vue"
import About from "../views/About.vue"
import edit from "../views/edit.vue"
import DataBase from "../views/DataBase.vue"
import FilmReadOnly from "../views/FilmReadOnly.vue"
import Home from "../views/Home.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { transition: 0 },
    },
    {
      path : "/film",
      name : 'myList',
      component : Film,
      meta : { transition : 1 }
    },
    {
      path : "/tmdb",
      name : "tmdb",
      component : FilmReadOnly,
      meta : { transition : 2 }
    },
    {
        path : '/add',
        name : 'add',
        component : Add,
        meta: { transition: 2 },
       
        
    },
    {
      path : "/edit/:id",
      name : "edit",
      component : edit,
      meta : { transition: 2 }
    }
    
    ,{
      path : "/about",
      name : "about",
      component : About,
      meta: { transition: 3 },
    }, {
      path : "/database",
      name : "database",
      component : DataBase,
      meta : { transition : 4  }
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
