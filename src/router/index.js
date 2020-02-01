import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Occasion from '@/views/Occasion'
import Auth from '@/views/Auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path : '/occasion/:id',
    name : 'occasion',
    component : Occasion
  },
  {
    path : '/auth',
    name : "auth",
    component : Auth
  }
]
const router = new VueRouter({
  routes
})

router.beforeEach((from,to,next) => {
  next();
  scroll(0,0);
}) 

export default router
