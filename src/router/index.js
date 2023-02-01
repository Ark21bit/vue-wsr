import { createRouter, createWebHistory } from 'vue-router'
import Index from "../views/Index.vue"
import Login from "../views/Login.vue"
import Admin from "../views/Admin.vue"
import Record from "../views/Record.vue"
import Consultant from "../views/Consultant.vue"

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    meta: { 
      Auth: true
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,   
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,  
    meta: { 
      Auth: true
    }, 
  },
  {
    path: '/record',
    name: 'record',
    component: Record,  
    meta: { 
      Auth: true
    },     
  },  
  {
    path: '/consultant',
    name: 'consultant',
    component: Consultant,  
    meta: { 
      Auth: true
    },     
  },  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.Auth) {    
    if (localStorage.isAuth == "true") {      
      return next()      
    }
    next('/login') 
  } 
  next()
})

export default router
