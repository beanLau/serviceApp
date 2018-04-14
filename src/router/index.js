import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Forget from '@/pages/forget'
import Userhome from '@/pages/userhome'
import Userorder from '@/pages/userorder'
import Usermy from '@/pages/usermy'
import Createorder from '@/pages/createOrder'
Vue.use(Router)

let router =  new Router({
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
    },{
      path:'/userhome',
      name:'userhome',
      component:Userhome,
      
    },{
      path:'/userorder',
      name:'userorder',
      component:Userorder
    },{
      path:'/usermy',
      name:'usermy',
      component:Usermy
    },{
      path:'/createorder',
      name:'createorder',
      component:Createorder
    }
  ]
})
// router.afterEach((to, from, next) => {
//   console.log(this);
// });
export default router;