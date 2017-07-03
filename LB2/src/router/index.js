import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '@/components/Hello';
import login from '../components/login/login.vue';
import admin from '../components/admin/admin.vue';
import resident from '../components/resident/resident.vue';
Vue.use(VueRouter)


const routes = [
    {
      name:'hello',
      path: '/',
      component: Hello
    },
    {
      name:'login',
      path:'/login',
      component:login
    },
     {
      name:'admin',
      path:'/admin',
      component:admin,
       meta: { requiresAuth: true , adminAuth:true , residentAuth : false}
    },
    {
      name:'resident',
      path:'/resident',
      component:resident,
       meta: { requiresAuth: true , residentAuth :true , adminAuth:false }
    }
]


const router = new VueRouter({routes,mode:'history'})  

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
    if(!authUser || !authUser.token) {
      next({name:'login'})
    }
    else if(to.meta.adminAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
    if(authUser.data.role_id === 'ADMIN') {
      next()
    }else {
      next('/resident')
    }
  } else if(to.meta.residentAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
    if(authUser.data.role_id === 'RESIDENT') {
      next()
    }else {
      console.log('Im in admin')
      next('/admin')
    }
  }
  }else {
  next()
  }
})


export default router;



