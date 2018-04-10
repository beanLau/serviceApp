import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Forget from '@/pages/forget'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/forget',
      name: 'Forget',
      component: Forget
    }
  ]
})
